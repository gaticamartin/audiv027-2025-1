
// let sirve para declarar variables 
// la declaración se puede hacer solo 1 vez
// la sintaxis es 
// let nombre;
let salaG35;

// la asignación de valores se hace con el signo = y la sintaxis es
// nombreValor = nuevoValor;
salaG35 = "A";

// la manera de declarar una variable y de inmediato darle un valor inicial sería
let hola = 8764;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  salaG35 = salaG35 + 1;
  
  console.log(salaG35)
}