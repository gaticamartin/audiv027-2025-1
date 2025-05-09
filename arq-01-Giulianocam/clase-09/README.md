# clase-09

viernes 09 mayo 2025

## Arbitro para ver quien pestañea primero

integrantes:

* Martin Gatica <https://github.com/FAU-UChile/audiv027-2025-1/tree/main/arq-03-gaticamartin>
* Jacob Gidi <https://github.com/FAU-UChile/audiv027-2025-1/tree/main/dis-08-Jacob-Gidi>

```md
mi equipo de trabajo es <https://github.com/FAU-UChile/audiv027-2025-1/tree/main/arq-03-gaticamartin> y <https://github.com/FAU-UChile/audiv027-2025-1/tree/main/dis-08-Jacob-Gidi>, entregamos en el repositorio en este enlace <https://github.com/ETC>.
```

## acerca del proyecto

Nuestro proyecto es una IA que actue de juez para el juego de "Quien pestañea primero". Entre un maximo de 2 jugadores deben colocarse en frente a la camara en donde el programa cronometrara cuanto tiempo estubo cada jugador sin pestañear y cual ha logrado un mayor tiempo, dandolo como ganador.

### esta IA debe ser capas de:

-distinguir los rostros y rastrear los puntos claves alrededor de los ojos.

-identificar el cierre de los ojos para determinar si alguno de los participanes ha pestañeado.

-contar con 3 estados: el primero de default, donde se preparan los jugadores y se da la señal para el comienzo, el segundo ya comenzado el juego donde se 
 cronometre el tiempo de duracion hasta detectar un cierre de los ojos, y el tercero al cual se accede al ocurrir un cierre de ojos y donde se muestre el tiempo 
 tiempo cronometrado asi como tambien permita volver a el segundo estado para reestablecer el juego.

-cronometrar ambos rostros detectados simultaneamente, pero tambien de manera independiente.

### Herramientas utilizadas

Para desarrollar este proyecto se ocupo como base el modelo "FaceMesh" de "Ml5.js" debido a la capacidad de identificar los keypoints requeridos para este proyecto, setear el numero de rostros a analizar, y tambien poder adaptar la sensibilidad en el seguimiento de los keypoints claves. 

Ademas se utilizaron repositorio de informacion sobre el lenguaje javascript, tales como <https://www.w3schools.com/js/default.asp>, <https://p5js.org/reference/>, y <https://docs.ml5js.org/#/reference/facemesh>.

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
Deteccion de multiples rostros.

![foto3_estado2](https://github.com/user-attachments/assets/20f6f448-7eb6-4b3c-9362-45527bb86b37)
Estado 2, cronometros corriendo hasta que se detecte el cierre de un ojo.

![foto4_estado2_1cronometro_detenido](https://github.com/user-attachments/assets/866afd0e-a274-4930-8250-b49b992609e6)
Cronometros independientes permiten que uno siga corriendo mientras el otro ya se ha detenido.

![foto5_estado3](https://github.com/user-attachments/assets/2b5159f7-37c4-45a7-8147-51817462dc74)
Estado 3, tiempos finales permiten dar con el ganador.

Uno de los problemas que enfrentamos durante el desarrollo de este programa fue el de la capacidad computacional, ya que al ser el pestañeo un acto tan rapido, el procesamiento de los frames de una manera aletargada permitia pestañar sin que el programa alcanzara a detectarlo. esto es posible solucionarlo con mayor capacidad de computacion o un codigo mas eficiente (eliminando datos no utilizados, como por ejemplo keypoints del resto de la cara que no sean los ojos).
Otro problema identificado fue el como hacer que los cronometros funcionaran independientemente, ya que tambien existia la opcion de desarrollar solamente un cronometro general, esta solucion es mas simple pero a la ves limita la capacidad del codigo de ser expandido como por ejemplo agregando mas jugadores (solamente se experimento con maximo 2)

## bibliografía

tomamos el código base alojado en <https://editor.p5js.org/ml5/sketches/lCurUW1TT>

usamos la biblioteca ml5.js <https://docs.ml5js.org/#/reference/facemesh>

## conclusiones

la IA sirve para X, pero no sirve para Y.

esto nos pareció adecuado, esto nos pareción exclusivo

esto nos causó alegría / incomodidad.

posibles usos futuros que sean positivos, o negativos, o sociales, o personales.

agregar dimensión ética.
