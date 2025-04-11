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
