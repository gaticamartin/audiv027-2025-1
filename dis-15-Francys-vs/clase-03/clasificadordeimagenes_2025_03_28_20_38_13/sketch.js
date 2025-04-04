/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates detecting objects in an image through ml5.imageClassifier.
 */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;
//las variables siempre se declaran al inicio porque son globales, ocurren errores si se llaman después

// A variable to hold the image we want to classify
let img;

// Variables for displaying the results on the canvas
let label = "";
let confidence = "";

function preload() {
  classifier = ml5.imageClassifier("MobileNet");//variable aqui tiene un clasificador, "clasifica"
  img = loadImage("images/kitten.jpg"); //opciones kitten.jpg/bird.jpg
  //let nota = 0; solo existirá dentro de la función y solo se puede trabajar dentro de esta
  //no se puede llamar fuera de la funcion
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, resultado);//clasifico lo que esta dentro de img (foto del gato)
  //gotResult es un nombre de "fantasía" para decir que quiero un resultado
  //se puede cambiar el nombre -> resultado
  //se debe cambiar el nombre aqui como en la funcion, primero en la funcion para asegurar que funcione
  image(img, 0, 0, width, height);
}
//width y height escala las imagenes
// Callback function for when classification has finished
function resultado(results) {
  // The results are in an array ordered by confidence
  console.log(results);

  // Display the results on the canvas
  fill(255);
  stroke(0);
  textSize(20);
  label = "Teoría: " + results[0].label;
  confidence = "Seguridad: " + nf(results[0].confidence, 0, 2);
  text(label, 10, 360);
  text(confidence, 10, 380);
  
  if (results[0].label == "tabby, tabby cat")
    console.log("Hola Gatito")
}

