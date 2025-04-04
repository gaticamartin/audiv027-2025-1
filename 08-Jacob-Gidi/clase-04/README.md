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

2
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let posX;
let posY;

function setup() {
  createCanvas(400, 400);
  
  posX = random(0, 400);
  posY = random(0, 400);
  
}

function draw() {

  background(220);
  ellipse(posX, posY, 80, 80);
  
  posX = posX + random(-2, 2);
  posY = posY + random(-2, 2);
  
}

3
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let posX0;
let posY0;

let posX1;
let posY1;


function setup() {
  createCanvas(400, 400);
  
  posX0 = random(0, 400);
  posY0 = random(0, 400);
  
  posX1 = random(0, 400);
  posY1 = random(0, 400);
  
}

function draw() {

  background(220);
  
  ellipse(posX0, posY0, 80, 80);
  ellipse(posX1, posY1, 40 ,40);
  
  posX0 = posX0 + random(-2, 2);
  posY0 = posY0 + random(-2, 2);
  
  posX1 = posX1 + random(-2, 2);
  posY1 = posY1 + random(-2, 2);
  
}
