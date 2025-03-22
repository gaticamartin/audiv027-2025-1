# clase-02

1. <https://github.github.com/gfm/>
2. <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
3. <https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax>

 ### *Codigo para uso de webcam:*

function setup() {
  noCanvas();

  // Create the video capture.
  createCapture(VIDEO);

  // describe('A video stream from the webcam.');
}


### *Codigo para lectura de manos* 

// *Editado:* 
// Forma: Cuadrados
// Color: Rojo
// Dimensiones: 400 x 620

/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

let handPose;
let video;
let hands = [];

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(400, 620);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(400, 620);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(255, 15, 100);
      noStroke();
      
      square(keypoint.x, keypoint.y, 10);
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
