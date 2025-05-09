# clase-08

no hay clase por interferiado.

## bitácora de proceso

Mi parte dividida comienza a funcionar de manera correcta, solo falta esperar el resto de fases y ver si hace falta modificar parte del codigo para que funcione todo en conjunto. En esta semana se pudo ver la importancia de la versión en la que se codifica, así como se explora nuevas herramientas para hacer una detección más fluida a partir del código base. Se utiliza como base el siguiente código que explora la idea de dibujar con el dedo índice:
"HandPose-Draw with Index Finger" by re7l
~~~ javascript
let handPose;
let video;
let hands = [];

let brushes = []; //for the trace of the brush

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
  // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  noStroke();
}

function draw() {
  // Draw the webcam video FLIPPED
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  for (let everything of brushes) {
    fill(everything.c);
    circle(everything.x, everything.y, 20);
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
  //print(hands)
  // If there is at least one hand
  if (hands.length > 0) {
    // Find the index finger tip
    let finger = hands[0].index_finger_tip;
    //push the location of the finger tip into an array
    let drawingInfo = {
      x: finger.x,
      y: finger.y,
      c: color(random(255), random(255), random(255)),
    };
    brushes.push(drawingInfo);
  } else {
    brushes = [];
  }
}
~~~
En este codigo se rescata el funcionamiento base de ml5 al reconocer los puntos de la mano, específicamente el 8 (punta de dedo índice), usando las dimensiones que entrega para generar un círculo (para dejar un trazo). Aún así se mejoran cosas como la fluidez, al verse muy congelado, a que el reconocimiento no es muy agradable, muchas veces no reconoce el dedo. Para esto usamos "lerp" y suavizamos dicho movimiento, también se modifica gran parte para ocultar la cámara y solo realizar el seguimiento del dedo con una imágen encima, eliminando el rastro. Se consigue el siguiente código:

~~~ javascript
// modelo base sacado de "Index Finger draw" by re7l
let handPose;
let video;
let hands = [];

// let brushes = []; //for the trace of the brush

// coordenadas suavizadas del dedo índice
let smoothedX = 0;
let smoothedY = 0;

// imagen que irá sobre el dedo
let dedoImg; 

function preload() {
  handPose = ml5.handPose();
  dedoImg = loadImage("profesonriendo.png");
}

function preload() {
// Load the handPose model
  handPose = ml5.handPose();
  
// cargar imagen
  dedoImg = loadImage("profesonriendo.png");
}

function gotHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  
// Generar la captura de cámara y ocultarla
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  
// ocultamos video
  
  video.hide();
  
// Comenzar a detectar los puntos de las manos
  
  handPose.detectStart(video, gotHands);
  
// noStroke();
  
// Detectar manos de forma periódica (cada 100 ms)
  
    setInterval(() => {
    handPose.detect(video, gotHands);
  }, 100);
}

function draw() {
  
  //fondo negro
  
  background(0);
  
  // aplicar modo espejo a la camara
  
  translate(width, 0);
  scale(-1, 1);
  
  // image(video, 0, 0, width, height);
  // for (let everything of brushes) {
  //  fill(everything.c);
  //  circle(everything.x, everything.y, 20);
  
// comenzamos a detectar las manos
  
  if (hands.length > 0) {
    
// usamos solo la primera mano detectada
    
    let hand = hands[0];

    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      
// buscamos el nombre "index_finger_tip" (punta del dedo índice)
      
      if (keypoint.name === "index_finger_tip") {
        
// usamos "lerp" para suavizar el movimiento (evita saltos y vibraciones) 
     
        smoothedX = lerp(smoothedX, keypoint.x, 0.2);
        smoothedY = lerp(smoothedY, keypoint.y, 0.2);

// imagen profesor encima        
       
        imageMode(CENTER);
        image(dedoImg, smoothedX, smoothedY, 80, 80); 
       
// definir hitbox circulo dedo para uso futuro
    
        noFill();
        noStroke();
        circle(smoothedX, smoothedY, 80);
      }
    }
  }
}

// Callback function for when handPose outputs data
// function gotHands(results) {
// Save the output to the hands variable
//   hands = results;
//  print(hands)
// If there is at least one hand
//  if (hands.length > 0) {
//     Find the index finger tip
//    let finger = hands[0].index_finger_tip;
//    push the location of the finger tip into an array
//    let drawingInfo = {
//      x: finger.x,
//     y: finger.y,
//      c: color(random(255), random(255), random(255)),
//    };
//    brushes.push(drawingInfo);
//  } else {
//    brushes = [];
//  }
// }
~~~
Se deja una primera documentación visual de la primera etapa "detección". La imagen usada es la imagen de perfil del profesor, siendo retocada por ia para generar una sonrisa
![image](https://github.com/user-attachments/assets/4ea23df5-45e2-4c91-8226-2a8d5403e5d5)
