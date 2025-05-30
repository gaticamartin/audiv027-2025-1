# clase-11

# Ejemplo 1

<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.7/lib/p5.js"></script>
    <script src="https://unpkg.com/ml5@1/dist/ml5.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>

# codigo 1
function setup() {
  createCanvas(640, 240);

  // Set the backend to 'webgl'
  ml5.setBackend("webgl");

  # codigo 2
  function setup() {
  ...
  classifier = ml5.neuralNetwork(options);

  // Add data to the neural network
  for (let i = 0; i < data.length; i++) {
    let item = data[i];

# Ejemplo 2

let classifier;

// Set the options for the neural network
let options = {
  task: "classification",
  debug: true,
};

let data = [
  { r: 255, g: 0, b: 0, color: "red-ish" },
  { r: 254, g: 0, b: 0, color: "red-ish" },
  { r: 253, g: 0, b: 0, color: "red-ish" },
  { r: 0, g: 255, b: 0, color: "green-ish" },
  { r: 0, g: 254, b: 0, color: "green-ish" },
  { r: 0, g: 253, b: 0, color: "green-ish" },
  { r: 0, g: 0, b: 255, color: "blue-ish" },
  { r: 0, g: 0, b: 254, color: "blue-ish" },
  { r: 0, g: 0, b: 253, color: "blue-ish" },
];

// Train the neural network
  const trainingOptions = {
    epochs: 32,
    batchSize: 12,
  };

function setup() {
  createCanvas(400, 400);
  // Set the backend to 'webgl'
  ml5.setBackend("webgl");

  classifier = ml5.neuralNetwork(options);

  // Add data to the neural network
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    
    let inputs = [item.r, item.g, item.b];
    
    let outputs = [item.color];
    
    classifier.addData(inputs, outputs);
    
    
    
  }
  
  classifier.normalizeData();
  
  classifier.train(trainingOptions, finishedTraining);
  
  
}

function draw() {
  background(220);
}

function finishedTraining() {
  classify();
}

function classify() {
  const input = [r, g, b];
  classifier.classify(input, handleResults);
}
