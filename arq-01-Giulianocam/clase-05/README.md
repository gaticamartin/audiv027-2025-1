# clase-05
#### if, condicionante de acciones, determina acciones en base a condiciones establecidas

```javascript
// IF

function setup() {
  createCanvas(400, 400);
  frameRate(6)
  background(0)
}

function draw() {

  if (mouseIsPressed) {
    
 // console.log("hola");
    
    ellipse(
    random(width),
    random(height),
    random(30),
    random(30)
    );
    
  } else {
    
    rect(
    random(width),
    random(height),
    random(30),
    random(30)
    );
  }
}
    
 // console.log(frameCount)  
 // fill(255/2)
 // if (frameCount % 2 == 0){
 //  ellipse(width/2, height/2, 60, 80);
 //   } else {
 //    rect(width/2 - 30, height/2 - 40, 60, 80);
 //    rect(width/4 - 30, height/4 - 40, 60, 80);
 //    rect(width/4 - 30, height/2 - 40, 60, 80);
 //    rect(width/2 - 30, height/4 - 40, 60, 80);
```
link expIF
<https://editor.p5js.org/giuliano.camilla/sketches/ZHC_U1Qyk>

```javascript
/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates Sound classification using SpeechCommands18w
 */

let posX;
let posY;

let boolYes = false;
let boolNo = false;


// Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.
let classifier;

// Array containing the 18 words of SpeechCommands18w
let words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "up",
  "down",
  "left",
  "right",
  "go",
  "stop",
  "yes",
  "no",
];

// Variable for displaying the results on the canvas
let predictedWord = "";

function preload() {
  // Options for the SpeechCommands18w model, the default probabilityThreshold is 0
  let options = { probabilityThreshold: 0.7 };
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier("SpeechCommands18w", options);
  
  imageYes = loadImage("yes.jpg");
  imageNo = loadImage("no.jpg");
  
}

function setup() {
  createCanvas(400, 400);
  // Classify the sound from microphone in real time
  classifier.classifyStart(gotResult);
}

function draw() {
   background(0);
 
circle(posX, posY, 50)

  // Once the model outputs results start displaying the predicted word on the canvas
  if (predictedWord !== "") {
    fill(211, 107, 255);
    textAlign(CENTER, CENTER);
    textSize(64);
    text(predictedWord, width / 2, 90);
  }
}

// A function to run when we get any errors and the results
function gotResult(results) {
  // The results are in an array ordered by confidence
  console.log(results);
  // Load the first label to the text variable displayed on the canvas
  predictedWord = results[0].label;
  
  console.log(predictedWord);
  
  if (predictedWord == "up") {
    
    let posX = 100
    let posY = 200
    

  }
  
    if (predictedWord == "down") {
    
    let posX = 300
    let posY = 200

  }
  
    if (predictedWord == "left") {
    
    let posX = 200
    let posY = 300

  }
  
  if (predictedWord == "rigth") {
    
    let posX = 200
    let posY = 100
  }
  
}

```

<https://editor.p5js.org/giuliano.camilla/full/zSl5vChen>
