# clase-08

no hay clase por interferiado.

## bitácora de proceso

- Giuliano: https://github.com/gaticamartin/audiv027-2025-1/tree/main/arq-01-Giulianocam/clase-08
- Jacob: https://github.com/gaticamartin/audiv027-2025-1/tree/main/dis-08-Jacob-Gidi/clase-08

## Meta inicial:
 
 generar un codigo que funcione como arbitro en el juego "quien pestañea primero", con dos jugadores en pantalla simultaneamente y señalando al primero que la camara reconozca pestañear.
 
 
 ## Pasos a seguir:
 
 1. Configurar FaceMesh
 Usa ml5.facemesh(video) para capturar los 468 puntos del rostro.
 
 2. Identificar los puntos del ojo
 Con FaceMesh, cada parte del rostro tiene índices específicos.
 
 Para los ojos, los más útiles son:
 
 
 Ojo	Índices de puntos útiles
 Ojo derecho	33 (ext), 133 (int), 159, 145 (arriba/abajo)
 Ojo izquierdo	362 (ext), 263 (int), 386, 374 (arriba/abajo)
 
 3. Calcular EAR con esos puntos
 Fórmula para un ojo:
 
 ini
 Copiar
 Editar
 EAR = (dist(159,145)) / dist(33,133)
 Lo mismo para el otro ojo.
 
 4. Detectar el pestañeo
 Si el EAR < 0.2 por un par de frames → pestañeo.
 
 Usa una variable tipo isBlinking para no contar múltiples veces un mismo pestañeo.

### Cronometro

https://www.youtube.com/watch?v=klSOBa_WDB0 tutorial inicial creacion de cronometro p5

Seria bueno agregar controles de inicio, a partir de el que se genere un countDown 3, 2, 1 antes del comienzo de el cronometraje de el tiempo sin pestañear.
Sonido Semaforo MarioKart ?? 

![image](https://github.com/user-attachments/assets/e8f0655a-01c6-4de5-8a6a-fb8a215b4777)

Hasta aqui este codigo sirve para crear un cronometro con los controles 
- Start = *barra espaciadora*
- Pausa = *p*
- Reinicio = *c*

  //definicion inicial de cronometro en pantalla

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


#### ajustes de color al cronometro

aqui hay otra version que principalmente agrega cambios de color al cronometro dependiendo de si esta andando o no.
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

A esta altura me gustaria lograr que al apretar el espacio primero se iniciara una cuenta atras desde tres segundos hasta cero antes de comenzar a contar el tiempo transcurrido.

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


