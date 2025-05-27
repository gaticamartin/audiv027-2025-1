# clase-1

time events addEventListener

```javascript
//let fecha;
let dirBotonBorrar = document.getElementById("botonBorrar")
let dirTexstos = document.getElementById("texstos")
function setup() {
  createCanvas(400, 400);
  background(150);
  //fecha = Date();
  //frameRate(1)
  setInterval(elipseAleatoriaAzul, 2000);
  setInterval(elipseAleatoriaRoja, 3000);
  
  dirBotonBorrar.addEventListener("click", pintarGris)
  dirTexstos.addEventListener("")
}

function draw() {
  //background(150);
  //console.log(Date())

  elipseAleatoriaAzul();
  elipseAleatoriaRoja();
}

function elipseAleatoriaAzul() {
  fill(0, 0, 255);
  ellipse(random(width),
          random(height),
          40,
          40);
}

function elipseAleatoriaRoja() {
  fill(255, 0, 0);
  ellipse(random(width),
          random(height),
          40,
          40);
}

function pintarGris () {
  background(150)
}

```
