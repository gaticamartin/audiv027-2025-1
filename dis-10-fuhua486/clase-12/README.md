# clase-12
## Bitácora (Desarrollo proyecto II)

Quieremos continuar y profundizar el tema de **lengua de seña chilena(LSCH)** que hicimos en el proyecto I, vamos a utilizar una herramienta que permite detectar e interpretar el significado de la estructura de la mano de una forma mas precisa, mas detallada(solamente enfocado a la mano, no otro elementos), y así reconoce distintas letras de LSCH. Basado en esto, el modelo debe detectar, interpretar y escribir la **letra**, y se mantiene la letra en la zona de texto, para poder construir palabras letras por letras, es decir, **utilizan el alfabeto manual para deletrear palabras para las que no existe seña**.

![image](https://github.com/user-attachments/assets/1f4ced8b-282a-492b-8a38-55e2cbbd3dee)

Los primero que vamos a desarrollar es hacer prueba con el modelo, para saber si puede detectar una letra, dos letras, tres letras, de forma progresiva, hasta que puede construir una palabra(o quizas que se falla entre medio por algún tipo de problema).

### Codigo base (HandPose Skeletal Connections: Draw skeletal connections of the hand)
```javascript
let handPose;
let video;
let hands = [];
let connections;

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  // Get the skeletal connection information
  connections = handPose.getConnections();
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw the skeletal connections
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = hand.keypoints[pointAIndex];
      let pointB = hand.keypoints[pointBIndex];
      stroke(255, 0, 0);
      strokeWeight(2);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
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

```
