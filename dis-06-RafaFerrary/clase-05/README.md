# clase-05



/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates Sound classification using SpeechCommands18w
 */


let elipses = [];

let boolYes = false;
let boolNo = false;

// Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.
let classifier;

let words = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "up", "down", "left", "right", "go", "stop", "yes", "no"
];

// Variable for displaying the results on the canvas
let predictedWord = "";

function preload() {
  // Options for the SpeechCommands18w model, the default probabilityThreshold is 0
  let options = { probabilityThreshold: 0.7 };
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier("SpeechCommands18w", options);
  
}
  
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // Fondo semitransparente para que se vea el rastro
  fill(0, 40);
  rect(0, 0, width, height);

  // Dibujar y mover cada elipse
  for (let e of elipses) {
    e.move();
    e.bounce();
    e.display();
  }
}

// Cuando haces clic, se agrega una nueva elipse
//function mousePressed() 
 if (boolYes) {
  elipses.push(new Elipse(random(width), random(height)));
}

// Clase para cada elipse
class Elipse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = random(30, 80);
    this.h = random(30, 100);
    this.color = color(random(255), random(255), random(255));
    this.vx = random(-3, 3);
    this.vy = random(-3, 3);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce() {
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
  }
}
