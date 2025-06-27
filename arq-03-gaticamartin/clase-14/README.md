# PRESENTACION FINAL

## Primera Aproximacion

IDEA INICIAL PROYECTO PROGRAMACION

pagina pagina relacionada a sismologia nacional
conectar API´s con p5
desarrollar lenguaje grafico de interes
-- idea grafica inicialfondo horizontal 1080x720 fondo negro,cada vez que se registra un sismo se dibuja en el centro de la pantalla una elipse de radio relacionado a la magnitud del sismo. esta circunferencia se desbanece lentamente hasta desaparecer 24 h despues. los limites de la pantalla son equivalentes a un sismo de grado considerable(?????)

links

https://earthquake.usgs.gov/fdsnws/event/1/
https://www.getambee.com/api/earthquake
https://www.sismologia.cl/sismicidad/catalogo/2025/04/20250411.html
.

https://commonvoice.mozilla.org/en <- web entrenar reconocimiento de voz personalizado

https://editor.p5js.org/montoyamoraga/sketches/5zLOhCZta <- link modelo reconocimiento voz don francisco

## Idea Inicial

Representacion en tiempo real de los sismos de Chile, en un lenguaje que represente su magnitud y de alguna manera la fecha y lugar, al menos de los producidos en las ultimas 24h con el fin de representar Chile como un pais sismico

##Utilizacion de API

## Codigo Final

