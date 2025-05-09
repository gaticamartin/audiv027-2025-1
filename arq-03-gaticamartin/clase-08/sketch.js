let startTime;     
let running = false;  
let elapsed = 0;   

let timerColor;

let countdownActive = false;
let countdownStartTime;
let countdownDuration = 3000; // = 3 segundos

let video;

function setup() {
  createCanvas(414, 414); 
  textAlign(CENTER, BOTTOM); 
  textFont('Verdana');
  textSize(18);

  timerColor = color(0); //Negro

  //Activar cámara
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); //??
}

function draw() {
  //mirror camara
  push();
  translate(width, 0); //Mover derecha
  scale(-1, 1);         //Invertir horizontalmente
  image(video, 0, 0, width, height);
  pop();                //??

  if (countdownActive) {
    let countdownElapsed = millis() - countdownStartTime;
    let remaining = ceil((countdownDuration - countdownElapsed) / 1000);

    fill(255, 0, 0);
    textSize(18); //deberia ser mas grande que el cronometro? quizas en BOLD(?)

    if (remaining > 0) {
      text(remaining, width / 2, height / 2);
    } else {
      text("¡GO!", width / 2, height / 2);
    }

    if (countdownElapsed >= countdownDuration) {
      countdownActive = false;
      running = true;
      startTime = millis() - elapsed;
      timerColor = color(255, 0, 0);
    }

    return;
  }

  if (running) {
    elapsed = millis() - startTime;
  }

  let seconds = floor(elapsed / 1000);
  let minutes = floor(seconds / 60);
  seconds = seconds % 60;
  let milliseconds = floor((elapsed % 1000) / 10);

  let timerText = nf(minutes, 2) + ':' + nf(seconds, 2) + ':' + nf(milliseconds, 2);

  fill(timerColor);
  textSize(18);
  text(timerText, width / 2, height / 2); 
}

function keyPressed() {
  if (key === ' ') {
    if (!running && !countdownActive) {
      countdownActive = true;
      countdownStartTime = millis();
      timerColor = color(255, 0, 0); //Rojo desde la cuenta regresiva
    }
  } else if (key === 'p') {
    running = false;
    countdownActive = false;
    timerColor = color(0); //Negro al pausar
  } else if (key === 'c') {
    running = false;
    elapsed = 0;
    countdownActive = false;
    timerColor = color(0); //Negro al reiniciar
  }
}