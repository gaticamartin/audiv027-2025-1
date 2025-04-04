# clase-04

_Darle una posicion y donde moverse:_

let posX = 50;
  
  ellipse(posX, 50, 80, 80);
  
  posX = posX + 1;

posX = random (0, 400)

posY = random (0, 400)

----------------------------

_Que se mueva en direccion random:_

posX = posX + random(-2, 2);

posX = random (0, 400)

posY = random (0, 400)

posX = posX + random(-2, 2);

posY = posY + random(-2, 2);

-----------------------------

_Para dar mas de un valor:_

  for (algo; otra; ultima) {  
    posX.push(random(0, 400));

  for (let i = 0; i < 5; i++) {  
    posX.push(random(0, 400));

---------------------------

```javascript
//hacer 5 elipses
//que partan de lugares aleatorios
//y que despues se muevan aleatoriamente por el lienzo
//quiero que cada elipse tenga un color aleatorio y que se mantenga en el tiempo

let numElipses = 5;

//posX y posY son arreglos vacios
let posX = [];
let posY = [];

//rojo, verde, azul son arreglos vacios
let rojo = [];
let verde = [];
let azul = [];

function setup() {
  createCanvas(400, 400);
  
//condiciones iniciales para posX y posY de todas las elipses
  for (let i = 0; i < numElipses; i++) {  
    posX.push(random(0, 400));
    posY.push(random(0, 400));
    
//tambien para colores iniciales
    rojo.push(random(0, 255));//arreglo =usar ; , si no no corre
    verde.push(random(0, 255));
    azul.push(random(0, 255));
  }
}

function draw() {
  background(0);

//dibuja las elipses
  for (let i = 0; i < numElipses; i++) {  
    noStroke();
    fill(rojo[i], verde[i], azul[i]);
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  
  
  //sugerencia: fill de colores
  
  //ellipse(posX, posY, 80, 80);
  //ellipse(posX, posY, 40, 40)
  
  //posX = posX + random(-2, 2);
  //posY = posY + random(-2, 2);
}
```

------------------------------------

bodypose

<https://editor.p5js.org/annais.bustamante/full/zfGuvMMN2>

```
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

  fill(255, 255/2)
  
  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
 {
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
```
