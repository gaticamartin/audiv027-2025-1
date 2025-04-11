# clase-05

**https://rhizome.org/** <- netArt
**piruetas.xyz** <- estudio arte aaron montoya

en script = se usa para comparar, es decir asignar un valor a un signo
ej: a = 2 
en cambio para consultar un resultado se usan dos veces =
2 + 2 == 4


**p5**
function setup() {
  createCanvas(400, 400);
  frameRate(1)
  background(0);
}

function draw() {

//if (condicion) {codigo que solo funciona cuando la respuesta al "if" es positiva / "if" correcto}

if (4 > 3) { 
ellipse(width/2, height/2, 50, 50);
}

  //console.log(frameCount)
  
if (3 >= 3) {
ellipse(width/2, height/2, 50, 50);
} else {
 rect(width/2, height/2, 50, 50);
}
  
}
// este ejemplo hace que cuando el frame count sea mayor a un valor la figura cambie de un circulo a un cuadrado

  
console.log(frameCount)
  
if (frameCount % 2 == 0) {
  ellipse(width/2, height/2, 50, 50);
} else {
 rect(width/2, height/2, 50, 50);
}
  
}
// este ejemplo hace que cuando el frame count sea par ((if (frameCount % 2 == 0) {)) la figura cambie de elipse a rec.


**IDEA INICIAL PROYECTO PROGRAMACION**
- pagina pagina relacionada a sismologia nacional
- conectar API´s con p5
- desarrollar lenguaje grafico de interes

-- idea grafica inicialfondo horizontal 1080x720 fondo negro,cada vez que se registra un sismo se dibuja en el centro de la pantalla una elipse de radio relacionado a la magnitud del sismo. esta circunferencia se desbanece lentamente hasta desaparecer 24 h despues. los limites de la pantalla son equivalentes a un sismo de grado considerable(?????)

  **links**
  - https://earthquake.usgs.gov/fdsnws/event/1/
  - https://www.getambee.com/api/earthquake
  - https://www.sismologia.cl/sismicidad/catalogo/2025/04/20250411.html



https://commonvoice.mozilla.org/en <- web entrenar reconocimiento de voz personalizado

https://editor.p5js.org/montoyamoraga/sketches/5zLOhCZta <- link modelo reconocimiento voz don francisco
