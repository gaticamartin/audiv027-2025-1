//Código tomado prestado para no devolverlo de detección de manos, manitos y manotas
let handPose;
let video;
let hands = [];

function preload() {
  // Cargar el modelo de la mano
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  // Crear la cámara web y esconderlo
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // comenzar a detectar la mano
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Dibujar en la cámara web
  image(video, 0, 0, width, height);

  // Dibujar todos los puntos rastreados
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(255, 192, 203);
      //usé el color rosa bastante radiactivo
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
