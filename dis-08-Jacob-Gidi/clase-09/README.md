# clase-09

viernes 09 mayo 2025

## Arbitro de Pestañeo

integrantes:

* NOMBRE Martín Gatica <https://github.com/Jacob-Gidi/audiv027-2025-1/tree/main/arq-03-gaticamartin/clase-09>
* NOMBRE Giuliano <https://github.com/Jacob-Gidi/audiv027-2025-1/tree/main/arq-01-Giulianocam/clase-09>

```md
mi equipo de trabajo es <https://github.com/gaticamartin> y <https://github.com/Giulianocam>, entregamos en el repositorio en este enlace <https://github.com/Jacob-Gidi/audiv027-2025-1/blob/main/dis-08-Jacob-Gidi/clase-09/README.md>.
```

## Acerca del proyecto

Nuestro proyecto es una IA que actúe de juez para el juego de "Quien pestañea primero". Entre un máximo de 2 jugadores deben colocarse en frente a la cámara en donde el programa cronometrara cuanto tiempo estuvo cada jugador sin pestañear y cuál ha logrado un mayor tiempo, dándolo como ganador.

## Pasos a seguir

1 Configurar FaceMesh Usa ml5.facemesh(video) para capturar los 468 puntos del rostro.

2 Identificar los puntos del ojo Con FaceMesh, cada parte del rostro tiene índices específicos.
Para los ojos, los más útiles son:

3 Ojo Índices de puntos útiles Ojo derecho 33 (ext), 133 (int), 159, 145 (arriba/abajo) Ojo izquierdo 362 (ext), 263 (int), 386, 374 (arriba/abajo)

4 Calcular EAR con esos puntos Fórmula para un ojo:
ini Copiar Editar EAR = (dist(159,145)) / dist(33,133) Lo mismo para el otro ojo.

5 Detectar el pestañeo Si el EAR < 0.2 por un par de frames → pestañeo.
Usa una variable tipo isBlinking para no contar múltiples veces un mismo pestañeo.

### Cronometro

https://www.youtube.com/watch?v=klSOBa_WDB0 tutorial inicial creacion de cronometro p5

Sería bueno agregar controles de inicio, a partir del que se genere un countDown 3, 2, 1 antes del comienzo del cronometraje del tiempo sin pestañear.
¿Sonido Semáforo MarioKart?

