// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
// Variable
let classifier;

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

// Lo que está dentro de los () es un parámetro 
// ml5. Es que está dentro de esa carpeta
// preload = todas las cosas que hay que cargar extra,función opcional 
function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("images/kitten.jpg");
}

// classifier variable (vale mobileNet) permite clsaificar "es o no es"
function setup() {
  createCanvas(400, 400);
  classifier.classify(img, obtuveResultado);
  image(img, 0, 0, width, height);
}

// Callback function for when classification has finished
function obtuveResultado(resultados) {
  // The results are in an array ordered by confidence
  console.log(resultados);

  // Display the results on the canvas
  fill(255);
  stroke(0);
  textSize(18);
  label = "Etiqueta: " + resultados[0].label;
  confidence = "Confianza: " + nf(resultados[0].confidence, 0, 2);
  text(label, 10, 360);
  text(confidence, 10, 380);
}

// Error
if (resultados[0].label == "tabby, tabby cat") {
  console.log("HOLA TABBY CAT")
}
