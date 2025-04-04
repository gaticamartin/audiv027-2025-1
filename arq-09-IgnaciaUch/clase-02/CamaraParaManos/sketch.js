/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

// Código para identificar manos a través de la webcam de un modeo humano 
let handPose;
let video;
let hands = [];

function preload() {
  // Cargar el modelo de handPose
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  // Crear un video de la webcam y esconderlo
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Comenzar a detectar las manos de el video web
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Dibujar el video de la webcam
  image(video, 0, 0, width, height);

  // Dibujo de todos los puntos identificados de la mano
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      // Cambio de color
      fill(150, 60, 60);
      // Sin borde
      noStroke();
      // Forma
      triangle(keypoint.x, keypoint.y, 10);
    }
  }
}

// Función de devoución de datos cuando handPose genera datos
function gotHands(results) {
  // Guardar la salida de la variable manos
  hands = results;
}
 // ❤️