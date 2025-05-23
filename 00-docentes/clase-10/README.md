# clase-10


esto es el index.html en HTML de la web que hicimos hoy con addEventListener

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
    
    
    <button id="botonBorrar" >BORRAR TODO</button>
    
    <p id="parrafito" >mucho misterio</p>
    
    <p>sin misterio</p>
    
    
    <script src="sketch.js"></script>
  </body>
</html>

```

esto es el sketch.js en JavaScript

```js
// let fecha;
let dirBotonBorrar = document.getElementById("botonBorrar");

let dirParrafo = document.getElementById("parrafito");

let diametro = 40;


function setup() {
  createCanvas(400, 400);
  background(220);
  // fecha = Date();
  // frameRate(1);
  
  // https://www.w3schools.com/js/js_timing.asp
  setInterval(
    elipseAleatoriaRoja, 2000);
  setInterval(
    elipseAleatoriaVerde, 3000);
  
  dirBotonBorrar.addEventListener("click", pintarGris);
  
  dirParrafo.addEventListener("mouseenter", cambiarDiametro);
  
}

function draw() {
  // background(220);
  // console.log(fecha);
  // elipseAleatoria();
  console.log(dirBotonBorrar);
}

function elipseAleatoriaRoja() {
  fill(255, 0, 0);
  ellipse(random(width),
         random(height),
         diametro,
         diametro);
}

function elipseAleatoriaVerde() {
  fill(0, 255, 0);
  ellipse(random(width),
         random(height),
         diametro,
         diametro);
}

function pintarGris() {
  background(220);
}

function cambiarDiametro() {
  diametro = random(10, 500);
}

```
