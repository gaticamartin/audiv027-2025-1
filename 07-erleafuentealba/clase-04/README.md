# clase-04\
Hoy vamos a estudiar los arreglos <3\
Función ellipse, se pueden cambiar 50, 50 es algo que se puede cambiar\
Al principio anotar los let\
en el segundo funtion\
[] los corchetes sirven como para enumerar cosas que van en su interior.\
posX y posY, son arreglos vacióes, se usan con los poderosisimos corchetes []\
El punto, es como decir, dentro de, ej. posX.push(random (0, 400))\
for, tiene un parentesis (), hay que escribir donde para, y en el murcielago se pone que es lo que quieres que haga{}. for es una estructura para repetir, y que dice como se repite.\

```javascript
let posX;
let posY;

let posX1
let posY1

function setup() {
  createCanvas(400, 400);
  
  posX = random(0, 400)
  posY = random(0, 400)
  posX1 = random(0, 400)
  posY1 = random(0, 400)
}

function draw() {
  background(220);
  
  ellipse (posX, posY, 80, 80);
  ellipse (posX1, posY1, 40, 40);
  
  posX = posX + random(-2, 2)
  posY = posY + random(-2, 2)
  posX1 = posX1 + random(-2, 2)
  posY1 = posY1 + random(-2, 2)
}
```
Otro Codigo, este es mejor, creo yo\
```
