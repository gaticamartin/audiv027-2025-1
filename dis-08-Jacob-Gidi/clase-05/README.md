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
