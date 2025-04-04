// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let numElipses = 5;
let R = 255;
let G = 255;
let B = 255;

// posX y posY son arreglos vacios
let posX = [];
let posY = [];


function setup() {
  createCanvas(400, 400);
  
  // creo condiciones iniciales
  // para posX y posY de todas las elipses
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
  }
  
}

function draw() {

  background(R ,G ,B );
  // dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
    ellipse(posX[i], posY[i], 80, 80);
    noStroke();
    fill(R ,G ,B );
    R=(random(0,255));
    G=(random(0,255));
    B=(random(0,255));
  }
  
  // actualizar coordenadas
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-5, 5);
    posY[i] = posY[i] + random(-5, 5);
  }
  
  // SUGERENCIA JULIO: FILL
  // SUGERENCIA GABITO: FILL RANDOM COLOR POR CADA TICK
 
  
  //posX1 = posX1 + random(-2, 2);
  //posY1 = posY1 + random(-2, 2);
  
}