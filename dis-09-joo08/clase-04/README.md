# clase-04
# clase-04
los circulos son elipses pero las elipses no son circulos
es importante ordenar los comandos para poder ver la programacion
parsons!! tarea
usar comando random debajo de function setup o draw
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo
// quiero que cada elipse tenga un color aleatorio y que se mantenga en el tiempo

let numElipses = 5;

// posX y posY son arreglos vacios

let posX = [];
let posY = [];

// rojo, verde, azul son arreglos vacios
let rojo = []; 
let verde = [];
let azul = [];

function setup() {
  createCanvas(400, 400);

  // condiciones iniciales
  // para posX y posY de todas las elipses
  // para colores iniciales
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
    
    rojo.push(random(0, 255));
    verde.push(random(0, 255));
    azul.push(random(0, 255));
  }

}

function draw() {
  background(220);

  //dibuja las elipses
  for (let i = 0; i < numElipses; i++) {
    noStroke();
    fill(rojo[i], verde[i], azul[i]);
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2,3);
    posY[i] = posY[i] + random(-2,3);
  }
  // fill(173, 216, 250);
  // ellipse(posX0, posY0, 80, 80);
  //fill(173, 216, 200);
  // ellipse(posX1, posY1, 80, 80);

  //  posX0 = posX0 + random (-2, 2);
  //posY0 = posY0 + random (-2, 2);
  //  posX1 = posX0 + random (-4, 2);
  // posY1 = posY0 + random (-4, 2);
}
// importancia de ordenar los comandos
// parsons!
//

//keypoint: coordenadas de tu cuerpo
