// A variable to initialize the Image Classifier
let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

// Aquí reemplazamos el enlace original con el enlace del modelo Teachable Machine entrenado
let imageModelURL = "https://teachablemachine.withgoogle.com/models/0Gt6Qh-9H/";

function preload() {
  ml5.setBackend('webgl');
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(640, 480);

  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();

  // Start detecting objects in the video
  classifier.classifyStart(video, gotResult);
  
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // En el fill modificamos el color de texto a Naranjo
  fill(241, 111, 36);
  // Cambiamos el tamaño de las letras(texto),de 35 a 50.
  textSize(50);
  //Aquí aprendimos en el tutorial que textAlign se usa para alinear texto.
  textAlign(CENTER,BOTTOM)
  //Aquí aprendimos que podemos usar directamente la división y números específicos para cambiar la posición del texto.
  text(label, width/2, height-10);
  
}

// A function to run when we get the results
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
}
