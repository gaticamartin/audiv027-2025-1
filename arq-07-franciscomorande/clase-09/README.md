# clase-09

viernes 09 mayo 2025

## AyudaAMontoya

integrantes:

* [Benjamin Gonzalez](https://github.com/FAU-UChile/audiv027-2025-1/tree/main/arq-05-BenjaminGonzalezFAU)
* [Ignacia aa](https://github.com/FAU-UChile/audiv027-2025-1/tree/main/arq-09-IgnaciaUch)
* [Francisco Morande](https://github.com/FAU-UChile/audiv027-2025-1/tree/main/arq-07-franciscomorande)

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

![Screenshot 2025-05-08 160113](https://github.com/user-attachments/assets/2182f413-45ed-47cd-b9e9-a984d70642d2)


Una vez teniendo esta variable, se crea un “if” (en lugar del boolean), el cual en el caso de que la posición del mouse en la variable sea menor al radio del círculo respecto a su centro, está activaría la segunda función de generar un nuevo círculo.



https://github.com/user-attachments/assets/9d811475-a153-4197-9749-78729df357d8



Una vez resuelta la colisión entre mouse y círculo generado, el siguiente paso a trabajar sería en implementar el hitbox a la detección del dedo índice en lugar del mouse. Para esto, dentro de la variable de distancia se cambian las coordenadas del mouse por las del lerp siendo estas las siguientes coordenadas: smoothedX, smoothedY, posición del círculo X, posición del círculo Y. 



https://github.com/user-attachments/assets/04484ba4-faa6-4318-9e2e-e8b55211a908



### Ensamblaje y ambientación de mundo

Aquí es donde empezamos a ensamblar el juego, combinando todos los elementos. Una vez terminado se comienza con la ambientación de mundo, colocando de fondo el titanic de la FAU y al círculo se le coloca un mask para reemplazar el color de relleno por la sala de clases G35

![Screenshot 2025-05-08 162327](https://github.com/user-attachments/assets/be6744c2-aca8-4770-88a1-b6594abe440d)



https://github.com/user-attachments/assets/70c423a9-a128-4189-b75e-f205b4125d98



### Pantalla de inicio y sistema de puntaje


aaa






## [enlace del proyecto](https://editor.p5js.org/Ignacia/full/dxyMKBXck)

Projecto realizado en lenguaje JavaScript, mediante el editor de p5.js en version v1.10.0

## [código del proyecto](https://editor.p5js.org/Ignacia/sketches/dxyMKBXck)
<details>
    
    //Configuración del moviemiento de las imagenes en la pantalla de inicio by Coding Adventures
    let config = {
    x: 50,
    y: 50,
    //Eje de movimiento de los profes en la pantalla inicial
    w: 540,
    h: 370,
    //Cantidad de profes
    noBalls: 22,
    firstX: 0,
    //Velocidad de movimiento del profe
    speed: 2
    };

    //Imagen que reemplaza a las balls (inicio)
    let img;      
    //Imagen que sigue al dedo índice
    let dedoImg;     
    //Imagen objetivo en el juego
    let salaG35;     
    //Fondo durante el juego
    let titanic;     

    //Modelo base sacado de "Index Finger draw" by re71
    let handPose;
    let video;
    let hands = [];

    //Let brushes = []; //for the trace of the brush

    //Coordenadas suavizadas del dedo índice
    let smoothedX = 0;
    let smoothedY = 0;

    //Posicion del circulo
    let circleX, circleY;
    let circleRadius = 70;

    //Estado del juego
    let gameState = 'inicio'; 

    //Temporizador inicial
    let tiempoInicio;
    let tiempoRestante = 10; 
    let puntos = 0;

    function preload() {
    handPose = ml5.handPose();
    img = loadImage("profesonriendo.png"); 
    dedoImg = loadImage("profesonriendo.png");
    salaG35 = loadImage("salaG35.png"); 
    titanic = loadImage("titanic.png");
    }

    function setup() {
    createCanvas(640, 480);
    //Generar circulo
    generateNewCircle();
    //Generar captura de pantalla y ocultarla
    video = createCapture(VIDEO);
    video.size(640, 480);
    //Ocultamos video
    video.hide();

    //Comenzar a detectar los puntos de las manos
    handPose.detectStart(video, gotHands);

    // noStroke();
  
    //Detectar manos de forma periodica (cada 100 ms)
    setInterval(() => {
    handPose.detect(video, gotHands);
    }, 100);
  
    //Guardar tiempo de inicio *
    tiempoInicio = millis(); 
    }

    function gotHands(results) {
    hands = results;
    }

    function draw() {
    if (gameState === 'inicio') {
    mostrarPantallaInicio();

    let tiempoActual = millis();
    tiempoRestante = 10 - int((tiempoActual - tiempoInicio) / 1000);

    fill(255);
    textSize(15);
    textAlign(CENTER);
    text("El juego comenzará en: " + tiempoRestante, width / 2, height - 120);

    if (tiempoRestante <= 0) {
      gameState = 'juego';
    }
      }

    else if (gameState === 'juego') {
    jugar();
    }
    }


    //Modelo base de la pantalla de inicio de "codeguppy" by Coding Adventures
    //Pantalla de inicio

    function mostrarPantallaInicio() {
    background('black');

    update();
    display();

    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Con tu dedo, ", width / 2, height / 2 + 10);
    text("Lleva a Montoya a la sala G35", width / 2, height / 2 + 40);
  
    fill("white");
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Ayuda a Montoya", width / 2, height / 2 - 60);
    }

    function update() {
    let w = (config.w + config.h) * 2;
    config.firstX = (config.firstX + config.speed) % w;
    }

    //Cara profe 
    function display() {
    noStroke();
    for (let i = 0; i < config.noBalls; i++) {
    displayBall(i);
    }
    }

    function displayBall(noBall) {
    let space = (config.w + config.h) * 2 / config.noBalls;
    let ballX = config.firstX + noBall * space;
    let o = linearToRect(ballX, config.x, config.y, config.w, config.h);

    imageMode(CENTER);
    image(img, o.x, o.y, 60, 60);
    }

    //Trayectoria/Movimiento de la cara del profe
      function linearToRect(linearX, rectX, rectY, rectW, rectH) {
    let w = (rectW + rectH) * 2;
    linearX = linearX % w;

    if (linearX <= rectW)
    return { x: rectX + linearX, y: rectY };
    if (linearX <= rectW + rectH)
    return { x: rectX + rectW, y: rectY + linearX - rectW };
    if (linearX <= 2 * rectW + rectH)
    return { x: rectX + rectW - (linearX - rectH - rectW), y: rectY + rectH };
      return { x: rectX, y: rectY + rectH - (linearX - 2 * rectW - rectH) };
                }

    //Juego principal

    function jugar() {
    background(0);
    image(titanic, 320, 240, width, height);

    push(); //Modo espejo a la cámara **
    //Aplicar modo espejo a la cámara 
    translate(width, 0);
    scale(-1, 1);

    // image(video, 0, 0, width, height);
    // for (let everything of brushes) {
    //  fill(everything.c);
    //  circle(everything.x, everything.y, 20);
  
    //Comenzamos a detectar las manos
    if (hands.length > 0) {
    //Usamos solo la primera mano detectada
    let hand = hands[0];
    for (let keypoint of hand.keypoints) {
      //Buscamos el nombre "index_finger_tip" (ounta del dedo índice)
      if (keypoint.name === "index_finger_tip") {
        //Usamos "lerp" para suevizar el movimiento (evita saltos y vibraciones)
        smoothedX = lerp(smoothedX, keypoint.x, 0.2);
        smoothedY = lerp(smoothedY, keypoint.y, 0.2);

        //Imagen profesor encima
        imageMode(CENTER);
        image(dedoImg, smoothedX, smoothedY, 80, 80);
      }
    }
    }

    pop(); //Fin del modo espejo **

    //Sala G35 sin reflejo
    if (salaG35) {
    imageMode(CENTER);
    image(salaG35, circleX, circleY);
    }

    //=== DETECCIÓN DE COLISIÓN (calculada usando coordenadas reflejadas) === **
    //Como el dedo está en espejo, debemos reflejar smoothedX para comparar correctamente
    let mirroredX = width - smoothedX; //Reflejo horizontal
    // d = distancia del mouse al centro del circulo
    let d = dist(mirroredX, smoothedY, circleX, circleY);
    //Si la distancia del mouse al centro del circulo es menor que su radio, estonces se genera un nuevo circulo
    if (d < circleRadius) {
    puntos++;
    generateNewCircle();
    }

    //Puntuación dentro del juego
    fill("black");
    textSize(25);
    textAlign(LEFT, TOP);
    text("Puntos: " + puntos, 10, 10);
    }

    function generateNewCircle() {
    circleX = random(circleRadius, width - circleRadius);
    circleY = random(circleRadius, height - circleRadius);

    //Se crea un mask para el circulo
    let pgMask = createGraphics(circleRadius * 2, circleRadius * 2);
    pgMask.ellipse(circleRadius, circleRadius, circleRadius * 2);

    //La imagen toma el tamaño del circulo
    let imgCopy = salaG35.get();
        imgCopy.resize(circleRadius * 2, circleRadius * 2);
            imgCopy.mask(pgMask);

    //Se gusrda el mask
    salaG35 = imgCopy;
    }

</details>

## Reparticion de trabajo
El trabajo fue repartido en tres distintas partes siendo:
1. Deteccion y optimizacion del dedo indice
2. Generacion y colision del dedo indice con los circulos
3. Interface y ambientacion de mundo del juego

Una vez finalizado se ensamblan las partes
   
## bibliografía

nos basamos en el tutorial de INSERTARLINK

tomamos el código base alojado en INSERTARLINK

* Usamos la biblioteca p5.js v1.10.0. para hacer el código del proyecto, buscando ejemplos y/o referencias para el correcto funcionamiento; y la biblioteca ml5.js, sobre todo las secciones:
1. [ml5js HandPose](https://docs.ml5js.org/#/reference/handpose)
2. [p5js Mask](https://p5js.org/reference/p5.Image/mask/)
3. [p5js circle](https://p5js.org/reference/p5/circle/)

* Tambien inspiramos el codigo en el juego [Circle Clicker](https://p5js.org/examples/games-circle-clicker/)

* El código usado para la primera fase de detección es ["HandPose-Draw with Index Finger" by re7l](https://editor.p5js.org/re7l/sketches/pd-SZ8lfA)
  
* Dentro de otras fuentes de informacion nos basamos en proyectos vistos en clases como lo fue el de Don Francisco (if/boolean) y tambien en preguntas realizadas en clases (colision de los circulos)

## conclusiones

la IA sirve para X, pero no sirve para Y.

esto nos pareció adecuado, esto nos pareción exclusivo

esto nos causó alegría / incomodidad.

posibles usos futuros que sean positivos, o negativos, o sociales, o personales.

agregar dimensión ética.
