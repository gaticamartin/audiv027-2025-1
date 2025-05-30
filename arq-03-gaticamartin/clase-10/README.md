https://docs.ml5js.org/#/reference/neural-network?id=neuralnetwork
ai training

procedural programming: sistema en el que las cosas ocurren una tras de otra
OOP: - objetos - programacion a partir de eventos, no lineal ((?))

let classifier;



function setup() {
  createCanvas(400, 400);

  // Set the backend to 'webgl' (uso GPU?)
  ml5.setBackend("webgl");
  } 
  
   // Set the options for the neural network
  let options = {
    task: "classification",
    debug: true,
  };

  https://docs.ml5js.org/#/reference/neural-network?id=neuralnetwork
