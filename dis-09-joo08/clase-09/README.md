# clase-09

viernes 09 mayo 2025

## BARBIE WORLD

integrantes:

* Josefa Gutierrez <https://github.com/joo08>
* Romina Cancino <https://github.com/Romicancino>

## acerca del proyecto

El proyecto es un filtro interactivo, el cual usa inteligencia artificial para detectar movimientos, como en este caso lo es el parpadeo, además detecta el rostro para así poder decorar con distintos accesorios con temática “Barbie”. El filtro está hecho con el editor web p5.js y también utiliza ayuda del modelo FaceMesh de la biblioteca ml5.js, el cual detecta puntos clave en el rostro.

El filtro que se crea reconoce a la persona delante de la pantalla y decora con distintos accesorios 2D la parte superior del cuerpo, la parte divertida de este filtro es que los accesorios cambian cada vez que la inteligencia artificial detecta un parpadeo. Gracias a la detección de los puntos claves en el rostro se pueden ubicar los accesorios con precisión y adaptabilidad y para la detección del parpadeo se utilizan los puntos claves que nos proporciona esta tecnología. El filtro se desarrolla en tiempo real y no requiere tocar ningún botón para cambiar de accesorio. Por último queremos destacar que el filtro cambia de accesorios en bucle, cada accesorio en su respectivo orden, no de forma aleatoria.

El proyecto fue desarrollado utilizando principalmente el editor web p5.js en combinación con ml5.js, específicamente con el modelo FaceMesh. 

p5.js es una biblioteca de JavaScript diseñada para hacer accesible la programación creativa, especialmente en aplicaciones gráficas e interactivas. Ofrece una sintaxis sencilla para manipular gráficos, audio, video y entradas del usuario, facilitando la creación de experiencias visuales dinámicas en el navegador ya sea en computadores o celulares

ml5.js es una biblioteca de aprendizaje automático de alto nivel construida sobre TensorFlow.js. Proporciona modelos preentrenados listos para usar en aplicaciones creativas e interactivas, como clasificación de imágenes, generación de texto y detección de poses.
FaceMesh: es un modelo que detecta más de 400 puntos clave en el rostro humano en tiempo real. Esto permite identificar partes específicas del rostro como ojos, boca, nariz y contorno facial.

para resumir nuestro trabajo, ocupamos las herramientas en las siguientes cosas: 
p5.js: renderiza en tiempo real los gráficos y accesorios del filtro.

FaceMesh (ml5.js): detecta puntos clave del rostro y permite posicionar los accesorios con precisión; además, identifica el parpadeo para activar el cambio de accesorios.

como Valor añadido, gracias a estas herramientas, nuestro proyecto logra una experiencia fluida, divertida y accesible para el usuario, invitándolo a participar y eliminando la necesidad de controles manuales y ofreciendo una interacción completamente gestual.

## código del proyecto

```javascript
let video;
let facemesh;
let predictions = [];

let accesorios = [];
let accesorioActual = 0;
let blinkCooldown = 0;
let earThreshold = 0.33;
let blinked = false;

function preload() {
  accesorios.push(loadImage('gorromujer.png'));
  accesorios.push(loadImage('gorrohombre.png'));
  accesorios.push(loadImage('gafasmujer.png'));
  accesorios.push(loadImage('gafashombre.png'));
  accesorios.push(loadImage('brillos.png'));
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  //Ocupamos faceMesh para mayor fluidez
  facemesh = ml5.facemesh(video, modelReady);
  facemesh.on('predict', results => {
    predictions = results;
  });

  createP('Estado del modelo:').id('status-label');
  createP('Cargando...').id('status');
}

function modelReady() {
  select('#status').html('¡Modelo cargado!');
}

function draw() {
  image(video, 0, 0, width, height);
  detectarParpadeo();
  dibujarAccesorio();
  if (blinkCooldown > 0) blinkCooldown--;
}

//Esta función (EAR) la implementamnos al darnos cuenta que el FaceMesh no funionaba tan bien por si solo
function calculateEAR(p1, p2, p3, p4, p5, p6) {
  let A = dist(p2[0], p2[1], p6[0], p6[1]);
  let B = dist(p3[0], p3[1], p5[0], p5[1]);
  let C = dist(p1[0], p1[1], p4[0], p4[1]);
  return (A + B) / (2.0 * C);
}

function detectarParpadeo() {
  if (predictions.length > 0) {
    let keypoints = predictions[0].scaledMesh;

    let left = [
      keypoints[33], // p1
      keypoints[160], // p2
      keypoints[158], // p3
      keypoints[133], // p4
      keypoints[153], // p5
      keypoints[144], // p6
    ];
    let right = [
      keypoints[362], // p1
      keypoints[385], // p2
      keypoints[387], // p3
      keypoints[263], // p4
      keypoints[373], // p5
      keypoints[380], // p6
    ];

    let leftEAR = calculateEAR(...left);
    let rightEAR = calculateEAR(...right);
    let ear = (leftEAR + rightEAR) / 2;

    if (ear < earThreshold && !blinked && blinkCooldown === 0) {
      accesorioActual = (accesorioActual + 1) % accesorios.length;
      blinkCooldown = 20;
      blinked = true;
    }

    if (ear >= earThreshold) {
      blinked = false;
    }
  }
}

//Utilizamos eyeDist para poder posicionar mejor los accesorios
function dibujarAccesorio() {
  if (predictions.length > 0) {
    let keypoints = predictions[0].scaledMesh;
    let acc = accesorios[accesorioActual];

    let leftEye = keypoints[33];
    let rightEye = keypoints[263];
    let x = (leftEye[0] + rightEye[0]) / 2;
    let y = (leftEye[1] + rightEye[1]) / 2;
    let eyeDist = dist(leftEye[0], leftEye[1], rightEye[0], rightEye[1]);

          switch (accesorioActual) {
      case 0: // Gorro mujer 
        image(acc, x - eyeDist * 1.0, y - eyeDist * 1.6, eyeDist * 2.0, eyeDist * 1.3);
        break;

      case 1: // Gorro hombre 
        image(acc, x - eyeDist * 1.1, y - eyeDist * 1.6, eyeDist * 2.2, eyeDist * 1.5);
        break;

      case 2: // Gafas mujer
      case 3: // Gafas hombre
        image(acc, x - eyeDist * 1.1, y - eyeDist * 0.5, eyeDist * 2.2, eyeDist);
        break;

      case 4: // Brillos 
        let ear = keypoints[234];
        image(acc, ear[0] - 40, ear[1] - 40, 80, 80);
        break;
    }
  }
}
```

