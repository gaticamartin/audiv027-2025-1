# clase-14
viernes 27 junio 2025

# DetectSeñas

integrantes:

* Fuhua Huang <LINK [A GITHUB](https://github.com/fuhua486) >
* Ignacio Castro C. <LINK [A GITHUB](https://github.com/nachofau)>
* Patricio Merino R. <LINK [A GITHUB](https://github.com/PatoMerino)>

```md
mi equipo de trabajo es <https://github.com/PatoMerino> y <https://github.com/nachofau>, entregamos en el repositorio en este enlace [https://github.com/fuhua486]
```

## Acerca del proyecto

El proyecto DetectSeña surgió de la idea de TeachSeñas. Su propósito es permitir que personas, con o sin conocimientos de Lengua de Señas Chilena, la comprendan y utilicen mediante el método interactivo del proyecto, combinando código y entrenamiento con modelos.
A diferencia del anterior, DetectSeña se centra en detectar las letras de la Lengua de Señas Chilena, es decir, las letras que representa cada gesto. Los usuarios pueden usar la cámara para realizar gestos en Lengua de Señas Chilena frente a la pantalla, y esta les indicará qué letra representa el gesto en un cuadro de texto en la esquina superior izquierda, según el gesto.

![image](https://github.com/user-attachments/assets/3182edfc-9db0-4532-815c-3d5124f30c48)


Las herramientas que utilizamos son: **ml5.js（Modelo NeuralNetwork Train and Save)** y **p5.js Web Editor**.

![image](https://github.com/user-attachments/assets/04a271ca-d325-4e9b-a09c-df27a66e0261)
![image](https://github.com/user-attachments/assets/0cc6c770-3580-4f7e-9302-97539654adb2)

## Procesos

Nuestro proyecto se desarrolla a partir de entrenamiento de modelo, en este caso es el modelo **NeuralNetwork Train and Save** de ml5, que sirve para entrena y guardar datos para usarlo más adelante.

#### Código base

```javascript
let classifier;
let handPose;
let video;
let hands = [];
let rockDataCount = 0;
let paperDataCount = 0;
let scissorsDataCount = 0;
let isTrained = false;
let classification = "";

//UI elements
let instructionP;
let dataCountsP;
let rockButton;
let paperButton;
let scissorsButton;
let trainButton;

function preload() {
  // Load the handPose model, we will use the keypoints form handPose to train the neural network
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);

  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Setup the UI buttons for training
  instructionP = createP(
    'To add data, hold up hand gesture for rock while pressing the "Add Rock Data" button. Likewise for paper and scissors. When you have a good amount of data for each gesture class, press the "Train and Save Model" button to train the model and save it for future use.'
  );
  instructionP.style("width", "640px");
  dataCountsP = createP(
    "Rock data: " +
      rockDataCount +
      "<br>Paper data: " +
      paperDataCount +
      "<br>Scissors data: " +
      scissorsDataCount
  );
  rockButton = createButton("Add Rock Data");
  rockButton.mousePressed(addRockData);
  paperButton = createButton("Add Paper Data");
  paperButton.mousePressed(addPaperData);
  scissorsButton = createButton("Add Scissors Data");
  scissorsButton.mousePressed(addScissorsData);
  trainButton = createButton("Train and Save Model");
  trainButton.mousePressed(train);

  // For this example to work across all browsers
  // "webgl" or "cpu" needs to be set as the backend
  ml5.setBackend("webgl");

  // Set up the neural network
  let classifierOptions = {
    task: "classification",
    debug: true,
  };
  classifier = ml5.neuralNetwork(classifierOptions);

  // Start the handPose detection
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Display the webcam video
  image(video, 0, 0, width, height);

  // Draw the handPose keypoints
  if (hands[0]) {
    let hand = hands[0];
    for (let i = 0; i < hand.keypoints.length; i++) {
      let keypoint = hand.keypoints[i];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }

  // If the model is trained, make a classification and display the result
  if (isTrained && hands[0]) {
    let inputData = flattenHandData();
    classifier.classify(inputData, gotClassification);
    textSize(64);
    fill(0, 255, 0);
    text(classification, 20, 60);
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  hands = results;
}

// Callback function for when the classifier makes a classification
function gotClassification(results) {
  classification = results[0].label;
}

// convert the handPose data to a 1D array
function flattenHandData() {
  let hand = hands[0];
  let handData = [];
  for (let i = 0; i < hand.keypoints.length; i++) {
    let keypoint = hand.keypoints[i];
    handData.push(keypoint.x);
    handData.push(keypoint.y);
  }
  return handData;
}

// Add the current handPose data to the classifier as "Rock"
function addRockData() {
  if (hands[0]) {
    let inputData = flattenHandData();
    let outputData = ["Rock"];
    classifier.addData(inputData, outputData);
    rockDataCount++;
  }
  updateDataCountUI();
}

// Add the current handPose data to the classifier as "Paper"
function addPaperData() {
  if (hands[0]) {
    let inputData = flattenHandData();
    let outputData = ["Paper"];
    classifier.addData(inputData, outputData);
    paperDataCount++;
  }
  updateDataCountUI();
}

// Add the current handPose data to the classifier as "Scissors"
function addScissorsData() {
  if (hands[0]) {
    let inputData = flattenHandData();
    let outputData = ["Scissors"];
    classifier.addData(inputData, outputData);
    scissorsDataCount++;
  }
  updateDataCountUI();
}

// Update the HTML UI with the current data counts
function updateDataCountUI() {
  dataCountsP.html(
    "Rock data: " +
      rockDataCount +
      "<br>Paper data: " +
      paperDataCount +
      "<br>Scissors data: " +
      scissorsDataCount
  );
}

// Train the data when 'Train abd Save Model' button is pressed
function train() {
  // The data should be normalized before training
  classifier.normalizeData();

  // Train the model
  let trainingOptions = {
    epochs: 50,
  };
  classifier.train(trainingOptions, finishedTraining);
}

// When the model is trained, save the model
function finishedTraining() {
  console.log("Training finished!");
  classifier.save();
  isTrained = true;
}

```
