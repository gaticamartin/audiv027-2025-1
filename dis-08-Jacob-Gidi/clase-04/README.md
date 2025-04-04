# clase-04
1
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let posX = 50;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(220);
  ellipse(posX, 50, 50, 80, 80);
  
  posX = posX + random(-2, 2); 
}

2
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let posX;
let posY;

function setup() {
  createCanvas(400, 400);
  
  posX = random(0, 400);
  posY = random(0, 400);
  
}

function draw() {

  background(220);
  ellipse(posX, posY, 80, 80);
  
  posX = posX + random(-2, 2);
  posY = posY + random(-2, 2);
  
}

3
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let posX0;
let posY0;

let posX1;
let posY1;


function setup() {
  createCanvas(400, 400);
  
  posX0 = random(0, 400);
  posY0 = random(0, 400);
  
  posX1 = random(0, 400);
  posY1 = random(0, 400);
  
}

function draw() {

  background(220);
  
  // SUGERENCIA JULIO: FILL
  
  ellipse(posX0, posY0, 80, 80);
  ellipse(posX1, posY1, 40 ,40);
  
  posX0 = posX0 + random(-2, 2);
  posY0 = posY0 + random(-2, 2);
  
  posX1 = posX1 + random(-2, 2);
  posY1 = posY1 + random(-2, 2);
  
}

4
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let numElipses = 5;

// posX y posY son arreglos vacios
let posX = [];
let posY = [];


function setup() {
  createCanvas(400, 400);
  
  // creo condiciones iniciales
  // para posX y posY de todas las elipses
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
  }
  
}

function draw() {

  background(220);
  
  // dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  // actualizar coordenadas
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 2);
    posY[i] = posY[i] + random(-2, 2);
  }
  
  // SUGERENCIA JULIO: FILL
    
 
  
  //posX1 = posX1 + random(-2, 2);
  //posY1 = posY1 + random(-2, 2);
  
}

5
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

  background(0);
  
  // dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
    // SUGERENCIA JULIO: fill de colores
    noStroke();
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  // actualizar coordenadas
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 2);
    posY[i] = posY[i] + random(-2, 2);
  }
  

    

  
}

6
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

  background(0);
  
  // dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
    // SUGERENCIA JULIO: fill de colores
    noStroke();
    fill(rojo[i], verde[i], azul[i])
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  // actualizar coordenadas
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 2);
    posY[i] = posY[i] + random(-2, 2);
  }
  
7
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
  image(video, 0, 0, width, height);

  // Draw the skeleton connections
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = pose.keypoints[pointAIndex];
      let pointB = pose.keypoints[pointBIndex];
      // Only draw a line if both points are confident enough
      if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
        stroke(255, 0, 0);
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
  }

  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      // Only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        circle(keypoint.x, keypoint.y, 10);
      }
    }
  }
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
}

    

  
}

8
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
        
        narizAhoraX;
        narizAntesX;
        narizAhoraY;
narizAntesY;
        
        
        
        
        circle(narizAhoraX, narizAhoraY, diametro);
      }
    
  }
}

// Callback function for when bodyPose outputs data
function gotPoses(results) {
  // Save the output to the poses variable
  poses = results;
}
