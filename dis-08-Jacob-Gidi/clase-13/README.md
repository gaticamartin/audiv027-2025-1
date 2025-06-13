# clase-13

# Juego de las serpientes traducidos.

// La serpiente se mueve a lo largo de una cuadrícula, un espacio a la vez.
// La cuadrícula es más pequeña que el lienzo y sus dimensiones
// se almacenan en estas variables.
let gridWidth = 30;
let gridHeight = 30;

let gameStarted = false;

//¿Con cuántos segmentos comienza la serpiente?
let startingSegments = 2;

// Coordenadas iniciales para el primer segmento
let xStart = 0;
let yStart = 15;

// Dirección inicial del movimiento
let startDirection = 'right';

// Dirección actual del movimiento
let direction = startDirection;

// La serpiente se divide en pequeños segmentos,
// almacenados como vectores en esta matriz
let segments = [];

let score = 0;
let highScore;

// La posición de la fruta se almacena como un vector
// en esta variable
let fruit;

function setup() {
  createCanvas(500, 500);

  // Ajusta la velocidad de cuadros para establecer la velocidad de movimiento
  frameRate(10);

  textAlign(CENTER, CENTER);
  textSize(2);

  // Verificar la puntuación más alta guardada en el almacenamiento local del navegador.
  // Si no se ha almacenado ninguna puntuación, esta será indefinida.
  highScore = getItem('high score');

  describe(
    'A reproduction of the arcade game Snake, in which a snake, represented by a green line on a black background, is controlled by the arrow keys. Users move the snake toward a fruit, represented by a red dot, but the snake must not hit the sides of the window or itself.'
  );
}

function draw() {
  background(0);

  // Establezca la escala para que la cuadrícula del juego llene el lienzo
  scale(width / gridWidth, height / gridHeight);
  if (gameStarted === false) {
    showStartScreen();
  } else {
    // Desplázate para que la serpiente y la fruta sigan en la pantalla.
    // cuando sus coordenadas sean 0.
    translate(0.5, 0.5);
    showFruit();
    showSegments();
    updateSegments();
    checkForCollision();
    checkForFruit();
  }
}

function showStartScreen() {
  noStroke();
  fill(32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 10, 2);
  fill(255);
  text(
    'Click to play.\nUse arrow keys to move.',
    gridWidth / 2,
    gridHeight / 2
  );
  noLoop();
}

function mousePressed() {
  if (gameStarted === false) {
    startGame();
  }
}

function startGame() {
  //Coloca la fruta en un lugar aleatorio
  updateFruitCoordinates();

  // Comience con una matriz vacía para los segmentos
  segments = [];

  // Comienza con x en la posición inicial y repite hasta que se especifique.
  // Se ha creado el número de segmentos, aumentando x en 1 cada vez.
  for (let x = xStart; x < xStart + startingSegments; x += 1) {
    // Crea un nuevo vector en la posición actual
    let segmentPosition = createVector(x, yStart);

    // Agregarlo al principio de la matriz
    segments.unshift(segmentPosition);
  }

  direction = startDirection;
  score = 0;
  gameStarted = true;
  loop();
}

function showFruit() {
  stroke(255, 64, 32);
  point(fruit.x, fruit.y);
}

function showSegments() {
  noFill();
  stroke(96, 255, 64);
  beginShape();
  for (let segment of segments) {
    vertex(segment.x, segment.y);
  }
  endShape();
}

function updateSegments() {
  // Eliminar el último segmento
  segments.pop();

  // Copiar la cabeza actual de la serpiente
  let head = segments[0].copy();

  // Inserta la nueva cabeza de serpiente al principio de la matriz
  segments.unshift(head);

  // Ajusta la posición del cabezal según la dirección actual
  switch (direction) {
    case 'right':
      head.x = head.x + 1;
      break;
    case 'up':
      head.y = head.y - 1;
      break;
    case 'left':
      head.x = head.x - 1;
      break;
    case 'down':
      head.y = head.y + 1;
      break;
  }
}

function checkForCollision() {
  // Almacena el primer segmento en la matriz como encabezado
  let head = segments[0];

  // Si la cabeza de la serpiente...
  if (
    // golpear el borde derecho o
    head.x >= gridWidth ||
    // golpear el borde izquierdo o
    head.x < 0 ||
    // golpear el borde inferior o
    head.y >= gridHeight ||
    // hit top edge or
    head.y < 0 ||
    // Chocó consigo mismo
    selfColliding() === true
  ) {
    // mostrar pantalla de fin de juego
    gameOver();
  }
}

function gameOver() {
  noStroke();
  fill(32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 12, 2);
  fill(255);

  // Establecer la puntuación más alta como la mayor: la puntuación actual o la anterior.
  // Puntuación más alta
  highScore = max(score, highScore);

  // Guarda la puntuación más alta en el almacenamiento local. Esto se guardará en el navegador.
  // datos, incluso después de que el usuario vuelva a cargar la página.
  storeItem('high score', highScore);
  text(
    `Game over!
Your score: ${score}
High score: ${highScore}
Click to play again.`,
    gridWidth / 2,
    gridHeight / 2
  );
  gameStarted = false;
  noLoop();
}

function selfColliding() {
  // Almacena el último segmento como encabezado
  let head = segments[0];

  // Almacena todos los segmentos excepto el primero
  let segmentsAfterHead = segments.slice(1);

  // Verifique cada uno de los otros segmentos
  for (let segment of segmentsAfterHead) {
    // Si el segmento está en el mismo lugar que la cabeza
    if (segment.equals(head) === true) {
      return true;
    }
  }
  return false;
}

function checkForFruit() {
  // Almacenar el primer segmento como encabezado
  let head = segments[0];

  // Si el segmento de la cabeza está en el mismo lugar que la fruta
  if (head.equals(fruit) === true) {
    // Give player a point
    score = score + 1;

    // Duplicar el segmento de cola
    let tail = segments[segments.length - 1];
    let newSegment = tail.copy();

    // Coloque el duplicado al principio del array
    segments.push(newSegment);

    // Restablecer la fruta a una nueva ubicación
    updateFruitCoordinates();
  }
}

function updateFruitCoordinates() {
  // Elige una nueva coordenada aleatoria para la fruta
  // y redondéala hacia abajo usando floor().
  // Dado que los segmentos se mueven en incrementos de 1,
  // para que la serpiente llegue a la misma posición
  // que la fruta, las coordenadas de la fruta deben ser
  // enteros, pero random() devuelve un valor de punto flotante.
  let x = floor(random(gridWidth));
  let y = floor(random(gridHeight));
  fruit = createVector(x, y);
}

// Cuando se presiona una tecla de flecha, cambia la dirección de movimiento de la serpiente,
// pero si la serpiente ya se está moviendo en la dirección opuesta,
// no hace nada.
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case RIGHT_ARROW:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case UP_ARROW:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case DOWN_ARROW:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }
}
