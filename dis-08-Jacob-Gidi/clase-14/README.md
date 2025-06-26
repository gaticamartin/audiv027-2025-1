# clase-14

# Serpiente arcoiris

Mi proyecto final se trata de hacer un juego de la serpiente que se mueve mediante los movimientos de la mano mediante la punta de los dedos. 

![Drawing Lines](https://github.com/user-attachments/assets/bfba8557-0657-4211-955a-cbef42a86163)

![Snake Game](https://github.com/user-attachments/assets/f5975d47-e974-4cfb-966f-1f9152a2dd2d)

Mi programa base sería el juego original de la serpiente combinado a uno llamado Drawing Lines, el cual concibió a la serpiente pintada, donde la serpiente cambia de color al moverse.  

# Serpiente Pintada

let gridWidth = 30;
let gridHeight = 30;

let gameStarted = false;
let startingSegments = 5;
let xStart = 0;
let yStart = 15;
let startDirection = 'right';
let direction = startDirection;

let segments = [];
let score = 0;
let highScore;
let fruit;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB); // ← color en modo HSB
  frameRate(10);
  textAlign(CENTER, CENTER);
  textSize(2);
  highScore = getItem('high score');
}

function draw() {
  background(0);
  scale(width / gridWidth, height / gridHeight);

  if (!gameStarted) {
    showStartScreen();
  } else {
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
  text('Click to play.\nUse arrow keys to move.', gridWidth / 2, gridHeight / 2);
  noLoop();
}

function mousePressed() {
  if (!gameStarted) {
    startGame();
  }
}

function startGame() {
  updateFruitCoordinates();
  segments = [];

  for (let x = xStart; x < xStart + startingSegments; x += 1) {
    let segmentPosition = createVector(x, yStart);
    segments.unshift(segmentPosition);
  }

  direction = startDirection;
  score = 0;
  gameStarted = true;
  loop();
}

function showFruit() {
  stroke(0, 100, 100); // rojo en HSB
  point(fruit.x, fruit.y);
}

function showSegments() {
  noFill();
  strokeWeight(1.2);
  beginShape();
  for (let segment of segments) {
    // Color dinámico según posición tipo línea de color
    let hueVal = ((segment.x * 10) - (segment.y * 10)) % 360;
    if (hueVal < 0) hueVal += 360; // asegurar que no sea negativo
    stroke(hueVal, 100, 100);
    vertex(segment.x, segment.y);
  }
  endShape();
}

function updateSegments() {
  segments.pop();
  let head = segments[0].copy();
  segments.unshift(head);

  switch (direction) {
    case 'right':
      head.x += 1;
      break;
    case 'up':
      head.y -= 1;
      break;
    case 'left':
      head.x -= 1;
      break;
    case 'down':
      head.y += 1;
      break;
  }
}

function checkForCollision() {
  let head = segments[0];
  if (
    head.x >= gridWidth || head.x < 0 ||
    head.y >= gridHeight || head.y < 0 ||
    selfColliding()
  ) {
    gameOver();
  }
}

function gameOver() {
  noStroke();
  fill(32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 12, 2);
  fill(255);
  highScore = max(score, highScore);
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
  let head = segments[0];
  let rest = segments.slice(1);
  for (let segment of rest) {
    if (segment.equals(head)) {
      return true;
    }
  }
  return false;
}

function checkForFruit() {
  let head = segments[0];
  if (head.equals(fruit)) {
    score++;
    let tail = segments[segments.length - 1];
    let newSegment = tail.copy();
    segments.push(newSegment);
    updateFruitCoordinates();
  }
}

function updateFruitCoordinates() {
  fruit = createVector(floor(random(gridWidth)), floor(random(gridHeight)));
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      if (direction !== 'right') direction = 'left';
      break;
    case RIGHT_ARROW:
      if (direction !== 'left') direction = 'right';
      break;
    case UP_ARROW:
      if (direction !== 'down') direction = 'up';
      break;
    case DOWN_ARROW:
      if (direction !== 'up') direction = 'down';
      break;
  }
}



https://github.com/user-attachments/assets/f23b24b2-01eb-4004-a9e7-8082caae8a88


Esta seria mi primera fase para el trabajo final.

# Movimiento indicado por la mano.


https://github.com/user-attachments/assets/5a91bf70-0606-47a8-b66e-29679517afdf



Para la siguiente parte busque en varias paginas como en ml5js para ayudarme en hacer otro programa donde se pueda identificar las manos y en qué dirección apunta (arriba, abajo, izquierda y derecha). Con el fin de combinar este programa para que reemplace a la parte del programa donde la serpiente es controlada por el teclado por la detección de dirección de la mano. Otro detalle del programa es que desactive la función de mostrar lo que ve la cámara, ya que al momento de juntarla con Serpiente Pintada solo estorbaría.

# Otras ideas descartadas.

Durante el proceso se me ocurrió un par de ideas de como hacer mover la serpiente. Estas fueron los otros intentos.
1.	Movimiento con un solo dedo.
2.	Movimiento con la Voz.
Ninguno funciono muy bien ya que siempre la serpiente se termina confusa o no reaccionaba a tiempo de la orden.


https://github.com/user-attachments/assets/48830712-705a-4d54-b6ce-1c492f17389e