![image](https://github.com/user-attachments/assets/e8f0655a-01c6-4de5-8a6a-fb8a215b4777)

Hasta aquí este código sirve para crear un cronómetro con los controles.
- Start = *barra espaciadora*
- Pausa = *p*
- Reinicio = *c*

  //Definición inicial de cronómetro en pantalla

//function setup() {
  //createCanvas(414, 414); //tamaño del background formato cuadrado para Iphone?? iphone es 828 pero tiene resolucion x 2 por lo que en este caso se debe /2
//}

function draw() {
  background(220);
}

function setup() {
 
//LIENZO
  
  //lienzo tamaño, posicion en pantalla texto, tamaño texto 
  createCanvas(414, 414); 
  //tamaño del background formato cuadrado para Iphone?? iphone es 828 pero tiene resolucion x 2 por lo que en este caso se debe /2
  textAlign(CENTER, CENTER); 
  textSize(32);
}


//Tiempo. //Momento inicio, Señal de inicio, Tiempo transcurriod
let startTime;     // Guarda el momento en que inicia el cronómetro
let running = false;  // Bandera para saber si está corriendo
let elapsed = 0;   // Tiempo transcurrido acumulado

//color Bacground

function draw() { // Debiese ser reempazado por la camara frontal de el dispositivo.
  background(255); //255 es blanco.

  //lo siguiente no lo entiendo bien
  
  if (running) {
    elapsed = millis() - startTime;
  }

  //milisegundos a minutos:segundos:centésimas
  let seconds = floor(elapsed / 1000);
  let minutes = floor(seconds / 60);
  seconds = seconds % 60;
  let milliseconds = floor((elapsed % 1000) / 10); // Centésimas

  let timerText = nf(minutes, 2) + ':' + nf(seconds, 2) + ':' + nf(milliseconds, 2);
  text(timerText, width / 2, height / 2); 
}

// keyPressed para establecer controles con teclado
//cambie los controles a: start = ' ' (que es el codigo asignado a la barra espaciadora); p = pausa; c = cancelar (reinicio)

function keyPressed() {
  if (key === ' ') {
    if (!running) {
      running = true;
      startTime = millis() - elapsed; // Continúa desde donde se pausó
    }
  } else if (key === 'p') {
    running = false;
  } else if (key === 'c') {
    running = false;
    elapsed = 0;
  }
}

## ajustes de color al cronometro

Aquí hay otra versión que principalmente agrega cambios de color al cronómetro dependiendo de si está andando o no.
![image](https://github.com/user-attachments/assets/d03a225a-89bb-4195-90d2-b667cbac65b1)

Codigo:

//Definicion cronometro en pantalla con ajustes de color

//Tiempo
let startTime;     
let running = false;  
let elapsed = 0;   

//Color del texto
let timerColor;

function setup() {
  createCanvas(414, 414); 
  textAlign(CENTER, BOTTOM); 
  textFont('Verdana');
  textSize(18);
  
  timerColor = color(0); //Negro por defecto
}

function draw() {
  background(255); //Fondo blanco

  if (running) {
    elapsed = millis() - startTime;
  }

  // Cálculo del tiempo
  let seconds = floor(elapsed / 1000);
  let minutes = floor(seconds / 60);
  seconds = seconds % 60;
  let milliseconds = floor((elapsed % 1000) / 10);

  let timerText = nf(minutes, 2) + ':' + nf(seconds, 2) + ':' + nf(milliseconds, 2);

  fill(timerColor); //Aplica el color actual
  text(timerText, width / 2, height / 2); 
}

// Controles del cronómetro
function keyPressed() {
  if (key === ' ') {
    if (!running) {
      running = true;
      startTime = millis() - elapsed;
      timerColor = color(255, 0, 0); //Rojo al iniciar
    }
  } else if (key === 'p') {
    running = false;
    timerColor = color(0); //Negro al pausar
  } else if (key === 'c') {
    running = false;
    elapsed = 0;
    timerColor = color(0); //Negro al cancelar
  }
}

### Siguiente paso

A esta altura me gustaría lograr que al apretar el espacio primero se iniciara una cuenta atrás desde tres segundos hasta cero antes de comenzar a contar el tiempo transcurrido.

https://editor.p5js.org/marynotari/sketches/S1T2ZTMp- Countdown Timer definicion
https://www.youtube.com/watch?app=desktop&v=rKhwDhp9dcs tutorial

#### Funciona !

let startTime;     
let running = false;  
let elapsed = 0;   

let timerColor;

let countdownActive = false;
let countdownStartTime;
let countdownDuration = 3000; // = 3 segundos

function setup() {
  createCanvas(414, 414); 
  textAlign(CENTER, BOTTOM); 
  textFont('Verdana');
  textSize(18);
  
  timerColor = color(0); //Negro
}

function draw() {
  background(255);

  if (countdownActive) {
    let countdownElapsed = millis() - countdownStartTime;
    let remaining = ceil((countdownDuration - countdownElapsed) / 1000);

    fill(255, 0, 0); // Texto rojo para la cuenta atrás

    if (remaining > 0) {
      text(remaining, width / 2, height / 2);
    } else {
      text("!!!", width / 2, height / 2); //Muestra "¡GO!" justo antes de empezar //esta parte no funcionó
    }

    // Al terminar la cuenta regresiva
    if (countdownElapsed >= countdownDuration) {
      countdownActive = false;
      running = true;
      startTime = millis() - elapsed;
      timerColor = color(255, 0, 0); ///Color rojo para indicar que corre
    }

    return; //Detiene aquí el draw hasta que la cuenta regresiva termine
  }

  if (running) {
    elapsed = millis() - startTime;
  }

  // Formato del cronómetro
  let seconds = floor(elapsed / 1000);
  let minutes = floor(seconds / 60);
  seconds = seconds % 60;
  let milliseconds = floor((elapsed % 1000) / 10);

  let timerText = nf(minutes, 2) + ':' + nf(seconds, 2) + ':' + nf(milliseconds, 2);

  fill(timerColor);
  text(timerText, width / 2, height / 2); 
}

function keyPressed() {
  if (key === ' ') {
    if (!running && !countdownActive) {
      countdownActive = true;
      countdownStartTime = millis();
      timerColor = color(255, 0, 0); //Rojo desde la cuenta regresiva
    }
  } else if (key === 'p') {
    running = false;
    countdownActive = false;
    timerColor = color(0); //Negro al pausar
  } else if (key === 'c') {
    running = false;
    elapsed = 0;
    countdownActive = false;
    timerColor = color(0); // Negro al reiniciar
  }
}


### Ahora con camara !!! 

(le puse mirror porque es muy confuso de la otra manera)

![image](https://github.com/user-attachments/assets/448de9b3-3e28-4e17-bcee-2771eda1f582)

#### Codigo

let startTime;     
let running = false;  
let elapsed = 0;   

let timerColor;

let countdownActive = false;
let countdownStartTime;
let countdownDuration = 3000; // = 3 segundos

let video;

function setup() {
  createCanvas(414, 414); 
  textAlign(CENTER, BOTTOM); 
  textFont('Verdana');
  textSize(18);

  timerColor = color(0); //Negro

  //Activar cámara
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); //??
}

function draw() {
  //mirror camara
  push();
  translate(width, 0); //Mover derecha
  scale(-1, 1);         //Invertir horizontalmente
  image(video, 0, 0, width, height);
  pop();                //??

  if (countdownActive) {
    let countdownElapsed = millis() - countdownStartTime;
    let remaining = ceil((countdownDuration - countdownElapsed) / 1000);

    fill(255, 0, 0);
    textSize(18); //deberia ser mas grande que el cronometro? quizas en BOLD(?)

    if (remaining > 0) {
      text(remaining, width / 2, height / 2);
    } else {
      text("¡GO!", width / 2, height / 2);
    }

    if (countdownElapsed >= countdownDuration) {
      countdownActive = false;
      running = true;
      startTime = millis() - elapsed;
      timerColor = color(255, 0, 0);
    }

    return;
  }

  if (running) {
    elapsed = millis() - startTime;
  }

  let seconds = floor(elapsed / 1000);
  let minutes = floor(seconds / 60);
  seconds = seconds % 60;
  let milliseconds = floor((elapsed % 1000) / 10);

  let timerText = nf(minutes, 2) + ':' + nf(seconds, 2) + ':' + nf(milliseconds, 2);

  fill(timerColor);
  textSize(18);
  text(timerText, width / 2, height / 2); 
}

function keyPressed() {
  if (key === ' ') {
    if (!running && !countdownActive) {
      countdownActive = true;
      countdownStartTime = millis();
      timerColor = color(255, 0, 0); //Rojo desde la cuenta regresiva
    }
  } else if (key === 'p') {
    running = false;
    countdownActive = false;
    timerColor = color(0); //Negro al pausar
  } else if (key === 'c') {
    running = false;
    elapsed = 0;
    countdownActive = false;
    timerColor = color(0); //Negro al reiniciar
  }
}


### PROBLEMAS A SOLUCIONAR

- hasta ahora no he logrado realmente ubicar el texto
- me gustaría estilizar más el countDown (ejemplo: que los números "3, 2, 1,!!!!") ocupen el tamaño máximo de la resolución de la pantalla.
- falta retomar anotaciones de los primeros códigos porque se pierde la claridad en la modificación de variables.
- a partir de ahora el comando ´p´ para señalar el fin del conteo debería accionarse cuando el facemesh reconozca una distancia mínima entre el punto de reconocimiento superior o inferior de cada cara.

## se adjunta version hasta aqui

https://editor.p5js.org/gaticamartin/sketches/diJnuFXlO


### esta IA debe ser capas de:

-distinguir los rostros y rastrear los puntos claves alrededor de los ojos.

-identificar el cierre de los ojos para determinar si alguno de los participantes ha pestañeado.

-contar con 3 estados: el primero de default, donde se preparan los jugadores y se da la señal para el comienzo, el segundo ya comenzado el juego donde se 
 cronometre el tiempo de duración hasta detectar un cierre de los ojos, y el tercero al cual se accede al ocurrir un cierre de ojos y donde se muestre el tiempo cronometrado así como también permita volver al segundo estado para restablecer el juego.

-cronometrar ambos rostros detectados simultáneamente, pero también de manera independiente.

### Herramientas utilizadas

Para desarrollar este proyecto se ocupó como base el modelo "FaceMesh" de "Ml5.js" debido a la capacidad de identificar los keypoints requeridos para este proyecto, setear el número de rostros a analizar, y también poder adaptar la sensibilidad en el seguimiento de los keypoints claves. 

Además se utilizaron repositorio de información sobre el lenguaje javascript, tales como <https://www.w3schools.com/js/default.asp>, <https://p5js.org/reference/>, y <https://docs.ml5js.org/#/reference/facemesh>.

## código del proyecto

el código original que citamos es

```javascript

let faceMesh;
let video;
let faces = [];
// Caras maximas: 2, Refinar seguimiento de keyponits claves activado
let options = { maxFaces: 2, refineLandmarks: true, flipHorizontal: false };
let timeByFace = [];
// Estados switch 0 = default, 1 = contando, 2 = finalizado
let state = 0; 
let tiempoAcumulado = 0;
let cronometroActivo = false;

// Keypoints respectivos al ojo izquierdo
const leftEye = [362, 398, 384, 385, 386, 387, 388, 466, 263, 249, 390, 373, 374, 380, 381, 382]
// Keypoints respectivos al ojo derecho
const rightEye = [133, 173, 157, 158, 159, 160, 161, 246, 33, 7, 163, 144, 145, 153, 154, 155]

// Precargar el modelo ml5.js "FaceMesh"
function preload() {
  
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  
  image(video, 0, 0, width, height);

  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];

    // Dibujar puntos del ojo izquierdo (opcional)
    for (let j = 0; j < leftEye.length; j++) {
      let index = leftEye[j];
      let keypoint = face.keypoints[index];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 2);
    }

    // Dibujar puntos del ojo derecho (opcional)
    for (let j = 0; j < rightEye.length; j++) {
      let index = rightEye[j];
      let keypoint = face.keypoints[index];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 2);
    }
 
    // Detectar si el ojo izquierdo está cerrado
    let leftEyeTop = face.keypoints[385];  // párpado superior
    let leftEyeBottom = face.keypoints[374];  // párpado inferior
    let leftEyeOpeness = distancia(leftEyeTop, leftEyeBottom);
 
    // Detectar si el ojo derecho está cerrado
    let rightEyeTop = face.keypoints[159];  // párpado superior
    let rightEyeBottom = face.keypoints[145];  // párpado inferior
    let rightEyeOpeness = distancia(rightEyeTop, rightEyeBottom);
 
    let forehead = face.keypoints[54]; 
    let closedEyes = (rightEyeOpeness < 5 || leftEyeOpeness < 5);

    let cara = faces[i];
    let datos = timeByFace[i];

    // Setear estados y sus caracteristicas 
  switch (datos.state) {
    case 0:
      fill(255);
      textSize(16);
      text("Haz clic para comenzar",  20, height - 20);
      break;

    case 1:
      if (!closedEyes) {
        datos.tiempo += deltaTime / 1000;
      } else {
        datos.state = 2;
      }
      fill(0, 200, 0);
      text("Tiempo: " + nf(datos.tiempo, 1, 2) + " s", forehead.x, forehead.y);
      break;

    case 2:
      fill(255, 0, 0);
      text("Final: " + nf(datos.tiempo, 1, 2) + " s", forehead.x, forehead.y);
       fill(255);
       textSize(16);
       text("Haz clic para reiniciar",  20, height - 20);
      break;
    }
  }
}

// Funcion que permite resetear el estado mediante el clic
function mousePressed() {
  for (let i = 0; i < timeByFace.length; i++) {
    if (timeByFace[i].state === 0 || timeByFace[i].state === 2) {
      timeByFace[i].state = 1;
      timeByFace[i].tiempo = 0;
    }
  }
}


// Funcion para comprobar la distancia entre keypoints del ojo
function distancia(p1, p2) {
  return dist(p1.x, p1.y, p2.x, p2.y);
}

function gotFaces(results) {
  faces = results;

  // Define que tengamos un cronometro para cada cara
  while (timeByFace.length < faces.length) {
    timeByFace.push({
      state: 0,
      tiempo: 0,
      finalizado: false
    });
  }

  // Recorta los datos sobrantes en caso de haber menos caras
  if (timeByFace.length > faces.length) {
    timeByFace = timeByFace.slice(0, faces.length);
  }
}
```

## enlace del proyecto

lo hicimos en editor de p5.js

<https://editor.p5js.org/giuliano.camilla/sketches/HYA3sVGNV>

fullscreen

<https://editor.p5js.org/giuliano.camilla/full/HYA3sVGNV>

## documentación multimedia / audiovisual del proyecto funcionando

![foto1_estado_default](https://github.com/user-attachments/assets/1eaa293a-6dae-4967-be69-e75b2694b81c)
Estado de default, esperando que se presione el clic para empezar.

![foto2_deteccion_2rostros](https://github.com/user-attachments/assets/3185d11e-0739-4a1e-896d-b14da246cf86)
Detección de múltiples rostros.

![foto3_estado2](https://github.com/user-attachments/assets/20f6f448-7eb6-4b3c-9362-45527bb86b37)
Estado 2, cronómetros corriendo hasta que se detecte el cierre de un ojo.

![foto4_estado2_1cronometro_detenido](https://github.com/user-attachments/assets/866afd0e-a274-4930-8250-b49b992609e6)
Cronómetros independientes permiten que uno siga corriendo mientras el otro ya se ha detenido.

![foto5_estado3](https://github.com/user-attachments/assets/2b5159f7-37c4-45a7-8147-51817462dc74)
Estado 3, tiempos finales permiten dar con el ganador.

Uno de los problemas que enfrentamos durante el desarrollo de este programa fue el de la capacidad computacional, ya que al ser el pestañeo un acto tan rápido, el procesamiento de los frames de una manera aletargada permitía pestañear sin que el programa alcanzara a detectarlo. Esto es posible solucionarlo con mayor capacidad de computación o un código más eficiente (eliminando datos no utilizados, como por ejemplo keypoints del resto de la cara que no sean los ojos).
Otro problema identificado fue el como hacer que los cronómetros funcionaran independientemente, ya que también existía la opción de desarrollar solamente un cronómetro general, esta solución es más simple, pero a la vez limita la capacidad del código de ser expandido como por ejemplo agregando más jugadores (solamente se experimentó con máximo 2)

## bibliografía

Tomamos el código base alojado en <https://editor.p5js.org/ml5/sketches/lCurUW1TT>

Usamos la biblioteca ml5.js <https://docs.ml5js.org/#/reference/facemesh>

https://www.youtube.com/watch?v=klSOBa_WDB0 tutorial inicial creacion de cronometro p5

https://editor.p5js.org/marynotari/sketches/S1T2ZTMp- Countdown Timer definicion
https://www.youtube.com/watch?app=desktop&v=rKhwDhp9dcs tutorial

## conclusiones

El desarrollo de nuestra IA para el juego de "Quien pestañea primero" fue un reto técnico donde aplicamos visión por computadora y procesamiento en tiempo real, usando FaceMesh de ml5. js. El sistema identifica rostros, rastrea los ojos y detecta parpadeos con precisión. Implementamos un cronómetro para cada jugador, creando una experiencia competitiva. Enfrentamos problemas de capacidad computacional que afectaron la precisión, aunque logramos un sistema funcional y expandible. Esto nos dio un profundo entendimiento de la visión artificial y la optimización de recursos.
La inteligencia artificial ha mostrado ser una herramienta muy eficiente para problemas de poca abstracción y sin complejidad ética.
