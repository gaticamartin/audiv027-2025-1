# clase-04

## Apuntes 04-04-2025

Ejercio elipses

- El **orden** en el que se ponen las cosas es muy importante -> el background no puede ir después del objeto, porque lo tapa:

  **background(220);**

  **ellipse(50, 50, 80, 80);** <- esta es la manera correcta

- Posición Variable (del objeto, en este caso la elipse) -> let posX = 50 // posX = posX + random(-2, 2)

### Código elipses en movimiento

versión 1

```javascript
//quiero hacer 5 elipses
//esas elipses quiero que partan en lugares aleatorios
//que se muevan aleatoriamente por el lienzo

let posX0;
let posY0;

let posX1;
let posY1;

function setup() {
  createCanvas(400, 400);

  posX0 = random (0, 400);
  posY0 = random (0, 400);

  posX1 = random (0, 400);
  posY1 = random (0, 400);
}


function draw() {

  background(220);

  ellipse(posX0, posY0, 80, 80);

  ellipse(posX1, posY1, 40, 40);


  posX0 = posX0 + random(-2, 2);
  posY0 = posY0 + random (-2, 2);

  posX1 = posX1 + random(-2, 2);
  posY1 = posY1 + random (-2, 2);


}
```

versión 2

```javascript

//quiero hacer 5 elipses
//esas elipses quiero que partan en lugares aleatorios
//que se muevan aleatoriamente por el lienzo
//quiero que cada elipse tenga un color aleatorio y que se mantenga

let numElipses = 5; 


//posX y posY son arreglos vacíos 
let posX = [];
let posY = []; 

//rojo, verde y azul son arreglos vacios

let rojo = []
let verde = []
let azul = []


//creo condiciones iniciales para posX y posY de todas las elipses 
function setup() {
  createCanvas(400, 400);

   //esta automatizacion es el equivalente de lo que tenemos abajo 
  for (let i = 0; i < numElipses; i++){
      posX.push(random (0, 400));
      posY.push(random (0, 400));

    rojo.push(random(0, 255))
    verde.push(random(0, 255))
    azul.push(random(0, 255))

  }  

  // posX0 = random (0, 400);
  //posY0 = random (0, 400);

  //posX1 = random (0, 400);
  //posY1 = random (0, 400);
}


function draw() {

  background(0);

  //dibuja las elipses
  //esta automatizacion es el equivalente de lo que tenemos abajo 
  for (let i = 0; i < numElipses; i++){

    //aplicacion de color
    noStroke();
    fill(rojo[i], verde[i], azul[i]);
    ellipse(posX[i], posY[i], 80, 80);
  }  

  //ellipse(posX0, posY0, 80, 80);

  //ellipse(posX1, posY1, 40, 40);


  //posX0 = posX0 + random(-2, 2);
  //posY0 = posY0 + random (-2, 2);

  //posX1 = posX1 + random(-2, 2);
  //posY1 = posY1 + random (-2, 2);


}
```
