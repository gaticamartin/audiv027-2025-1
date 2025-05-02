# clase-08
Avances de la entrega de Francys Vásquez y Vicente Tapia.
## bitácora de proceso :sparkles:
Como idea principal es realizar un juego en donde el usuario pueda escoger una mascota, activar la cámara y "jugar" con esta al irla moviendo de un lugar a otro.</p>
### Referencias :sparkles:
**link 1** (inspiración y guía para base juego):<https://editor.p5js.org/francys.vasquez/sketches/XcgRNIiso></p>
**link 2** (guía para interactividad de objetos con la cámara):<https://www.youtube.com/watch?v=72pAzuD8tqE&t=1731s></p>
**link 3** (otro referente del uso de p5js):<https://www.youtube.com/@TheCodingTrain/videos></p>
**link 4** (referente de interactividad 2):<https://www.youtube.com/watch?v=K7b5MEhPCuo&t=251s></p>
**link 5** (guías de click):<https://p5js.org/es/reference/p5/mouseClicked/><https://www.youtube.com/watch?v=DEHsr4XicN8></p>
**link 6** (guías de teclas):<https://p5js.org/es/reference/p5/keyPressed/></p>

Hasta el momento hemos avanzado en alterar el primer referente en base a lo que buscamos, utilizando la función de presionar teclas para movilizarse dentro del menú del juego, también en otro archivo se realizó la experimentación de crear una relación directa entre hacer "click" y que la cámara aparezca o desaparezca. Todo esto con el propósito de poder unificar estas funciones más adelante, sin embargo, no se descartan las posibilidades de crear solo interacciones con el teclado.

### :feet: Código base del juego. :feet:
**Cosas a revisar:</p>**
- [ ] Arreglar parte en donde al apretar una tecla debería aparecer la cámara.
- [ ] Cohesionar la "mascota" con la interacción de un objeto.
- [ ] Poder colocar el diseño de la mascota, ya sea como imagen o creación de figuras.

