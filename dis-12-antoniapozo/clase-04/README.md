# clase-04
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo
// quiero que cada elipse tenga un color 
// aleatorio y que se mantenga en el tiempo

let numElipses = 5;

// posX y posY son arreglos vacios
let posX = [];
let posY = [];

// rojo, verde, azul son arreglos vacios
let rojo = [];
let verde = [];
let azul = [];

function setup() {
  createCanvas(400, 400);
  
  // condiciones iniciales
  // para posX y posY de todas las elipses
  // para colores iniciales
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
    
    rojo.push(random(0, 255));
    verde.push(random(0, 255));
    azul.push(random(0, 255));
  }
  
}

function draw() {

  background(220);
  
  // dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
     // SUGERENCIA JULIO: FILL de colores 
    noStroke();
    fill(rojo[i], verde[i], azul[i]);
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  // actualizar coordenadas
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 2);
    posY[i] = posY[i] + random(-2, 2);
  }
  
  // SUGERENCIA JULIO: FILL
    
 
  

  
}

BodyPose

/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates drawing skeletons on poses for the MoveNet model.
 */

let video;
let bodyPose;
let poses = [];
let connections;

let narizAhoraX;
let narizAntesX;
let narizAhoraY;
let narizAntesY;


function preload() {
  // Load the bodyPose model
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(640, 480);

  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
  // Get the skeleton connection information
  connections = bodyPose.getSkeleton();
}

function draw() {
  // Draw the webcam video
  //image(video, 0, 0, width, height);
  
  fill(255, 255/2);
  


  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];

      let keypoint = pose.keypoints[0];
      // Only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        
        let diametro = 10; 
        
        
       narizAhoraX = keypoint.x;
       narizAhoraY = keypoint.y;
      

        circle(narizAhoraX, narizAhoraY, diametro);
        
        narizAntesX = narizAhoraX;
        narizAntesY = narizAhoraY;
      }
    }
  }
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
}
