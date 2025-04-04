# clase-04
1
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let posX = 50;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(220);
  ellipse(posX, 50, 50, 80, 80);
  
  posX = posX + random(-2, 2); 
}
