# clase-08

no hay clase por interferiado.

## bitácora de proceso
no hay clase por interferiado.

## bitácora de proceso

cambiamos la idea original del proyecto, puesto que nos pareció más atractivo hacer un filtro que cambiara los accesorios cada vez que la persona parpadee
primera visualización del código (carpeta sketch.js):

let video;
let poseNet;
let poses = [];
let accesorios = [];
let accesorioActual = 0;
let prevEyeDist = null;
let blinkThreshold = 4;
let blinkCooldown = 0;

function preload() {
  accesorios.push(loadImage('piercing.png'));   // piercing para la ceja
  accesorios.push(loadImage('bow.png'));        // moño para el pelo
  accesorios.push(loadImage('earrings.png'));   // aro para la oreja
  accesorios.push(loadImage('glitters.png'));   // brillos para los ojos
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
  });

  createP('Estado del modelo:').id('status-label');
  createP('Cargando...').id('status');
}

function modelReady() {
  select('#status').html('¡Modelo cargado!');
}

function draw() {
  image(video, 0, 0, width, height);
  detectarParpadeo();
  dibujarAccesorio();
  if (blinkCooldown > 0) blinkCooldown--;
}

function getDistance(p1, p2) {
  return dist(p1.x, p1.y, p2.x, p2.y);
}

function detectarParpadeo() {
  if (poses.length > 0) {
    let pose = poses[0].pose;
    let leftEye = pose.leftEye;
    let leftEar = pose.leftEar;

    if (leftEye && leftEar) {
      let eyeDist = getDistance(leftEye, leftEar);
      if (prevEyeDist !== null) {
        let cambio = abs(eyeDist - prevEyeDist);
        if (cambio > blinkThreshold && blinkCooldown === 0) {
          accesorioActual = floor(random(accesorios.length));
          blinkCooldown = 15;
        }
      }
      prevEyeDist = eyeDist;
    }
  }
}

function dibujarAccesorio() {
  if (poses.length > 0) {
    let pose = poses[0].pose;
    let acc = accesorios[accesorioActual];

    switch (accesorioActual) {
      case 0: // piercing en la ceja
        if (pose.leftEye) {
          image(acc, pose.leftEye.x - 10, pose.leftEye.y - 20, 20, 20);
        }
        break;
      case 1: // moño en el pelo
        if (pose.leftEye && pose.rightEye) {
          let x = (pose.leftEye.x + pose.rightEye.x) / 2;
          let y = (pose.leftEye.y + pose.rightEye.y) / 2;
          image(acc, x - 30, y - 80, 60, 40);
        }
        break;
      case 2: // aro en oreja izquierda
        if (pose.leftEar) {
          image(acc, pose.leftEar.x - 10, pose.leftEar.y, 25, 25);
        }
        break;
      case 3: // brillos para los ojos
        if (pose.leftEye && pose.rightEye) {
          let x = (pose.leftEye.x + pose.rightEye.x) / 2;
          let y = (pose.leftEye.y + pose.rightEye.y) / 2;
          image(acc, x - 15, y - 10, 30, 30);
        }
        break;
    }
  }
}

al ponerlo a prueba nos dimos cuenta que en lugar de cambiar el filtro cuando parpadeamos, cambia de accesorios al mover la cabeza, mejoraremos esto en las próximas versiones del código
