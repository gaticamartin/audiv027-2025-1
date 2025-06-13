# clase-11
```javascript
let classifier
 
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

let inputs = [item.r, item.g, item.b];

let outputs = [item.color];


function setup() {
  createCanvas(400, 400);
 
  // Set the backend to 'webgl'
  ml5.setBackend("webgl");

  // Initialize the neural network
  classifier = ml5.neuralNetwork(options);
  
    // Add data to the neural network
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
  }

}

classifier.addData(inputs, outputs);


function draw() {
  background(220);
}
```
