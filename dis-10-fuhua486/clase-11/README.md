# clase-11

## **Interfaz con botones(capturar datos)**

**NeuralNetwork en ml5** (modelo matematico que ingresan datos y salen datos)
Entrenar desde 0

```Javascript
let classificier;

let rSlider, gSlider, bSlider;

let r = 255;
let g = 0;
let b = 0;

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

  // Set the options for the neural network
  let options = {
    task: "classification",
    debug: true,
  };


function setup() {
  createCanvas(640, 240);
  
  
  // Set the backend to 'webgl'
  ml5.setBackend("webgl");

  rSlider = createSlider(0, 255, 255).position(10, 20);
  gSlider = createSlider(0, 255, 0).position(10, 40);
  bSlider = createSlider(0, 255, 0).position(10, 60);

  let options = {
    task: "classification",
    debug: true,
  }
  }

  // Initialize the neural network
  classifier = ml5.neuralNetwork(options);

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let inputs = [item.r, item.g, item.b];
    let outputs = [item.color];
    classifier.addData(inputs, outputs);
    classifier.normalizeData();
    
      const trainingOptions = {
    epochs: 32,
    batchSize: 12,
  };
      classifier.train(trainingOptions, finishedTraining);

}

  classifier.normalizeData();

  // Train the neural network
  const trainingOptions = {
    epochs: 32,
    batchSize: 12,
  };

  classifier.train(trainingOptions, finishedTraining);


function draw() {
  background(220);
}
```

error en **classifier = ml5.neuralNetwork(options);** (ml5 no esta definido)

**p5.js dice: [sketch.js, line 33] It seems that you may have accidentally written "ml5".**
