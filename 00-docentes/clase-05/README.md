# clase-05

```javascript
function setup() {
  createCanvas(400, 400);
  // frameRate(1);
  background(0);
}

function draw() {
  
  if (mouseIsPressed) {
    fill(255);
    ellipse(
      random(width),
      random(height),
      random(50),
      random(50)
            );
  } else {
    fill(0, 40);
    rect(0, 0, width, height);
  }
  
  // console.log(frameCount);
  
  //if (frameCount % 2 == 0) {
  //    ellipse(width/2, height/2, 50, 50);
  //} else {
  //  rect(width/2, height/2, 50, 50);
  //}
  
  
  
}
```
