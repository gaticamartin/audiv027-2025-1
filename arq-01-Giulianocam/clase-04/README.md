# clase-04
### link dwtwctor bodypose/nariz
https://editor.p5js.org/giuliano.camilla/full/qR95Vl5fC
### circulitos tiritones
```javascript
let numElipses = 6

let posX = [];
let posY = [];

function setup() {
 createCanvas(400, 400) 

  //condiciones iniciales para las elipses
  for (let a = 0; a < numElipses; a++) {
    posX.push(random(0, 400));  
    posY.push(random(0, 400));
  }
}

function draw() {
  background(0, 0, 250)
  
  //dibujo inicial de las elipses
  //seteo del pincel y colores para la elipse
    for (let a = 0; a < numElipses; a++) {
      noStroke();
      fill(125, 125, 0)
      ellipse(posX[a], posY[a], 50, 50);
  }
  
  //actualizacion de los valores de posX y posY
  for (let a = 0; a <  numElipses; a++) {
    posX[a] = posX[a] + random(-5, 5)  
    posY[a] = posY[a] + random(-5, 5)
  }
}
```
