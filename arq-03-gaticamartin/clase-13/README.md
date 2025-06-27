# clase-13
 ## Ajustes Modelo terremotos

 Codigo con ajustes de visualizacion: de texto a circunferencias
 -las circunferencias tienen un radio segun la magnitud del sismo
 -la opacidad de la circunferencia va bajando, del 100% apenas se reporta, hasta el 0% 24 horas despues de transcurrido.

 ´´´´let sismos = [];
let datosCargados = false;
let cargando = false;

let sismosVisuales = [];
let modelo;
let prediccion = null;

function setup() {
  createCanvas(1080, 720);
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(255);
}

function draw() {
  background(0);

  if (!datosCargados && !cargando) {
    text("Click para cargar datos sísmicos", width / 2, height / 2);
    return;
  }

  if (cargando) {
    text("Cargando datos sísmicos...", width / 2, height / 2);
    return;
  }

  // Dibujar sismos activos
  sismosVisuales = sismosVisuales.filter(sv => sv.draw());

  // Mostrar texto del último sismo
  if (sismosVisuales.length > 0) {
    let ultimo = sismosVisuales[sismosVisuales.length - 1];
    fill(255);
    textAlign(CENTER, TOP);
    text(`Último sismo: ${ultimo.sismo.Fecha} - M${ultimo.sismo.Magnitud}`, width / 2, 10);
  }

  // Mostrar predicción
  if (prediccion !== null) {
    fill(255, 100, 100);
    textAlign(CENTER, BOTTOM);
    text(`Predicción magnitud próxima: ${prediccion.toFixed(2)}`, width / 2, height - 30);
  }
}

function mousePressed() {
  if (!datosCargados && !cargando) {
    cargando = true;
    let url = 'https://corsproxy.io/?https://api.gael.cloud/general/public/sismos';
    loadJSON(url, gotData, 'json', errorCarga);
  }
}

function gotData(data) {
  sismos = data;
  datosCargados = true;
  cargando = false;

  // Filtrar últimos 24h
  let ahora = new Date();
  let hace24Horas = new Date(ahora.getTime() - 24 * 60 * 60 * 1000);
  sismosVisuales = [];

  for (let sismo of sismos) {
    let fechaSismo = new Date(sismo.Fecha);
    if (fechaSismo > hace24Horas) {
      sismosVisuales.push(new SismoVisual(sismo));
    }
  }

  // Modelo de IA
  crearModelo()
    .then(() => entrenarModelo())
    .then(() => {
      prediccion = predecirProximoSismo();
      console.log("Predicción próxima magnitud:", prediccion);
    });
}

function errorCarga(err) {
  cargando = false;
  datosCargados = false;
  console.error("Error al cargar datos:", err);
}

// ---------------------
// Clase visual sismo
// ---------------------
class SismoVisual {
  constructor(sismo) {
    this.sismo = sismo;
    this.inicio = new Date(sismo.Fecha).getTime();
    this.radio = map(sismo.Magnitud, 0, 8, 20, width); // Más separación
  }

  draw() {
    let ahora = Date.now();
    let dif = ahora - this.inicio;
    let duracion = 24 * 60 * 60 * 1000;

    if (dif > duracion) return false;

    // Opacidad más extrema (curva cuadrática)
    let progreso = dif / duracion;
    let alpha = map(progreso * progreso, 0, 1, 255, 0);

    // Grosor: más reciente = más grueso
    let grosor = map(progreso, 0, 1, 6, 1);

    noFill();
    stroke(255, alpha);
    strokeWeight(grosor);
    ellipse(width / 2, height / 2, this.radio * 2);

    return true;
  }
}

// ---------------------
// TensorFlow.js
// ---------------------
async function crearModelo() {
  modelo = tf.sequential();
  modelo.add(tf.layers.dense({ units: 10, inputShape: [3], activation: 'relu' }));
  modelo.add(tf.layers.dense({ units: 1 }));
  modelo.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
}

function prepararDatos(sismos) {
  sismos.sort((a, b) => new Date(a.Fecha) - new Date(b.Fecha));
  let magnitudes = sismos.map(s => s.Magnitud);

  let xs = [];
  let ys = [];
  for (let i = 0; i < magnitudes.length - 3; i++) {
    xs.push(magnitudes.slice(i, i + 3));
    ys.push(magnitudes[i + 3]);
  }

  const xsTensor = tf.tensor2d(xs);
  const ysTensor = tf.tensor2d(ys, [ys.length, 1]);
  return { xsTensor, ysTensor };
}

async function entrenarModelo() {
  if (sismos.length < 4) return;
  const { xsTensor, ysTensor } = prepararDatos(sismos);
  await modelo.fit(xsTensor, ysTensor, {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        //console.log(`Epoch ${epoch + 1}: loss = ${logs.loss.toFixed(4)}`);
      }
    }
  });
  xsTensor.dispose();
  ysTensor.dispose();
}

function predecirProximoSismo() {
  if (sismos.length < 3) return null;
  let ultimas3 = sismos.slice(-3).map(s => s.Magnitud);
  let inputTensor = tf.tensor2d([ultimas3]);
  let prediccionTensor = modelo.predict(inputTensor);
  let valorPredicho = prediccionTensor.dataSync()[0];
  inputTensor.dispose();
  prediccionTensor.dispose();
  return valorPredicho;
}
