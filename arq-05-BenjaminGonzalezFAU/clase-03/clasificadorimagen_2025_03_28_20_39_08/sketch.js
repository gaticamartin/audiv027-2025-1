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
  classifier.classify(img, obtuveresultado);
  image(img, 0, 0, width, height);
}

// Callback function for when classification has finished
function obtuveresultado(resultados) {
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
  
  if(resultados[0].label == "robin, American robin, Turdus migratorius") (
  console.log("Hola pajarito"))
}
