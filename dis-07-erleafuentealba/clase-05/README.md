# clase-05/

```javascript
function setup() {
  createCanvas(400, 400);
  //frameRate (1)
}

function draw() {
  background(0);
  
  if (mouseIsPressed ) { 
    noStroke ();
    ellipse (
    random (width),
    random (height),
    random (50),
    random(50)
  );

  } else {
    fill (200);
    rect (0, 0, width, height);
  }
 
  
//if (frameCount % 2 == 1) {
//ellipse (width/2, height/2, 50, 50, 50); 
//} else {
// rect(width/2, height/2, 50, 50);
// }
  
}



Ejercicio en Clases: la idea es que haya un circulo en el centro del canvas, y al apresionar con mouse, el fondo cambia de color (uno esperaría que cambie el circulo, pero cambia el fondo)/
(No funciona :'C)/
```javascript
let rojo = [];
let verde = [];
let azul = [];

function setup() {
  createCanvas(500, 500);

  background(0);

  circle(250, 250, 100);
  
  if (mouseIsPressed) {
    background (
     rojo.push(random (0, 255)),
     verde.push(random (0, 255)),
     azul.push(random(0, 255))
    )
    
  }
}




