```python

let sismos = [];
let datosCargados = false;
let cargando = false;
let tiempoInicioCarga = 0;
let estado = 0; // 0 = poema, 1 = sismos, 2 = cargando predicción, 3 = predicción

let sismosVisuales = [];
let modelo;
let prediccion = null;
let fechaPredicha = "";
let lugarPredicho = "";

function setup() {
  createCanvas(1080, 720);
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(255);
}

function draw() {
  background(0);

  switch (estado) {
    case 0:
      // Pantalla Poema Vibrante
      let amplitud = 2;
      let frecuencia = 0.1;
      let offsetX = sin(frameCount * frecuencia * 1.3) * amplitud;
      let offsetY = sin(frameCount * frecuencia * 0.9) * amplitud;
      text(
        
        "...La patria delgada,\n la orilla del páramo andino,\n la tierra que dio en su angostura la uva celeste\n y el cobre absoluto...\n padece otra vez el espanto y la grieta.",
        
        width / 2 + offsetX,
        height / 2 + offsetY
        
      );
          text("...La patria delgada,\n la orilla del páramo andino,\n la tierra que dio en su angostura la uva celeste\n y el cobre absoluto...\n padece otra vez el espanto y la grieta.", width / 2, height / 2);
      break;

    case 1:
      // Pantalla de Sismos
      sismosVisuales = sismosVisuales.filter((sv) => sv.draw());

      if (sismosVisuales.length > 0) {
        let ultimo = sismosVisuales[sismosVisuales.length - 1];
        let masFuerte = sismosVisuales.reduce((max, sv) => {
          return sv.sismo.Magnitud > max.sismo.Magnitud ? sv : max;
        }, sismosVisuales[0]);

        fill(255);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(
          `Último Sismo: ${ultimo.sismo.Fecha} - M${ultimo.sismo.Magnitud}`,
          width / 2,
          height / 2 - 10
        );
        text(
          `\nMayor Magnitud: M${masFuerte.sismo.Magnitud} \n ${masFuerte.sismo.RefGeografica}`,
          width / 2,
          height / 2 + 15
        );
                fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(20);
        text("\ncuando será el proximo?", width / 2, height - 50);
      }
      break;

 case 2:
  let tiempoTranscurrido = millis() - tiempoInicioCarga;
  if (tiempoTranscurrido < 3000) {
    // Imagen de fondo
   // imageMode(CORNER);
    //image(imgCarga, 0, 0, width, height);

    // Texto encima
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("*piensa en Marcelo Lagos*", width / 2, height / 2);
  } else if (prediccion !== null) {
    estado = 3; // Ir a pantalla de predicción
  }
  break;

    case 3:
      // Pantalla de Predicción
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(45);
      text("Prediccion del Próximo Sismo:", width / 2, height / 2 - 60);
      textSize(30);
      text(`\nMagnitud estimada: M${prediccion.toFixed(2)}`, width / 2, height / 2 - 20);
      text(`\nFecha estimada: ${fechaPredicha}`, width / 2, height / 2 + 10);
      text(`\n\nUbicación estimada: ${lugarPredicho}`, width / 2, height / 2 + 40);
      textSize(30);
      text("...", width / 2, height - 40);
      break;
  }
}

function mousePressed() {
  if (estado === 0 && !datosCargados && !cargando) {
    cargando = true;
    tiempoInicioCarga = millis();
    let url = "https://corsproxy.io/?https://api.gael.cloud/general/public/sismos";
    loadJSON(url, gotData, "json", errorCarga);
  } else if (estado === 1) {
    // Ir a pantalla de carga de predicción
    estado = 2;
    tiempoInicioCarga = millis();
    prediccion = null;

    setTimeout(() => {
      let prediccionCompleta = simularPrediccion();
      prediccion = prediccionCompleta.magnitud;
      fechaPredicha = prediccionCompleta.fecha.toLocaleString();
      lugarPredicho = prediccionCompleta.lugar;
    }, 1200);
  } else if (estado === 3) {
    estado = 1; // Volver a visualización
  }
}

function gotData(data) {
  let tiempoTranscurrido = millis() - tiempoInicioCarga;
  let tiempoRestante = 1000 - tiempoTranscurrido;

  if (tiempoRestante > 0) {
    setTimeout(() => {
      procesarDatos(data);
    }, tiempoRestante);
  } else {
    procesarDatos(data);
  }
}

function procesarDatos(data) {
  sismos = data;
  datosCargados = true;
  cargando = false;
  estado = 1; // Cambiar a pantalla de visualización

  let ahora = new Date();
  let hace24Horas = new Date(ahora.getTime() - 24 * 60 * 60 * 1000);
  sismosVisuales = [];

  for (let sismo of sismos) {
    let fechaSismo = new Date(sismo.Fecha);
    if (fechaSismo > hace24Horas) {
      sismosVisuales.push(new SismoVisual(sismo));
    }
  }

  crearModelo()
    .then(() => entrenarModelo())
    .then(() => {
      // predicción al hacer clic
    });
}

function errorCarga(err) {
  cargando = false;
  datosCargados = false;
  console.error("Error al cargar datos:", err);
}

// Simula la predicción completa (PREDICCION FALSA POR AHORA): magnitud, fecha y ubicación
function simularPrediccion() {
  let magnitud = random(4, 7);

  // Fecha futura entre 2 y 24 horas desde ahora
  let fechaFutura = new Date();
  let horasAdelanto = floor(random(2, 36));
  fechaFutura.setHours(fechaFutura.getHours() + horasAdelanto);

  // Array con posibles ubicaciones ficticias
  let lugares = [
    "Zona costera",
    "Altiplano",
    "Región central",
    "Norte de Chile",
    "Sur de Chile",
    "Talca",
    "Falla de San Ramón",
    "Antartica Chilena"
  ];
  let lugar = random(lugares);

  return {
    magnitud: magnitud,
    fecha: fechaFutura,
    lugar: lugar,
  };
}

// Clase visual sismo
class SismoVisual {
  constructor(sismo) {
    this.sismo = sismo;
    this.inicio = new Date(sismo.Fecha).getTime();
    this.radioBase = map(sismo.Magnitud, 0, 8, 10, width / 2);
  }

  draw() {
    let ahora = Date.now();
    let dif = ahora - this.inicio;
    let duracion = 24 * 60 * 60 * 1000;

    if (dif > duracion) return false;

    let progreso = dif / duracion;
    let alpha = map(progreso * progreso, 0, 1, 255, 0);
    let grosor = map(progreso, 0, 1, 6, 1);

    let esUltimo = this === sismosVisuales[sismosVisuales.length - 1];
    let radioActual = this.radioBase;

    if (esUltimo) {
      let pulso = 1 + 0.03 * sin(frameCount * 0.05);
      radioActual *= pulso;
    }

    noFill();
    stroke(255, alpha);
    strokeWeight(grosor);
    ellipse(width / 2, height / 2, radioActual * 2);

    return true;
  }
}

// Funciones dummy para crearModelo y entrenarModelo (para evitar errores)
async function crearModelo() {
  // Aquí iría la lógica para crear modelo TensorFlow.js
  return;
}
async function entrenarModelo() {
  // Aquí iría la lógica para entrenar modelo TensorFlow.js
  return;
}
```
