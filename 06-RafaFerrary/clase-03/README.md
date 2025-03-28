# clase-03


 ## Apuntes sobre variables ##

//let sirve para declarar variables
//la declaracion se puede hacer solo una vez
//la sintaxis es
//let nombre
let salaG35 

//las variables se pueden hacer dentro de los setup
//pero pasan a ser variables locales

//la asignacion de variables se hace con el signo =
// y la sintaxis es nombreValor = nuevoValor;
//sala G35 = 4

//la manera d declarar una variable
//y de inediato darle un valor inicial seria
//let hola = "8764"

//cuando escribo "functionAlgo" es para enseñarle 
//al computador a hacer algo

function setup() {
  createCanvas(400, 400);
  salaG35 = "A";
  console.log("chao");
}


function draw() {
   background(220);
   salaG35 = salaG35 + 1;
  
  
console.log("hola");
}

//despues de esta parte puedo pedir que haga algo
//asi:

