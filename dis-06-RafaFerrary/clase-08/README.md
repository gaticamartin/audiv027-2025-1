# clase-08

**Codigo teachable machine:**

// Teachable Machine
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/XhfJySVT6/';

// Imagenes
let imgNeutral;
let imgJazz;
let imgReggaeton;

function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
  
  // Cargar imagenes
  imgNeutral = loadImage('neutral.png');       // Para "waiting..." o ruido
  imgJazz = loadImage('Jazz.png');             // Para "Jazz"
  imgReggaeton = loadImage('Reggaetón.png');   // Para "Reggaetón"
}

function setup() {
  createCanvas(300, 300);
  imageMode(CENTER); // Para centrar imagenes
  classifyAudio();
}

function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  let imgToShow = imgNeutral;

  if (label === "Jazz") {
    imgToShow = imgJazz;
  } else if (label === "Reggaetón") {
    imgToShow = imgReggaeton;
  }

  image(imgToShow, width / 2, height / 2, 300, 300); // Tamaño imagen
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}


**html** 

<!DOCTYPE html>
<html>

<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.min.js"></script>
  
  <script src="https://unpkg.com/ml5@0.4.2/dist/ml5.min.js"></script>
  
  <link rel="stylesheet" type="text/css" href="style.css">
  <meta charset="utf-8" />

</head>

<body>
  <script src="sketch.js"></script>
</body>

</html>

## bitácora de proceso