```
// textAlign() para alinear texto.
// stroke() para borde de letras.
// strokeWeight() para grosor de bordes de letras.
// text('aquí va lo que se quiere mostrar', tamaño x, tamaño y).
// textSize(número) tamaño texto.

// **Ya está listo el formato del menú y selección mediante teclas, falta poder seleccionar distintos animales (o en otro caso, podría aparecer aleatoriamente).

var pxlfont; // Tipografía 1.
var stage; // Cambio de "escena"
let video; // Para la cámara.
let font2; // Tipografía 2.

function preload() {
  pxlfont = loadFont('pressstart.ttf'); // Se cargan las tipografías.
  font2 = loadFont('meows.ttf');
//  video = createCapture(VIDEO, {flipped: true});
//  video.hide();
//  handPose = ml5.handPose({flipped: true});
}

function setup() {
  createCanvas(475, 500);
//  handPose.detectStart(video, gotHands);
  
// Detecta como error la cámara y el detector de manos, se queda cargando infinitamente***
// A pesar de que se selecciona lo correspondiente se vuelve al menú y omite la cámara prendida. 
}

function draw() {
  //vamos a crear menu con distintas asignaciones
  startMenu();//asignamos distintas variables al menú seleccionador
  if (stage == 1){ //inicio menú
    startMenu(); //aqui se debería apretar 1 para ir a la otra sección
  }
  
  if (stage == 2) { // Esto lo derivaremos a la selección de mascota.
    singleStartMenu(); // Cada mascota se debería seleccionar con una letra/numero **trabajar en que no se altere y confunda con selección.
  }
  
  if (stage == 3) { // Aquí aparece menú 2, previo a interacción.
    gameBackground();
  }
}

// Revisar el porqué no aparece el video.
// ¿Se deberá usar mejor el click? ¿Quizás asignar mejor los valores?. 


// Aquí se crea el menú e intervenimos para empezar a adaptarlo al diseño que queremos
function startMenu() {
  rectMode(CORNER);//el fondo
  fill('hsl(27, 65.7%, 78.8%)');
  rect(0, 0, 475, 500);

  noStroke();//las lineas que atraviesan las letras
  fill('hsl(10, 73%, 68.5%)');
  rect(10, 38, 460, 120, 150);
  // x, y, ancho, largo, bordes

  fill('hsl(23, 65.1%, 54.6%)');
  rect(111, 160, 250, 75, 130);

  fill(255);//título del juego
  textAlign(CENTER);
  textFont(font2);
  textSize(65);
  text('HOLD YOUR', width / 2, 100);
  text('PET', width / 2, 155);

  fill(255);
  textFont(pxlfont);
  textSize(13);//créditos
  text('alterado por', width / 2, 190);
  text('Vicente y Francys', width / 2, 215);

  fill('hsl(23, 65.1%, 54.6%)');
  textSize(10);//invitación a la interactividad
  text('Créditos: Sidney Gardner', width / 2, 300);
  
  //aquí abajo se podría colocar una imágen o gif**

  fill('hsl(23, 65.1%, 54.6%)');
  textSize(20);
  text('Para comenzar', 250, 375);

  fill('hsl(10, 73%, 68.5%)');
  rect(163, 385, 170, 30, 130);
  textSize(15);
  fill(255);
  text('Presiona 1', 250, 410);

  rectMode(RADIUS);
}

// Este es el segundo menú que se activa al apretar 1.
function singleStartMenu() {
  rectMode(CORNER);
  fill('hsl(27, 65.7%, 78.8%)');
  rect(0, 0, 475, 500);

  noStroke();
  fill('hsl(10, 73%, 68.5%)');
  rect(40, 8, 400, 125, 110);

  fill('hsl(23, 65.1%, 54.6%)');
  rect(40, 120, 400, 45, 130);

  fill(255);
  textAlign(CENTER);
  textFont(font2);
  textSize(60);
  text('HOLD YOUR', width / 2, 65);
  text('PET', width / 2, 115);
  textFont(pxlfont);
  textSize(20);
  text('Selecciona mascota', width / 2, 153);

  rectMode(RADIUS);
  
  fill('hsl(10, 73%, 68.5%)');
  rect(240, 277, 170, 110);

  fill(255);
  push();
  noFill(255);
  stroke(255);
  strokeWeight(5);
  rect(width / 2, 280, 170, 110);
  pop();

  textFont(pxlfont);
  textSize(13);
  text('Perro: presiona 1', width / 2, 200);
  text('Gato: presiona 2', width / 2, 230);
  text('Hámster: presiona 3', width / 2, 260);
  text('Pinguino: presiona 4', width / 2, 290);
  text('Unicornio: presiona 5', width / 2, 320);
// Esta parte luego deberá ser seleccionable.
  fill('hsl(23, 65.1%, 54.6%)');
  textSize(14);
  text('Presiona "P" para jugar', width / 2, 430);

  textSize(14);
  text('*P mayúscula*', width / 2, 450);

}

// Aquí entra la interacción con mascota + dedos + webcam.
function gameBackground() {
  background('hsl(27, 65.7%, 78.8%)');
  rectMode(CORNER);
  textAlign(CENTER);
  textFont(pxlfont);
  textSize(10);
  fill('hsl(23, 65.1%, 54.6%)');
  text('Presiona B', width / 2, 100);
}

//function mascota(){
//  ellipseMode(CENTER);
//  fill('skyblue');
//  video = createCapture(VIDEO, {flipped: true});
//  video.hide();
//}
  
// Aquí debería cargar el video y la mascota.
// Revisar porqué tira error y no carga el video.
// Esto asigna un valor a las teclas que se piden, derivando en ciertas partes del menú e interacciones.
function keyPressed() {
  if (key == 'r') {
    px = 200;
    phh = 150;
    phy = 300;
    pbr = 237;
    pbl = 157;

    ex = 50;
    ehh = 150;
    ehy = 50;

    emx = 200;
    emhh = 150;
    emhy = 50;
    embr = 237;
    embl = 157;

  } else if (key == 'P') {
    stage = 3;
  } else if (key == 'm') {
    stage = 1;
  } else if (key == '1') {
    stage = 2;
  } else if (key == '2') {
    stage = 4;
  } else if (key == 'B') {// Aquí debería direccionar hacia la webcam con la mascota.
    stage = 5;  // Por algún motivo vuelve al menú.
  }
}

```
### Código interacción click + cámara. :camera: :computer:
En este caso, se logra con efectividad el objetivo de que al hacer click repetidamente, la pantalla en donde se muestra lo que "observa" la cámara aparezca y desaparezca sin tener que apagar la cámara.</p>
Al colocar este código dentro del código principal del juego no se activaba como debería, generando una omisión total de la interacción de esta, dentro de los intentos está la búsqueda de adaptarlo a generar la misma reacción pero al apretar alguna tecla, mantiendo el mismo formato interactivo del código principal. Algo a revisar también es el formato de la cámara, que se mantenga dentro del "canva" y no en otra parte.

```
// Al hacer click se va activar la cámara, esto se hará como ejercicio para más adelante.
let col = 0; // Color del círculo (que luego eliminamos pues era para comprobar que el click se estaba ejecutando correctamente).
let video; // Variable para el video de la webcam.

function setup() {
  createCanvas(700, 500); // Si lo quito ya no se ve el círculo y queda un cuadrado blanco junto a la webcam abajo.
}

function draw() {
  background('skyblue');
}

function mouseClicked() { // Aquí realizamos cambios para adaptar que la cámara se active dependiendo del click.
  if (col=== 0) {
    col = 255; // Si clickeo se muestra la cámara.
    video = createCapture(VIDEO, {flipped: true}); // LLamo a la función que activa la cámara.
  } else {
    col = 0;
    video.hide(); // Si vuelvo a hacer click se oculta la cámara.
  }
  return false;
}
// PREGUNTA: ¿Cómo coloco la webcam en el canva sin dañar el formato de click? (a lo mejor no es ni necesario)¿Cómo evitar que aparezca abajo?
```
## Todos los códigos van a estar como links abajo por si está malo el formato aquí :grin::sparkles:
#### P.D: También han habido intentos demasiados fallidos de introducir imágenes en los códigos pero no resultan muy bien (o no resultan en general) por lo que se exploran otras opciones compatibles :grin::thumbsup:
link código principal: <https://editor.p5js.org/francys.vasquez/sketches/yKlzVXXfO></p>
link código webcam + click: <https://editor.p5js.org/francys.vasquez/sketches/y7Smmo9op></p>
