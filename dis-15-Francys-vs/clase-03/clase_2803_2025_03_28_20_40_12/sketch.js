let salaG35; //anotacion camello es que cada palabra empieza con mayuscula sin espacio
// el "_" no funciona en todos los lenguajes de programación, por ende se intenta evitar
//const salaG35 = 4; -> es una constante y let es para asignar una variable
// la sintaxis es -> let nombre;
// las variables no pueden tener el mismo nombre se deben cambiar para evitar error
// la asignación se hace con -> =, y la sintaxis es -> nombreValor = nuevoValor;

salaG35 = 4;

// la manera de declarar una variable y de inmediato darle un valor inicial seria

//let hola = 17;

kirby = 10; //javascript considera igual que es una variable lo hace automáticamente


function setup() {
  createCanvas(400, 400);
  // funcion que dice "escribe en la consola algo"
  // consola no es el codigo en si, es el interior , sale abajo del codigo el resultado
  // con "" es un texto, sin eso, se busca algo que se llame así, funcion, variable, etc.
  salaG35 = "A"; //no ocurre setup, le explico que valor equivale
}

function draw() { // las funciones no pueden llamarse igual
  background(220);
  salaG35 = salaG35 + 1; //la suma es contextual dependiendo de lo que estoy sumando A + 1 = A1 + 1 = A11

  
  console.log(salaG35);
}

//es llamar la funcion porque p5js ya sabe que setup o draw son funciones, no es necesario crearla como -> function setup()
setup();
draw();
draw();