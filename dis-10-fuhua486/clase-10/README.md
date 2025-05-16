# clase-10


#### Mediapipe
Permite **detectar e identificar** el significado de cada **gesto de mano** a través de modelo entrenado. Tambien existe modelo de **detección de rostro, pose, detección de objetos**, entre otros... 

https://ai.google.dev/edge/mediapipe/solutions/guide?hl=es-419

#### GitLab
https://about.gitlab.com/es/

#### W3School
https://www.w3schools.com/

```javascript
let fecha;

function setup() {
  createCanvas(400, 400);
  fecha = Date();
}

function draw() {
  background(220);
  console.log(fecha);
}
```

**Resultados**: Fri May 16 2025 17:24:45 GMT-0400 (hora estándar de Chile) 


```javascript
function setup() {
  createCanvas(400, 400);
  //fecha = Date();
  setInterval(elipseAleatoria,100);
}

function draw() {
}

function  elipseAleatoria() {
  ellipse(random(width),
          random(height),
          40,
          40);
}
```
**Resultados**: elipse aparece en la pantalla de forma random

El numero **100** es la velocidad que aparezca los elipses.
```javascript
  setInterval(elipseAleatoria,100);
```



```javascript
function setup() {
  createCanvas(400, 400);
  //fecha = Date();
  setInterval(elipseAleatoria,100);
}
function elipseAleatoriaRoja(){
  fill(0,120,0);
    ellipse(random(width),
          random(height),
          40,
          40);
}

function elipseAleatoriaVerde(){
    fill(180,0,0);
    ellipse(random(width),
          random(height),
          40,
          40);
}

setInterval(
elipseAleatoriaRoja,2000);
setInterval(
elipseAleatoriaVerde,3000);

function draw() {
}

function  elipseAleatoria() {
  ellipse(random(width),
          random(height),
          40,
          40);
}
```

#### Borrar todos los elementos que existe en la pantalla

```javascript
let dirBotonBorrar = document.getElementById("botonBorrar");

function setup() {
  createCanvas(400, 400);
  //fecha = Date();
  setInterval(elipseAleatoria,3000);
}

function elipseAleatoriaRoja(){
  fill(0,120,0);
    ellipse(random(width),
          random(height),
          40,
          40);
}

function elipseAleatoriaVerde(){
    fill(180,0,0);
    ellipse(random(width),
          random(height),
          40,
          40);
  
  dirBotonBorrar.addEventListener("click",pintarGris)
}

setInterval(
elipseAleatoriaRoja,2000);
setInterval(
elipseAleatoriaVerde,3000);

function pintarGris(){
  background(188);
}

function draw() {
}

function  elipseAleatoria() {
  ellipse(random(width),
          random(height),
          40,
          40);
  console.log(dirBotonBorrar);
  
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.11.5/lib/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    
    <button id="botonBorrar" >BORRARTODO</button>
        <script src="sketch.js"></script>
  </body>
</html>

```
