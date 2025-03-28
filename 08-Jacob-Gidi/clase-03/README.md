# clase-03
Apuntes:
Console.log(); = escribe en lugar "consola" algo, sirve para escribir una bitacora en la consola
"?" = dentro de las comillas lo trata como texto
no se puede poner letras desordenadas eje: JBACP, por que no existe

codigo 1
let salaG35;


function setup() {
  createCanvas(400, 400);
  console.log("salaG35");
}

function draw() {
  background(220);
}

codigo 2
// let sirve para declarar variables
// la declaracion se puede hacer solo 1 vez
// la sintaxis es
// let nombre;
let salaG35;

// la asignacion de valores se hace con
// el signo = y la sintaxis es
// nombreValor = nuevoValor;
salaG35 = 4;

// la manera de declarar una variable
// y de inmediato darle un valor inicial seria
let hola = 8764;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  salaG35 = salaG35 + 1;
  
  console.log(salaG35);
}

codigo 3
// let sirve para declarar variables
// la declaracion se puede hacer solo 1 vez
// la sintaxis es
// let nombre;
let salaG35;

// la asignacion de valores se hace con
// el signo = y la sintaxis es
// nombreValor = nuevoValor;
salaG35 = 4;

// la manera de declarar una variable
// y de inmediato darle un valor inicial seria
// let hola = "8764";

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  // salaG35 = salaG35 + 1;
  salaG35 = "A";
  
  console.log(salaG35);
}

codigo 4
// let sirve para declarar variables
// la declaracion se puede hacer solo 1 vez
// la sintaxis es
// let nombre;
let salaG35;

// la asignacion de valores se hace con
// el signo = y la sintaxis es
// nombreValor = nuevoValor;
salaG35 = 4;

// la manera de declarar una variable
// y de inmediato darle un valor inicial seria
// let hola = "8764";

function setup() {
  createCanvas(400, 400);
  salaG35 = "A";
}

function draw() {
  background(220);
  salaG35 = salaG35 + 1;

  
  console.log(salaG35);
}


pajaro

/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates detecting objects in an image through ml5.imageClassifier.
 */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("images/bird.jpg");
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0, width, height);
}

// Callback function for when classification has finished
function gotResult(results) {
  // The results are in an array ordered by confidence
  console.log(results);

  // Display the results on the canvas
  fill(255);
  stroke(0);
  textSize(18);
  label = "Label: " + results[0].label;
  confidence = "Confidence: " + nf(results[0].confidence, 0, 2);
  text(label, 10, 360);
  text(confidence, 10, 380);
}

gato

/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates detecting objects in an image through ml5.imageClassifier.
 */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("images/kitten.jpg");
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, obtuveResultado);
  image(img, 0, 0, width, height);
  
  let nota7 = "exito";
}

// Callback function for when classification has finished
function obtuveResultado(results) {
  // The results are in an array ordered by confidence
  console.log(results);

  // Display the results on the canvas
  fill(255);
  stroke(0);
  textSize(18);
  label = "Label: " + results[0].label;
  confidence = "Confidence: " + nf(results[0].confidence, 0, 2);
  text(label, 10, 360);
  text(confidence, 10, 380);
}

HOLA TABY CAT

/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates detecting objects in an image through ml5.imageClassifier.
 */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("images/kitten.jpg");
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, obtuveResultado);
  image(img, 0, 0, width, height);
  
  let nota7 = "exito";
}

// Callback function for when classification has finished
function obtuveResultado(resultados) {
  // The results are in an array ordered by confidence
  console.log(resultados);

  // Display the results on the canvas
  fill(255);
  stroke(0);
  textSize(20);
  label = "Etiqueta: " + resultados[0].label;
  confidence = "Confianza: " + nf(resultados[0].confidence, 0, 2);
  text(label, 10, 360);
  text(confidence, 10, 380);
  
  if (resultados[0].label == "tabby, tabby cat") {
    console.log("HOLA TABBY CAT");
  }
  
}
