# clase-04

simbolo backtick: `

**Para escribir codigo en github:**

Tres veces el simbolo ` + **lenguaje de programacion**

(codigos)

y usa tres veces el simbolo` en el final.


**Importante: El orden de codigo**

El siguiente ejemplo no se ve elipse debido al problema de orden en el codigo, porque lo primero que hace el computador es el codigo ellipse(50, 50, 80, 80); pero el siguiente codigo background(220); esta tapado el codigo anterior, es decir, la elipse,y por eso solo se ve el fondo y no la elipse.

```Javascript
function draw() {

  ellipse(posX0, posY0, 80, 80);
  background(220);
  
```


El siguiente ejemplo es en orden correcto, primero se dibuja el fondo y luego el elipse.

```Javascript
function draw() {
  
  background(220);
     ellipse(posX, posY, 80, 80);
  
```
![image](https://github.com/user-attachments/assets/3464f409-9bae-4577-9d6a-41fa3733c60f)

Dos elipses de distintos tamaños en movimientos.

El codigo random implica que la elipse se ocurren en espacio aleatorio, y empieza a moverse.

```Javascript
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

  posX0 = random(0,400);
  posY0 = random(0,400);
  
  posX1 = random(0,400);
  posY1 = random(0,400);
  
}

function draw() {
  
  background(220);
     ellipse(posX0, posY0, 80, 80);
  
     ellipse(posX1, posY1, 40, 40);

 posX0 = posX0 + random(-2,3);
 posY0 = posY0 + random(-2,3);

 posX1 = posX1 + random(-2,3);
 posY1 = posY1 + random(-2,3);
  
}
```

El for es una estructura que se usa para repetir:
```Javascript
function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < numElipses; i++) {
    posX,push(random(0,400));
  }
  
```

Final: 5 elipses que se parten en lugares aleatorios, y se mueven aleatoriamente por el lienzo
```Javascript
let numElipses = 5;

let posX = [];
let posY = [];

// rojo, verde, azul son arreglos vacios
let rojo = [];
let verde = [];
let azul = [];


function setup() {
  
  createCanvas(400, 400);

  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
    
    rojo.push(random(0,255,));
    verde.push(random(0,255,));
    azul.push(random(0,255,));

  }
}

function draw() {
  background(220);

  for (let i = 0; i < numElipses; i++) {
    ellipse(posX[i], posY[i], 80, 80);
  }

  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 3);
    posY[i] = posY[i] + random(-2, 3);
  } 
}
```

Elipses con colores incorporados

```Javascript
let numElipses = 5;

let posX = [];
let posY = [];

// rojo, verde, azul son arreglos vacios
let rojo = [];
let verde = [];
let azul = [];


function setup() {
  
  createCanvas(400, 400);

  for (let i = 0; i < numElipses; i++) {
    posX.push(random(0, 400));
    posY.push(random(0, 400));
    
    rojo.push(random(0,255,));
    verde.push(random(0,255,));
    azul.push(random(0,255,));

  }
}

function draw() {
  background(220);

  for (let i = 0; i < numElipses; i++) {
    noStroke();
    fill(rojo[i],verde[i],azul[i])
    ellipse(posX[i], posY[i], 80, 80);
  }

  for (let i = 0; i < numElipses; i++) {
    posX[i] = posX[i] + random(-2, 3);
    posY[i] = posY[i] + random(-2, 3);
  } 
}
```
