# clase-09

viernes 09 mayo 2025

## NOMBREDELPROYECTO

integrantes:

* NOMBRE <LINK A GITHUB>
* NOMBRE <LINK A GITHUB>

md
mi equipo de trabajo es <https://github.com/NOMBRE> y <https://github.com/NOMBRE>, entregamos en el repositorio en este enlace <https://github.com/ETC>.


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

## Creacion del proyecto
### Deteccion de manos

Partimos desde un ejemplo base de detección de manos. Adaptamos el modelo para seguir solo el dedo índice. Agregamos una imagen que se mueve suavemente con el dedo (suavizado con "lerp()"). Creamos un sistema de puntos al tocar objetivos ocultos que cambian de lugar, generando una dinámica tipo "búsqueda del tesoro". Todo esto fue hecho en referencia al juego "Circle Clicker" dentro de la libreria de p5.js <https://p5js.org/examples/games-circle-clicker/>


https://github.com/user-attachments/assets/f25f6fce-5a20-4ede-b292-0972b63ce162


### Generacion de circulos y colision de objetos

El primer intento de realizar la colisión entre dedo (en pruebas iniciales el mouse) y círculo se hace mediante un boolean, sin embargo esto no nos resultó principalmente a la falta de encontrar una forma de detectar la colisión. Por otra parte, debido a la aleatoriedad el círculo inicial podría parcialmente generarse fuera del límite del canvas.



https://github.com/user-attachments/assets/449354c5-ca0d-4d2a-b2d4-9844b38504bd



Para resolver el problema de la colisión, se optó por realizar una función con una variable local de distancia, siendo las coordenadas posición del mouse X, posición del mouse Y, posición del círculo X, posición del círculo Y. 

Una vez teniendo esta variable, se crea un “if” (en lugar del boolean), el cual en el caso de que la posición del mouse en la variable sea menor al radio del círculo respecto a su centro, está activaría la segunda función de generar un nuevo círculo.

video mouse sobre circulo

Una vez resuelta la colisión entre mouse y círculo generado, el siguiente paso a trabajar sería en implementar el hitbox a la detección del dedo índice en lugar del mouse. Para esto, dentro de la variable de distancia se cambian las coordenadas del mouse por las del lerp siendo estas las siguientes coordenadas: smoothedX, smoothedY, posición del círculo X, posición del círculo Y. 



video dedo sobre circulo



### Ensamblaje y ambientación de mundo

Aquí es donde empezamos a ensamblar el juego, combinando todos los elementos. Una vez terminado se comienza con la ambientación de mundo, colocando de fondo el titanic de la FAU y al círculo se le coloca un mask para reemplazar el color de relleno por la sala de clases G35

foto 2

aca hablar sobre pantalla inicio y sistema de puntaje







## código del proyecto

javascript
function setup() {
    createCanvas(400, 400);
    background(220);    
}


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
