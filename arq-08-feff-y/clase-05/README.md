# clase-05
Como programar un boton

´´´javascript
function setup() {
  createCanvas(400, 400);
  // frameRate(1);
  background(200);
}

function draw() {
  
  if (mouseIsPressed) {
    fill(155,120,60);
    rect(
      random(width),
      random(height),
      random(40),
      random(100)
            );
    fill(121,120,60);
    circle(
      random(width),
      random(height),
      random(55),
      random(80)
            );
    fill(55,80,60);
    rect(
      random(width),
      random(height),
      random(30),
      random(70)
            );
  } else {
    fill(0, 40);
    rect(0, 0, width, height);
  }

  //esto tiene rectangulos, circulos y ovalos
  
  
  // console.log(frameCount);
  
  //if (frameCount % 2 == 0) {
  //    ellipse(width/2, height/2, 50, 50);
  //} else {
  //  rect(width/2, height/2, 50, 50);
  //}
  
  
  
}
'''
