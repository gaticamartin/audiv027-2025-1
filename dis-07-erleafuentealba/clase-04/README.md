# clase-04\

Hoy vamos a estudiar los arreglos <3\
Función ellipse, se pueden cambiar 50, 50 es algo que se puede cambiar\
Al principio anotar los let\
en el segundo funtion\
[] los corchetes sirven como para enumerar cosas que van en su interior.\
posX y posY, son arreglos vacióes, se usan con los poderosisimos corchetes []\
El punto, es como decir, dentro de, ej. posX.push(random (0, 400))\
for, tiene un parentesis (), hay que escribir donde para, y en el murcielago se pone que es lo que quieres que haga{}. for es una estructura para repetir, y que dice como se repite.\

```javascript
let posX;
let posY;

let posX1
let posY1

function setup() {
  createCanvas(400, 400);
  
  posX = random(0, 400)
  posY = random(0, 400)
  posX1 = random(0, 400)
  posY1 = random(0, 400)
}

function draw() {
  background(220);
  
  ellipse (posX, posY, 80, 80);
  ellipse (posX1, posY1, 40, 40);
  
  posX = posX + random(-2, 2)
  posY = posY + random(-2, 2)
  posX1 = posX1 + random(-2, 2)
  posY1 = posY1 + random(-2, 2)
}
```

Otro Codigo, este es mejor, creo yo\

```javascript
//Hacer 5 elipses
// Quiero que cada elipse tenga un color aleatorio y que se mantenga en el tiempo

let numElipses = 5;

// posX y posY son arreglos vacios
let posX = [];
let posY = [];

//rojo, verde, azul son arreglos vacios
let rojo = [];
let verde = [];
let azul = [];



function setup() {
  createCanvas(400, 400);
 
// creo condiciones iniciales
//para posX y posY de todas las elipses
//para colores
  for (let i =0;  i <numElipses; i++) {
  posX.push(random (0, 400));
  posY.push(random (0, 400));
    
  rojo.push(random (0, 255));
  verde.push(random (0, 255));
  azul.push(random(0, 255))
  }

}

function draw() {
  background(0);
  
 for (let i =0;  i < numElipses; i++){
   noStroke();
   fill(rojo [i], verde[i], azul[i])
   ellipse(posX[i], posY[i], 80, 80)
 }
  
}
```

BODYPOSE

```javascrip
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

  // Draw the skeleton connections
  fill (255, 255/2)

  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
     {
      let keypoint = pose.keypoints[0];
      // Only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        
        narizAhoraX = keypoint.x;
        narizAhoraY = keypoint.y;
        
        narizAntesX
        NarizAntesY
        
        
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
```

Body Pose
<https://editor.p5js.org/erlea.fuentealba/sketches/2bP3eRNYe>
