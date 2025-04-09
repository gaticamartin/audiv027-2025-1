// Quiero hacer cinco elipses
// esas elipses quiero que partan 
// en lugares aleatorios 
// y que se muevan
// aleatoriamente por el lienzo

// Cantidad de elipses dentro del código
let numElipses = 5;

// posX y posY son arreglos vacíos
let posX = [];
let posY = [];

// Colores son arreglos vacíos
let rojo = [];
let verde = [];
let azul = [];

// Se define el setup, pero aún no se llama
function setup() {
  createCanvas(400, 400);
  
  
// Para que posX.push se repita so pone dentro de for
// Para que el código se detenga se uiliza i < 5 o i < numElipses
// Condiciones iniciales de posX y posY de todas las elipses
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
    
    rojo.push(random(0, 255));
    verde.push(random(0, 255));
    azul.push(random(0, 255));
  }
}

// El orden es importante, primero crea la elipse y luego pinta el canva
function draw() {

  background(0);
  
  // dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
    noStroke();
    fill(rojo[i], verde[i], azul[i]);
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  // actualizar coordenadas
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 2);
    posY[i] = posY[i] + random(-2, 2);
  }
}