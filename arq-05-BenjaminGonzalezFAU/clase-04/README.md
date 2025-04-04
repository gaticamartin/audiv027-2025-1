## clase-04
# P5
Utilizar arreglos "array" para que podamos repetir y ordenar procesor que, manualmente, serían muy lateros y enredados.
* Recordar que "setup" ocurre solo una vez al comienzo y que "draw" 60 veces por segundos hasta que lo detenga.
* Cuidar el orden en el que se dan las instrucciones.
* "random (x, y)": para definir aleatoridad entre un rango.
* Hay que crear nuevas variables aleatorias para crear otras formas, es decir que en realidad el random no es random 100% para diferentes procesos, a no ser que apliquemos los arreglos.
* En programación se parte contando desde 0.
* "backtick" es el caracter para compartir codigo en github, tres veces ``` . Además se debe de informar el lenguaje, en nuestro caso "javascript" justo a continuacion, sin espacio. No olvidar repetir al final si se quiere seguir escribiendo.
* el array "[]" funciona para otorgarle más de un valor a una variable.
* "push" para un arreglo significa, anda al arreglo, al final del arreglo, y agregale este valor. Para esto se debe buscar dentro de la variable con el punto "posX.push()".
* "pull" sirve para hacer lo opuesto.
* "for" sirve para decir empiezo por esto; hasta hacer esto; hago esto. Sirve para usar la habilidad de repetir del computador
* "i++" = "i = i + 1"

# ML5
* Proceso para dibujar con la nariz. Primero reconocer unicamente la nariz, luego ocultar cámara. Al profe le gusta dejar rastro de todo.


# Código elipses
```javascript
// quiero hacer cinco elipses
// las cuales salen 
// de lugares aleatorios
// y que se muevan
// aleatoriamente por el lienzo

//definimos cantidad de elipses

let numElipses = 5

// definimos la variable para la posicion, con arreglos vacios
let posX = [];
let posY = [];

// colocar rgb con arreglos vacios
let rojo = [];
let verde = [];
let azul = [];

function setup() {
  createCanvas(400, 400);
  
  // aleatoridad en la posicion inicial y con el valor de rgb
  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
 
    rojo.push(random(0, 255));
    verde.push(random(0, 255));
    azul.push(random(0, 255));
    
  }
  
}

function draw() {
  background(0);
  
  // dibuja las elipses, caracteristica que perdura todo el tiempo
   for (let i = 0; i < numElipses; i++) {
     // rellenar con colores aleatorios
     fill(rojo[i], verde[i], azul[i])
     ellipse(posX[i], posY[i], 80, 80);
  }
  
  // actualizar coordenadas, valores que varian al pasar el tiempo
  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random (-2, 2);
    posY[i] = posY[i] + random (-2, 2);
  }
  
  
  
  
  // variamos la variable con aleatoridad
```
  
  // posX = posX0 + random(-2, 2);
  // posY = posY0 + random(-2, 2);
  
}
