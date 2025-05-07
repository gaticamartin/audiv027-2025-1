# clase-09

viernes 09 mayo 2025

## TeachSeñas

integrantes:

* Fuhua Huang <LINK [A GITHUB](https://github.com/fuhua486) >
* Ignacio Castro C. <LINK [A GITHUB](https://github.com/nachofau)>

```md
mi equipo de trabajo es <https://github.com/fuhua486> y <https://github.com/nachofau>, entregamos en el repositorio en este enlace <https://github.com/ETC>.
```

## acerca del proyecto

El proyecto TeachSeñas(Teach de Teachable Machine, Señas:Lengua de Señas Chilena) se consiste en reconocer y entender palabras básicas de la Lengua de Señas Chilena (LSCh), como "Hola", "Gracias", "Sí", "No", "Casa","Amor","Amigo"y "Por favor". Ayudando a establecer una comunicacion basica entre persona que usa lengua de señas chilena y persona que no entiende nada acerca de esta lenguaje, tambien ayuda las personas a aprender señas esenciales de manera interactiva.(porque para interactuar, tiene que saber la lengua de seña chilena, no todos, pero en los ejemplos que usamos como base para el proyecto).  
El proyecto funciona a través de una cámara: el usuario hace una seña con las manos, y el sistema los reconoce en tiempo real y muestra su significado(en palabras) en la pantalla.

Las herramientas que utilizamos son: **ml5.js**, **p5.js Web Editor** y **Teachable Machine**.

![image](https://github.com/user-attachments/assets/2bbe7c2d-6e6d-47ad-b3b8-20ffbd7ca4fa)
![image](https://github.com/user-attachments/assets/0cc6c770-3580-4f7e-9302-97539654adb2)
![image](https://github.com/user-attachments/assets/1aef7aac-9d69-4c1c-8e68-a9bd9ca6a6c9)

Como herramienta que utilizamos a menudo en nuestros aprendizajes, ml5.js nos proporciona muchos modelos para utilizar.

En la clase de Inteligencia Artificial de profe Aarón Montoya, nos mostró las funciones de los dos modelos, handpose e ImageClassifier, y explicó cómo utilizar el código con el apoyo de ayudante.

Basándonos en esto, a continuación mostraremos el proceso de creación de nuestro proyecto.

## procesos

Para comenzar, analizamos las 12 palabras en Lengua de Señas Chilena más importantes según la fuente de biobioChile. (https://www.biobiochile.cl/noticias/servicios/toma-nota/2024/09/24/12-palabras-en-lengua-de-senas-chilena-que-deberias-aprender-te-sabes-alguna.shtml)

Dividimos estas palabras en dos categorias: Con movimiento(dinamico)/Sin movimientos(estatico)

Las palabras con movimientos son: Hola, Gracias, Por favor, Si, No, Amigo/a, Perdón, Comida y Agua.
Las palabras sin movimientos(Estatico) son: Casa y Amor.
![image](https://github.com/user-attachments/assets/737b78f8-ea2a-447c-8d5d-9b7fc0414963)

Después de clasificar los movimientos, vamos a entrenar nuestro modelo en Teachable Machine.
Al principio probamos el modelo de postura, pero no nos resulta, porque el modelo no se puede detectar las diferencias entre la postura de mano y dedos, el modelo solo sirve para detectar postura en el sentido mas amplio(movimiento con todos el cuerpo), y no en detalles pequeños.

![image](https://github.com/user-attachments/assets/cd1f05bb-cd97-4e55-85ac-747ecb1ba0f0)


Luego vamos a usar el modelo de imagen, probando diferentes lengua de seña. El modelo de imagen resulta mucho mejor que de postura para nuestro proyecto, pero se requiere un tamaño de muestra mayor para detectarlo mejor.
El modelo de imagen de Teachable Machine se ve afectado por muchos factores a la hora de distinguir el lenguaje de señas: la distancia del gesto, la apariencia del demostrador (mostrando solo el cuerpo o la persona completa), el entorno y el color de la ropa.

Intentamos todo eso de mostrar la lengua de señas chilena delante de la cámara: sí, no, gracias. El resultado es que Teachable Machine no puede reconocer con precisión el lenguaje de señas que expresamos(a una distancia que se puede ver el demostrador y el gesto que hace). Sólo puede reconocerlo cuando mostramos los gestos individualmente y estamos cerca de los gestos en lugar de la persona(el demostrador). Además, no es 100% exacto y hay algunas desviaciones. Por esta razón, terminamos eligiendo solo ocho frases para la capacitación: Hola, Gracias, Por favor, Si, No, Amigo/a, Casa y Amor.
![image](https://github.com/user-attachments/assets/d256dfee-dfc7-46fd-9392-276a2622cad3)

## código del proyecto

**el código original que citamos es**

```javascript
// A variable to initialize the Image Classifier
let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

let imageModelURL = "https://teachablemachine.withgoogle.com/models/bXy2kDNi/";

function preload() {
  ml5.setBackend('webgl');
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(640, 480);

  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();

  // Start detecting objects in the video
  classifier.classifyStart(video, gotResult);
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
  fill(0, 255, 0);
  textSize(32);
  text(label, 20, 50);
}

// A function to run when we get the results
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
}
```

**Modificaciones en el código:**
```javascript
// Aquí reemplazamos el enlace con el modelo de Teachable Machine que hemos entrenado
let imageModelURL = "https://teachablemachine.withgoogle.com/models/0Gt6Qh-9H/";
```

```javascript
  // En el fill modificamos el color de la letra: Naranjo
  fill(241, 111, 36);
  // Cambiar el tamaño de las letras(texto),de 35 a 50.
  textSize(50);
  //Aqui aprendemos en un tutorial que textAlign sirve para alinear texto
  textAlign(CENTER,BOTTOM)
  //Aquí aprendemos que podemos usar directamente la división y números específicos para cambiar la posición del texto.
  text(label, width/2, height-10);

```
**Código final(Resultados):**
```javascript


```

## enlace del proyecto

lo hicimos en editor de p5.js:

## documentación multimedia / audiovisual del proyecto funcionando

(link video)

(link de procesog)

## bibliografía

Nos basamos en el tutorial de [The Coding Train](https://youtu.be/kwcillcWOg0?si=LD4fNH_918367TAY) :
Teachable Machine 1: Image Classification

Usamos el modelo **ml5 + Teachable Machine: Image + Teachable Machine** en la biblioteca ml5.js, luego tomamos el código base en [p5.js](https://editor.p5js.org/ml5/sketches/VvGXajA36) para hacer el proyecto

## conclusiones

la IA sirve para X, pero no sirve para Y.

esto nos pareció adecuado, esto nos pareción exclusivo

esto nos causó alegría / incomodidad.

posibles usos futuros que sean positivos, o negativos, o sociales, o personales.

agregar dimensión ética.
