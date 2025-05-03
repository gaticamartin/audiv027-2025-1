# clase-09

viernes 09 mayo 2025

## NOMBREDELPROYECTO

integrantes:

* NOMBRE <LINK A GITHUB>
* NOMBRE <LINK A GITHUB>

```md
mi equipo de trabajo es <https://github.com/NOMBRE> y <https://github.com/NOMBRE>, entregamos en el repositorio en este enlace <https://github.com/ETC>.
```

## acerca del proyecto

El proyecto es un juego simple que se basa en 
Este proyecto es una experiencia interactiva que utiliza inteligencia artificial y visión por computadora para permitir que las personas interactúen con la pantalla usando solo sus manos, sin necesidad de teclado ni mouse. El sistema detecta en tiempo real el dedo índice del usuario mediante una cámara web, y coloca sobre él la imagen de un profesor sonriente, simulando que el profesor se mueve con el dedo. El objetivo es encontrar y tocar con ese dedo una imagen de una sala secreta escondida en la universidad. Al lograrlo, se suma un punto y la sala cambia de lugar de forma aleatoria, creando un juego dinámico y entretenido.

Usa el modelo HandPose de la librería ml5.js, que reconoce la posición de las manos con la cámara del computador en tiempo real. Se combinó esto con código de p5.js para mostrar las imágenes, manejar animaciones, y detectar colisiones. Funciona en tiempo real, mientras el usuario está frente a la pantalla con su mano visible para la cámara. 

Se pensó como una forma lúdica y visualmente atractiva de demostrar cómo se pueden aplicar modelos de IA accesibles para crear experiencias interactivas sin dispositivos físicos. Además, hace un guiño al entorno universitario (la figura del profesor y la sala escondida), conectando con el contexto de los estudiantes. Este trabajo fue desarrollado como parte de un curso universitario de introducción a la inteligencia artificial con JavaScript, buscando aplicar conocimientos básicos de programación junto con modelos preentrenados de IA.

Herramientas utilizadas
* p5.js: librería creativa de JavaScript para gráficos y animaciones, usada para controlar el canvas, imágenes, y la interacción visual.
* ml5.js: librería de inteligencia artificial accesible para artistas y principiantes, basada en TensorFlow.js. Se utilizó su modelo HandPose para detectar la posición de los dedos.
* Cámara web: como sensor de entrada para captar el movimiento en tiempo real.
* Imágenes personalizadas: se usaron imágenes propias (como la del profesor y la sala) para darle un toque humorístico y contextualizado al proyecto.
* Partimos desde un ejemplo base de detección de manos. Adaptamos el modelo para seguir solo el dedo índice. Agregamos una imagen que se mueve suavemente con el dedo (suavizado con "lerp()"). Creamos un sistema de puntos al tocar objetivos ocultos que cambian de lugar, generando una dinámica tipo "búsqueda del tesoro". Todo esto fue hecho en referencia al juego "Circle Clicker" dentro de la libreria de p5.js <https://p5js.org/examples/games-circle-clicker/>

## código del proyecto

```javascript
function setup() {
    createCanvas(400, 400);
    background(220);    
}
```

## enlace del proyecto

lo hicimos en editor de p5.js v1.10.0

## documentación multimedia / audiovisual del proyecto funcionando

agregar imágenes, videos, gifs, etc.

agregar callejones sin salida a los que llegaron y la manera en que se repartieron el trabajo.

## bibliografía

nos basamos en el tutorial de INSERTARLINK

tomamos el código base alojado en INSERTARLINK

* Usamos la biblioteca p5.js v1.10.0. para hacer el código del proyecto, buscando ejemplos y/o referencias para el correcto funcionamiento; y la biblioteca ml5.js, sobre todo la sección "handpose"

* El código usado para la primera fase de detección es "HandPose-Draw with Index Finger" by re7l <https://editor.p5js.org/re7l/sketches/pd-SZ8lfA>

## conclusiones

la IA sirve para X, pero no sirve para Y.

esto nos pareció adecuado, esto nos pareción exclusivo

esto nos causó alegría / incomodidad.

posibles usos futuros que sean positivos, o negativos, o sociales, o personales.

agregar dimensión ética.
