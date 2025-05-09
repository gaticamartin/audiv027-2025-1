// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let numElipses = 150;
let r = 255;
let g = 255;
let b = 255;

// posX y posY son arreglos (Arrays) vacios
let posX = [];
let posY = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // creo condiciones iniciales
  // para posX y posY de todas las elipses
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 800));
    posY.push(random(0, 800));
  }
  
}

function draw() {

  background(r ,g ,b );
  
  // dibuja las elipses solo si presionas el mouse
  
  if (mouseIsPressed) {
  for (let i = 0; i < numElipses; i++) {
    ellipse(posX[i], posY[i], random(100), random(100));
    noStroke();
    fill(r ,g ,b );
    r=(random(0,255));
    g=(random(0,255));
    b=(random(0,255));
  }
    } else {
      
      // Background = Blanco
      background(255);
      textAlign(CENTER);
      text('¿Quieres ver chistoso?', width / 2, height / 2);
      fill('black');
      
    }
  
  // actualizar coordenadas y mover los elipses por el array
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-50, 50);
    posY[i] = posY[i] + random(-50, 50);
  }
  
  // SUGERENCIA JULIO: FILL
  // SUGERENCIA GABITO: FILL RANDOM COLOR POR CADA TICK
 
  
  //posX1 = posX1 + random(-2, 2);
  //posY1 = posY1 + random(-2, 2);
  
}
