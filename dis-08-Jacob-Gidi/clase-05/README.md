# clase-05
codigo 1
function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(0);
  
  console.log(frameCount);
  
  if (frameCount % 2 == 1){
      ellipse(width/2, height/2, 50, 50);
  } else {
    rect(width/2, height/2, 50, 50);
  }
  
}

codigo 2
function setup() {
  createCanvas(400, 400);
  // frameRate(1);
}

function draw() {
  background(0);
  
  if (mouseIsPressed) {
    console.log("todo bien, hiciste click :)");
  }
  
  // console.log(frameCount);
  
  //if (frameCount % 2 == 1){
  //    ellipse(width/2, height/2, 50, 50);
  //} else {
  // rect(width/2, height/2, 50, 50);
  //}
  
}

codigo 3
function setup() {
  createCanvas(400, 400);
  // frameRate(1);
  background(0);
}

function draw() {
  
  if (mouseIsPressed) {
    ellipse(
      random(width),
      random(height),
      random(50),
      random(50),
    );
  } else{
    fill(0,10);
    rect(0, 0, width, height, );
  }
  
  // console.log(frameCount);
  
  //if (frameCount % 2 == 1){
  //    ellipse(width/2, height/2, 50, 50);
  //} else {
  // rect(width/2, height/2, 50, 50);
  //}
  
}

codigo 4 Dire Wolf
let img;
let escala = 3; 
// Load the image.
function preload() {
  img = loadImage('https://media.cnn.com/api/v1/images/stellar/prod/111790-scientistscreatedirewolf-thumb-clean.png?c=original');
}

function setup() {
  createCanvas(600, 600);
//  frameRate(1);
  background(0);
}

function draw() {
  
  if (mouseIsPressed){
    fill(130, 200, 255);
    image(img, 0, 0, 1920/escala,1080/escala);
   // ellipse(
   //   random(width),
   //   random(height),
   //   random(30),
   //   random(30)
   //        );
  } else {
    fill(0, 10);
    rect(0, 0, width, height);
  }
    
  // Draw the image.
  // image(img, 0, 0);

  describe('An image of the underside of a white umbrella with a gridded ceiling above.');
}

codigo 5 devil trigger
let img;
let escala = 3; 
// Load the image.
function preload() {
  img = loadImage('https://static.wikia.nocookie.net/devilmaycry/images/7/76/Devil_Trigger_DMC4.png/revision/latest/scale-to-width-down/250?cb=20161126002539&path-prefix=es');
}

function setup() {
  createCanvas(600, 600);
//  frameRate(1);
  background(200, 0, 0);
}

function draw() {
  
  if (mouseIsPressed){
    fill(130, 200, 255);
    image(img, 100, 100, 1000/escala,1332/escala);
   // ellipse(
   //   random(width),
   //   random(height),
   //   random(30),
   //   random(30)
   //        );
  } else {
    fill(0, 10);
    rect(0, 0, width, height);
  }
    
  // Draw the image.
  // image(img, 0, 0);

  describe('An image of the underside of a white umbrella with a gridded ceiling above.');
}