el código original que citamos es

```javascript
let video;
let poseNet;
let poses = [];
let img;


function preload() {
  img = loadImage('earring7.png');
}


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 3; j < 5; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
          image(img,  keypoint.position.x, keypoint.position.y+25, 25, 25);
      }
    }
  }
}
```

## enlace del proyecto: https://editor.p5js.org/joo08/sketches/5Pt_rvTOH 

lo hicimos en el editor de p5.js

## documentación multimedia / audiovisual del proyecto funcionando

https://github.com/user-attachments/assets/e1a056be-8911-4e14-a0a7-80cc2e08bcae

En la primera versión del código utilizamos el comando PoseNet, lo cual hacía que el filtro en lugar de detectar el parpadeo se cambiara con cualquier movimiento de la cara, ya para la versión final decidimos utilizar FaceMesh de ml5.js en lugar de PoseNet y esto nos ayudó a mejorar la precisión, sin embargo, aún no detectaba tal cual el pestañeo, por lo tanto agregamos el comando EAR (eye aspect ratio) que nos ayuda a integrar puntos referenciales de los ojos y utilizamos el comando earTreshold para ajustar la sensibilidad.

Repartición del trabajo: Romina-Creación de los accesorios, Josefa-Código.

## bibliografía

nos basamos en el tutorial de https://www.youtube.com/watch?v=YMlhNG3YHz4 

tomamos el código base alojado en https://editor.p5js.org/dongjing233/sketches/_Nyg10ve 

usamos la biblioteca p5.js v 1.11.5 y la biblioteca ml5.js v 0.12.2

## conclusiones

La inteligencia artificial en este proyecto sirve para crear experiencias interactivas, creativas y accesibles, permitiendo que cualquier persona, sin conocimientos técnicos, pueda divertirse con un filtro que responde a gestos simples como el parpadeo. Sin embargo, no sirve para detectar emociones reales, ya que su alcance está limitado a tareas específicas como identificar movimientos faciales,  y está entrenada para detectar los puntos del rostro.

Nos pareció adecuado que la IA permite generar experiencias inclusivas y fáciles de usar, eliminando la necesidad de botones o comandos complejos. nos gustó que con una cámara y conexión a internet, nuestro trabajo puede funcionar y no requiere de grandes recursos.

Este proyecto nos causó alegría, porque descubrimos cómo la tecnología puede ser divertida, creativa y sorprendente. Sin embargo, también sentimos cierta incomodidad, al reflexionar sobre el nivel de acceso que damos a nuestras imágenes y movimientos faciales a través de la cámara.

Posibles usos:

Positivos: filtros para campañas de sensibilización social, herramientas educativas interactivas, o juegos que promuevan la creatividad y la autoexpresión.

Negativos: mal uso en filtros que refuercen estereotipos o que recojan datos faciales sin consentimiento.

Personales: entretenimiento, creación de contenido, exploración de la propia imagen de forma creativa.

Dimensión ética

El uso de inteligencia artificial en experiencias interactivas plantea preguntas éticas importantes, como el respeto a la privacidad, el consentimiento para el uso de datos faciales, y el riesgo de reforzar modelos de belleza poco realistas. Es fundamental que estos proyectos incluyan transparencia sobre qué datos se recopilan (aunque en este caso no se almacenan), pero sobre todo que fomenten un uso responsable.
creemos que el uso de estas inteligencias artificiales son un beneficio para poder apoyar nuestro aprendizaje, experimentar y descubrir de como de un texto e imágen podemos hacer proyectos más diversos, completos y como estos interactúan con nuestro entorno. Al ser tecnologías entrenadas constantemente sabemos que los resultados que nos pueden brindar más a futuro podrían ser impresionantes por lo que sostenemos lo del principio: La IA es una herramienta que debe de usarse con responsabilidad.

