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

let numElipses = 5;

// posX y posY son arreglos vacios
let posX = [];
let posY = [];

let rojo = [];
let verde = [];
let azul = [];

function setup() {
  createCanvas(400, 400);
  
  // creo condiciones iniciales
  // para posX y posY de todas las elipses
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
    
    rojo.push(random(0,255));
    verde.push(random(0,255));
    azul.push(random(0,255));
  
  }
  
}

function draw() {

  background(0);
  
  // dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
    noStroke();
    fill(rojo[i], verde[i], azul[i])
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  // actualizar coordenadas
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 2);
    posY[i] = posY[i] + random(-2, 2);
  }

  
}
