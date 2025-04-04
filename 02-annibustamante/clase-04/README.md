# clase-04

Darle una posicion y donde moverse:
let posX = 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(posX, 50, 80, 80);
  
  posX = posX + 1;
}

Que se mueva en direccion random:
posX = posX + random(-2, 2);
