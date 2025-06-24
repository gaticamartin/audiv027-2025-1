# clase-14
viernes 27 junio 2025

## BARBIE WORLD 2.0

integrantes:

* Josefa Gutierrez <https://github.com/joo08>
* Romina Cancino <https://github.com/Romicancino>

## acerca del proyecto

El proyecto es un filtro interactivo, el cual usa inteligencia artificial para detectar movimientos, como en este caso lo es el parpadeo, este detecta el rostro para así poder decorar con distintos accesorios con temática “Barbie” y además tiene incluido un botón que puedes usar para guardar una foto, este botón toma una captura de pantalla del Canvas al momento de presionarlo y lo guarda en el computador como descarga. El filtro está hecho con el editor web p5.js y también utiliza ayuda del modelo FaceMesh de la biblioteca ml5.js, el cual detecta puntos clave en el rostro.

El filtro que se crea reconoce a la persona delante de la pantalla y decora con distintos accesorios 2D la parte superior del cuerpo, aparte de tener un marco formato GIF que da más interacción con el usuario. La parte divertida de este filtro es que los accesorios cambian cada vez que la inteligencia artificial detecta un parpadeo. El filtro tiene incorporado un botón didáctico, pues es blanco, pero cuando te acercas a él con el cursor cambia de color y al presionarlo toma captura del Canva y lo guarda en tu computador, quisimos agregar este juego de colores para que fuera más intuitivo e interactivo para el usuariio. Gracias a la detección de los puntos claves en el rostro se pueden ubicar los accesorios con precisión y adaptabilidad y para la detección del parpadeo se utilizan los puntos claves que nos proporciona esta tecnología. El filtro se desarrolla en tiempo real y no requiere tocar ningún botón para cambiar de accesorio. Por último queremos destacar que el filtro cambia de accesorios en bucle, cada accesorio en su respectivo orden, no de forma aleatoria.

El proyecto fue desarrollado utilizando principalmente el editor web p5.js en combinación con ml5.js, específicamente con el modelo FaceMesh. 

p5.js es una biblioteca de JavaScript diseñada para hacer accesible la programación creativa, especialmente en aplicaciones gráficas e interactivas. Ofrece una sintaxis sencilla para manipular gráficos, audio, video y entradas del usuario, facilitando la creación de experiencias visuales dinámicas en el navegador ya sea en computadores o celulares

ml5.js es una biblioteca de aprendizaje automático de alto nivel construida sobre TensorFlow.js. Proporciona modelos preentrenados listos para usar en aplicaciones creativas e interactivas, como clasificación de imágenes, generación de texto y detección de poses.
FaceMesh: es un modelo que detecta más de 400 puntos clave en el rostro humano en tiempo real. Esto permite identificar partes específicas del rostro como ojos, boca, nariz y contorno facial.

para resumir nuestro trabajo, ocupamos las herramientas en las siguientes cosas: 
p5.js: renderiza en tiempo real los gráficos, accesorios, marco y botón del filtro.

FaceMesh (ml5.js): detecta puntos clave del rostro y permite posicionar los accesorios con precisión; además, identifica el parpadeo para activar el cambio de accesorios.

como Valor añadido, gracias a estas herramientas, nuestro proyecto logra una experiencia fluida, divertida y accesible para el usuario, invitándolo a participar no solo gestualmente, sino que también se divierta con el botón, así dejando un recuerdo de su experiencia con el filtro.

## código del proyecto

```javascript

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

## enlace del proyecto: https://editor.p5js.org/joo08/sketches/81aJS43qI

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



Posibles usos:



Dimensión ética



