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

## Cronometro

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



