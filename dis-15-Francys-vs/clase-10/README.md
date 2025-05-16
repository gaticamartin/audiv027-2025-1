# clase-10

link: <https://emojipedia.org/nature>  
link: <https://www.aiweirdness.com/>  
link: <https://cdm.link/>  
link: <https://artful.design/>  
link: <https://developer.mozilla.org/en-US/>  <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time> (browser compatibility)  
link: <https://www.w3schools.com/> (guía javascript)  
link: <https://www.w3schools.com/jsref/met_document_addeventlistener.asp>  

´´´´ javascript
// https://www.w3schools.com/js/js_dates.asp
//let fecha;

let dirBotonBorrar = document.getElementById("botonBorrar");

let dirParrafo = document.getElementById("parrafito");

let diametro = 40;


function setup() {
  createCanvas(400, 400);
  background('gray');
  //fecha = Date();
  //frameRate(1);
  setInterval(elipseAleatoria, 200);
  setInterval(elipseAleatoria2, 300);
  
  dirBotonBorrar.addEventListener("click", pintarGris);
  
  dirParrafo.addEventListener("mouseenter", cambiarDiametro);
}

function draw() {
  //background('lightblue');
  //console.log(fecha);
//  elipseAleatoria();
}

function elipseAleatoria() {
  fill('pink');
  noStroke();
  ellipse(random(width),
          random(height),
          diametro, diametro);
}

function elipseAleatoria2() {
  fill('lavender');
  noStroke();
  ellipse(random(width),
          random(height),
          diametro, diametro);
}

function pintarGris() {
  background(random(200), random(200), random(200));
  
}

function cambiarDiametro(){
  diametro = random(10, 500);
}
´´´´
