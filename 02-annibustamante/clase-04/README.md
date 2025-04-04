# clase-04

_Darle una posicion y donde moverse:_
let posX = 50;

function draw() {
  background(220);
  ellipse(posX, 50, 80, 80);
  
  posX = posX + 1;
}
----------------------------

_Que se mueva en direccion random:_
posX = posX + random(-2, 2);

----------------------------
//hacer 5 elipses
//que partan de lugares aleatorios
//y que despues se muevan aleatoriamente por el lienzo

let posX;
let posY;

function setup() {
  createCanvas(400, 400);
  
  posX = random (0, 400)
  posY = random (0, 400)
}

function draw() {
  background(220);
  ellipse(posX, posY, 80, 80);
  
  posX = posX + random(-2, 2);
  posY = posY + random(-2, 2);
}
