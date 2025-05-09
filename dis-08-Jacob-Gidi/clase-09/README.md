# clase-09

viernes 09 mayo 2025

## Arbitro de Pestañeo

integrantes:

* NOMBRE Martín Gatica <https://github.com/Jacob-Gidi/audiv027-2025-1/tree/main/arq-03-gaticamartin/clase-09>
* NOMBRE Giuliano <https://github.com/Jacob-Gidi/audiv027-2025-1/tree/main/arq-01-Giulianocam/clase-09>

```md
mi equipo de trabajo es <https://github.com/gaticamartin> y <https://github.com/Giulianocam>, entregamos en el repositorio en este enlace <https://github.com/ETC>.
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

## Cronometro
https://www.youtube.com/watch?v=klSOBa_WDB0 tutorial inicial creacion de cronometro p5

Seria bueno agregar controles de inicio, a partir de el que se genere un countDown 3, 2, 1 antes del comienzo de el cronometraje de el tiempo sin pestañear. Sonido Semaforo MarioKart ??

image

Hasta aqui este codigo sirve para crear un cronometro con los controles

Start = barra espaciadora

Pausa = p

Reinicio = c

//definicion inicial de cronometro en pantalla

//function setup() { //createCanvas(414, 414); //tamaño del background formato cuadrado para Iphone?? iphone es 828 pero tiene resolucion x 2 por lo que en este caso se debe /2 //}

function draw() { background(220); }

function setup() {

//LIENZO

//lienzo tamaño, posicion en pantalla texto, tamaño texto createCanvas(414, 414); //tamaño del background formato cuadrado para Iphone?? iphone es 828 pero tiene resolucion x 2 por lo que en este caso se debe /2 textAlign(CENTER, CENTER); textSize(32); }

//Tiempo. //Momento inicio, Señal de inicio, Tiempo transcurriod let startTime; // Guarda el momento en que inicia el cronómetro let running = false; // Bandera para saber si está corriendo let elapsed = 0; // Tiempo transcurrido acumulado

//color Bacground

function draw() { // Debiese ser reempazado por la camara frontal de el dispositivo. background(255); //255 es blanco.

//lo siguiente no lo entiendo bien

if (running) { elapsed = millis() - startTime; }

//milisegundos a minutos:segundos:centésimas let seconds = floor(elapsed / 1000); let minutes = floor(seconds / 60); seconds = seconds % 60; let milliseconds = floor((elapsed % 1000) / 10); // Centésimas

let timerText = nf(minutes, 2) + ':' + nf(seconds, 2) + ':' + nf(milliseconds, 2); text(timerText, width / 2, height / 2); }

// keyPressed para establecer controles con teclado //cambie los controles a: start = ' ' (que es el codigo asignado a la barra espaciadora); p = pausa; c = cancelar (reinicio)

function keyPressed() { if (key === ' ') { if (!running) { running = true; startTime = millis() - elapsed; // Continúa desde donde se pausó } } else if (key === 'p') { running = false; } else if (key === 'c') { running = false; elapsed = 0; } }

## código del proyecto

el código original que citamos es

```javascript
function setup() {
    createCanvas(400, 400);
    background(220);    
}
```

## enlace del proyecto

lo hicimos en editor de p5.js

## documentación multimedia / audiovisual del proyecto funcionando

agregar imágenes, videos, gifs, etc.

agregar callejones sin salida a los que llegaron y la manera en que se repartieron el trabajo.

## bibliografía

nos basamos en el tutorial de INSERTARLINK

tomamos el código base alojado en INSERTARLINK

usamos la biblioteca p5.js vX.Y.Z. y la biblioteca ml5.js blablabla

## conclusiones

la IA sirve para X, pero no sirve para Y.

esto nos pareció adecuado, esto nos pareción exclusivo

esto nos causó alegría / incomodidad.

posibles usos futuros que sean positivos, o negativos, o sociales, o personales.

agregar dimensión ética.
