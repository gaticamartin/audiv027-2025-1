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
