# clase-05/

```javascript
function setup() {
  createCanvas(400, 400);
  frameRate (1)
}

function draw() {
  background(0);
  
  if (mouseIsPressed ) { 
    ellipse (
    random (width),
    random (height),
    random (50),
    random(50)
  );

  } else {
    fill (200);
    rect (0, 0, width, height);
  }
 
  
//if (frameCount % 2 == 1) {
//ellipse (width/2, height/2, 50, 50, 50); 
//} else {
// rect(width/2, height/2, 50, 50);
// }
  
}


