# clase-03


 ## Apuntes sobre variables ##

//let sirve para declarar variables
//la declaracion se puede hacer solo una vez
//la sintaxis es
//let nombre
let salaG35 

//las variables se pueden hacer dentro de los setup
//pero pasan a ser variables locales

//la asignacion de variables se hace con el signo =
// y la sintaxis es nombreValor = nuevoValor;
//sala G35 = 4

//la manera d declarar una variable
//y de inediato darle un valor inicial seria
//let hola = "8764"

//cuando escribo "functionAlgo" es para enseñarle 
//al computador a hacer algo

function setup() {
  createCanvas(400, 400);
  salaG35 = "A";
  console.log("chao");
}


function draw() {
   background(220);
   salaG35 = salaG35 + 1;
  
  
console.log("hola");
}

//despues de esta parte puedo pedir que haga algo
//asi:



 ## Apuntes sobre lector de imagenes ##

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


//preload sirve para cargar elementos antes del inicio de la lectura
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

