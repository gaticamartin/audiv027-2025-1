# clase-04
Ellipse (Primero Background y luego elipse) : 

´´´ javascript
let posX;
let posY;

function setup() {
  createCanvas(400, 400);
  
  posX= random(0, 400);
  posY= random(0, 400);
}

function draw() {
  
  background(220);


  ellipse(posX , posY, 80, 80);
  
  posX= posX + random(-2,2);
}
´´´

Para repetir 5 veces: 

