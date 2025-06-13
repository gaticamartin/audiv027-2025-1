# clase-12

``` javascript
let handPose;
let video;
let hands = [];



function preload() {
  handPose = ml5.handPose(); //llama funcion de manos
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, {flipped: true}); //crea webcam
  video.size(640, 480); //tamaño video
  video.hide();
  handPose.detectStart(video, gotHands); //deteccion de manos
}


function draw() {
  
  image(video, 0, 0, width, height);

  if (hands.length > 0) {
    let hand = hands[0];
    let indice = hand.index_finger_tip;
    let medio = hand.middle_finger_tip;
    let anular = hand.ring_finger_tip;
    let menique = hand.pinky_tip;
    
    fill(0,0,255);
    
    circle(indice.x, indice.y, 16);
    circle(medio.x, medio.y, 16);
    circle(anular.x, anular.y, 16);
    circle(menique.x, menique.y, 16);
  }
}

function gotHands(results) {

  hands = results;
}

```
No olvidar agregar archivo de ml5js
