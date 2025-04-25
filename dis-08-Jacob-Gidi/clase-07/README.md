# clase-07
# clase-07

viernes 25 abril 2025

## instrucciones de proyecto-01

- se empieza hoy
- se presenta y entrega en dos semanas, el viernes 09 de mayo 2025
- la entrega es vía GitHub, en tu fork
- si hay un commit posterior, no se tomará en cuenta
- el proyecto es en grupos de 2 o 3 personas, no más ni menos
- el proyecto se hace con la tecnología que ustedes quieran
- el proyecto se presenta en clases, mostrando los contenidos de la entrega en GitHub
- el proyecto es sobre lo que hemos visto en clases, posibles formatos conversados en clase:
  - tutoriales y adaptaciones de Teachable Machine
  - expansiones de obra de artistas como Andreas Refsgaard
  - contribuciones al proyecto ml5.js
  - etc :)

## pauta

el trabajo tiene nota máxima 7.0, tienen 1 punto base más estos 6 puntos evaluados, 1 punto por cada uno:

1. 1 punto por aspectos formales: subir los archivos indicados en la carpeta correcta con los nombres correctos, sin errores de sintaxis, sin errores de ortografía y redacción, con bibliografía de referentes, tutoriales y código usado incluyendo sus versiones.
2. 1 punto por instrucciones de uso en lenguaje MarkDown en tu archivo README.md sobre el funcionamiento de tu proyecto y tu investigación, para un público no experto en inteligencia artificial.
3. 1 punto por orden y comentarios del código, incluyendo la distinción entre código que importas o citas, y tus propios avances y propuestas.
4. 1 punto por documentación multimedia de tu proyecto, incluyendo imágenes, videos, capturas de pantalla y lo necesario para entender lo que hiciste.
5. 1 punto por texto de conclusiones sobre tu trabajo e investigación, incluyendo comentarios sobre ética, callejones sin salida a los que llegaste y la manera en que se repartieron el trabajo.
6. 1 punto por la presentación oral, por el cuidado en la propuesta de su discurso, porque toda la gente del grupo llegue y presente alguna sección de la presentación.

la pauta es:

- 1.0 si el aspecto está realizado impecablemente
- 0.7 si tiene errores menores
- 0.5 si está incompleto o tiene errores mayores
- 0.3 por el intento
- 0.0 por la ausencia

## requisitos formales de la entrega

- subir a tu carpeta, desde hoy en adelante, proceso progresivo del proyecto.
- variables y archivos sin espacios, en camelCase o notación camello
- los comentarios se escriben en la línea de arriba del código
- los comentarios se escriben en español
- la entrega se puede concentrar en un README.md por equipo, siempre y cuando el resto del equipo incluya enlaces al perfil de ese colega, del estilo

pueden subir todo en una de las bitácoras de los integrantes, concentrarlo todo ahí, y en las otras en vez de copiarlo o que esté en blanco, algo de este estilo:

```md
mi equipo de trabajo es <https://github.com/NOMBRE> y <https://github.com/NOMBRE>, entregamos en el repositorio en este enlace <https://github.com/ETC>.
```


## las ideas planteadas para el proyecto

- Un juego de serpientes y escaleras donde la serpiente se mueve con la mano.
- Crear un escenario mediante figuras geometricas 3d

## Codigo de serpiente para P5JS

// The snake moves along a grid, one space at a time
// The grid is smaller than the canvas, and its dimensions
//  are stored in these variables
let gridWidth = 30;
let gridHeight = 30;

let gameStarted = false;

// How many segments snake starts with
let startingSegments = 10;

// Starting coordinates for first segment
let xStart = 0;
let yStart = 15;

// Starting direction of motion
let startDirection = 'right';

// Current direction of motion
let direction = startDirection;

// The snake is divided into small segments,
// stored as vectors in this array
let segments = [];

let score = 0;
let highScore;

// The fruit's position is stored as a vector
// in this variable
let fruit;

function setup() {
  createCanvas(500, 500);

  // Adjust frame rate to set movement speed
  frameRate(10);

  textAlign(CENTER, CENTER);
  textSize(2);

  // Check for saved high score in local browser storage
  // If no score has been stored, this will be undefined
  highScore = getItem('high score');

  describe(
    'A reproduction of the arcade game Snake, in which a snake, represented by a green line on a black background, is controlled by the arrow keys. Users move the snake toward a fruit, represented by a red dot, but the snake must not hit the sides of the window or itself.'
  );
}

function draw() {
  background(0);

  // Set scale so that the game grid fills canvas
  scale(width / gridWidth, height / gridHeight);
  if (gameStarted === false) {
    showStartScreen();
  } else {
    // Shift over so that snake and fruit are still on screen
    // when their coordinates are 0
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
  // Put the fruit in a random place
  updateFruitCoordinates();

  // Start with an empty array for segments
  segments = [];

  // Start with x at the starting position and repeat until specified
  // number of segments have been created, increasing x by 1 each time
  for (let x = xStart; x < xStart + startingSegments; x += 1) {
    // Create a new vector at the current position
    let segmentPosition = createVector(x, yStart);

    // Add it to the beginning of the array
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
  // Remove last segment
  segments.pop();

  // Copy current head of snake
  let head = segments[0].copy();

  // Insert the new snake head at the beginning of the array
  segments.unshift(head);

  // Adjust the head's position based on the current direction
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
  // Store first segment in array as head
  let head = segments[0];

  // If snake's head...
  if (
    // hit right edge or
    head.x >= gridWidth ||
    // hit left edge or
    head.x < 0 ||
    // hit bottom edge or
    head.y >= gridHeight ||
    // hit top edge or
    head.y < 0 ||
    // collided with itself
    selfColliding() === true
  ) {
    // show game over screen
    gameOver();
  }
}

function gameOver() {
  noStroke();
  fill(32);
  rect(2, gridHeight / 2 - 5, gridWidth - 4, 12, 2);
  fill(255);

  // Set high score to whichever is larger: current score or previous
  // high score
  highScore = max(score, highScore);

  // Put high score in local storage. This will be be stored in browser
  // data, even after the user reloads the page.
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
  // Store the last segment as head
  let head = segments[0];

  // Store every segment except the first
  let segmentsAfterHead = segments.slice(1);

  // Check each of the other segments
  for (let segment of segmentsAfterHead) {
    // If segment is in the same place as head
    if (segment.equals(head) === true) {
      return true;
    }
  }
  return false;
}

function checkForFruit() {
  // Store first segment as head
  let head = segments[0];

  // If the head segment is in the same place as the fruit
  if (head.equals(fruit) === true) {
    // Give player a point
    score = score + 1;

    // Duplicate the tail segment
    let tail = segments[segments.length - 1];
    let newSegment = tail.copy();

    // Put the duplicate in the beginning of the array
    segments.push(newSegment);

    // Reset fruit to a new location
    updateFruitCoordinates();
  }
}

function updateFruitCoordinates() {
  // Pick a random new coordinate for the fruit
  // and round it down using floor().
  // Because the segments move in increments of 1,
  // in order for the snake to hit the same position
  // as the fruit, the fruit's coordinates must be
  // integers, but random() returns a float
  let x = floor(random(gridWidth));
  let y = floor(random(gridHeight));
  fruit = createVector(x, y);
}

// When an arrow key is pressed, switch the snake's direction of movement,
// but if the snake is already moving in the opposite direction,
// do nothing.
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
