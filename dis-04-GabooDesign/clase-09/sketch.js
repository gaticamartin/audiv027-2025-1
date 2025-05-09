// Variables detección de rostro
let video;
let bodyPose;
let poses = [];
let faceTimer = 0;

let debug = false;
let playAudio;
let mirror = null;

// Variables para el efecto máquina de escribir
let texto = "";
let index = 0;
let estado = null;
let velocidad = 3;
let mensajeMostrado = false;
let fontSize = 24;

function preload() {
  // Cargar el modelo bodyPose
  bodyPose = ml5.bodyPose();

  // Cargar imagenes
  backText = loadImage("images/backText.png");
  selfieMonkey = loadImage("images/selfieMonkey.png");
  jajaja = loadImage("images/jajaja.png");
  punchCat = loadImage("images/punchCat.png");
  homerGun = loadImage("images/homerGun.png");
  disgusting = loadImage("images/disgusting.png");
  alarm = loadImage("images/alarm.png");
  blackCat = loadImage("images/blackCat.png");
  clown = loadImage("images/clown.png");
  baby = loadImage("images/baby.png");
  eagle = loadImage("images/eagle.png");
  bsod = loadImage("images/BSoD.png");
  brokenMirror = loadImage("images/brokenMirror.png");

  // Cargar audios
  talkSans = loadSound("sounds/0_talksans.mp3");
  huhCat = loadSound("sounds/1_huhcat.mp3");
  doorKnocking = loadSound("sounds/2_doorknocking.mp3");
  cameraFlash = loadSound("sounds/3_cameraflash.mp3");
  brotherEww = loadSound("sounds/4_brothereww.mp3");
  punch = loadSound("sounds/5_punch.mp3");
  shotgun = loadSound("sounds/6_shotgun.mp3");
  pewpew = loadSound("sounds/7_pewpew.mp3");
  bobDisgusting = loadSound("sounds/8_bobdisgusting.mp3");
  socialCredits = loadSound("sounds/9_socialcredits.mp3");
  goofySound = loadSound("sounds/10_goofysound.mp3");
  clownMusic = loadSound("sounds/11_clownmusic.mp3");
  metalPipe = loadSound("sounds/12_metalpipe.mp3");
  lagging = loadSound("sounds/13_lagging.mp3");
  buzzerError = loadSound("sounds/14_buzzererror.mp3");
  scream = loadSound("sounds/14_scream.mp3");
  error = loadSound("sounds/15_error.mp3");
  winXP = loadSound("sounds/16_WindowsXPBlueScreen.mp3");
  youAreAnIdiot = loadSound("sounds/17_you-are-an-idiot.mp3");
  breakingGlass = loadSound("sounds/breakingGlass.mp3");
}

function setup() {
  createCanvas(640, 480);

  // Crea el vídeo y lo oculta
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Comienza a detectar poses en el vídeo de la webcam
  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  // Muestra el video de la webcam
  image(video, 0, 0, width, height);

  // Desactiva la detección de la nariz cuando no está en pantalla
  let faceDetected = false;

  // Buscar la nariz en los puntos detectados
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    let nose = pose.keypoints.find((k) => k.name === "nose");
    if (nose && nose.confidence > 0.1) {
      faceDetected = true;
    }
  }

  // Aumenta el temporizador si la nariz está en pantalla (1 segundo = 60 cuadros)
  if (faceDetected) {
    if (frameCount % 60 === 0) {
      faceTimer++;
    }

    // Mostrar mensaje según el tiempo en pantalla
    if (faceTimer >= 10 && faceTimer < 12) {
      image(backText, 0, 0);
      escribirTexto("¡¿Qué haces aquí?!");
      mensajeMostrado = true;
    } else if (faceTimer >= 11 && faceTimer < 14) {
      image(backText, 0, 0);
      escribirTexto("¡Muevete!");
      mensajeMostrado = true;
    } else if (!playAudio && faceTimer === 15) {
      huhCat.play();
      playAudio = true;
    } else if (faceTimer === 16) {
      playAudio = false;
    } else if (faceTimer >= 25 && faceTimer < 26) {
      image(backText, 0, 0);
      escribirTexto("¡Oye!");
      mensajeMostrado = true;
    } else if (!playAudio && faceTimer === 26) {
      doorKnocking.play();
      playAudio = true;
    } else if (faceTimer >= 26 && faceTimer < 28) {
      image(backText, 0, 0);
      escribirTexto("Te llaman afuera");
      mensajeMostrado = true;
    } else if (faceTimer >= 28 && faceTimer < 30) {
      playAudio = false;
      image(backText, 0, 0);
      escribirTexto("¿Acaso no escuchas?");
      mensajeMostrado = true;
    } else if (!playAudio && faceTimer === 35) {
      cameraFlash.play();
      playAudio = true;
    } else if (faceTimer >= 35 && faceTimer < 36) {
      for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        let nose = pose.keypoints.find((k) => k.name === "nose");
        if (nose && nose.confidence > 0.1) {
          let x = nose.x;
          let y = nose.y;
          image(
            selfieMonkey,
            x - selfieMonkey.width / 2,
            y - selfieMonkey.height / 2
          );
        }
      }
    } else if (faceTimer === 36) {
      playAudio = false;
    } else if (!playAudio && faceTimer === 38) {
      youAreAnIdiot.play();
      playAudio = true;
    } else if (faceTimer === 39) {
      playAudio = false;
    } else if (faceTimer >= 38 && faceTimer < 43) {
      for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        let nose = pose.keypoints.find((k) => k.name === "nose");
        if (nose && nose.confidence > 0.1) {
          let x = nose.x;
          let y = nose.y;
          image(jajaja, x - jajaja.width / 2, y - jajaja.height / 2);
        }
      }
    } else if (!playAudio && faceTimer === 45) {
      buzzerError.play();
      playAudio = true;
    } else if (faceTimer === 46) {
      playAudio = false;
    } else if (!playAudio && faceTimer === 47) {
      punch.play();
      playAudio = true;
    } else if (faceTimer === 48) {
      playAudio = false;
    } else if (faceTimer >= 47 && faceTimer < 48) {
      for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        let nose = pose.keypoints.find((k) => k.name === "nose");
        if (nose && nose.confidence > 0.1) {
          let x = nose.x;
          let y = nose.y;
          image(punchCat, x - punchCat.width / 2, y - punchCat.height / 2);
        }
      }
    } else if (!playAudio && faceTimer === 49) {
      pewpew.play();
      playAudio = true;
    } else if (faceTimer === 50) {
      playAudio = false;
      pewpew.play();
    } else if (faceTimer >= 49 && faceTimer < 50) {
      image(
        homerGun,
        width / 2 - homerGun.width / 2,
        height / 2 - homerGun.height / 2
      );
    } else if (!playAudio && faceTimer === 53) {
      bobDisgusting.play();
      playAudio = true;
    } else if (faceTimer >= 53 && faceTimer < 56) {
      image(disgusting, 0, 0);
    } else if (faceTimer === 54) {
      playAudio = false;
    } else if (faceTimer >= 60 && faceTimer < 65) {
      image(backText, 0, 0);
      velocidad = 30;
      escribirTexto(".......");
      mensajeMostrado = true;
    } else if (faceTimer >= 65 && faceTimer < 67) {
      image(backText, 0, 0);
      velocidad = 10;
      escribirTexto("Vamos...");
      mensajeMostrado = true;
    } else if (faceTimer >= 67 && faceTimer < 69) {
      image(backText, 0, 0);
      velocidad = 5;
      fontSize = 40;
      escribirTexto("¡VETE!");
      mensajeMostrado = true;
    } else if (!playAudio && faceTimer === 69) {
      socialCredits.play();
      playAudio = true;
    } else if (faceTimer === 70) {
      playAudio = false;
    } else if (faceTimer >= 69 && faceTimer < 75 && faceTimer % 2 === 1) {
      image(alarm, 0, 0);
    } else if (!playAudio && faceTimer === 76) {
      goofySound.play();
      playAudio = true;
    } else if (faceTimer === 77) {
      playAudio = false;
    } else if (faceTimer >= 76 && faceTimer < 79) {
      for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        let nose = pose.keypoints.find((k) => k.name === "nose");
        if (nose && nose.confidence > 0.1) {
          let x = nose.x;
          let y = nose.y;
          image(blackCat, x - blackCat.width / 2, y - blackCat.height / 2);
        }
      }
    } else if (!playAudio && faceTimer === 81) {
      clownMusic.play();
      playAudio = true;
    } else if (faceTimer === 82) {
      playAudio = false;
    } else if (faceTimer >= 81 && faceTimer < 91) {
      for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        let nose = pose.keypoints.find((k) => k.name === "nose");
        if (nose && nose.confidence > 0.1) {
          let x = nose.x;
          let y = nose.y;
          image(clown, x - clown.width / 2, y - clown.height / 2 - 100);
        }
      }
    } else if (faceTimer >= 96 && faceTimer < 100) {
      image(backText, 0, 0);
      velocidad = 5;
      fontSize = 24;
      escribirTexto("Me caes mal...");
      mensajeMostrado = true;
    } else if (faceTimer >= 104 && faceTimer < 107) {
      image(backText, 0, 0);
      velocidad = 10;
      fontSize = 24;
      escribirTexto("¿Sabes qué?");
      mensajeMostrado = true;
    } else if (faceTimer >= 107 && faceTimer < 109) {
      image(backText, 0, 0);
      velocidad = 5;
      fontSize = 30;
      escribirTexto("¡Estoy harto!");
      mensajeMostrado = true;
    } else if (!playAudio && faceTimer === 109) {
      scream.play();
      playAudio = true;
    } else if (faceTimer === 111) {
      playAudio = false;
    } else if (faceTimer >= 109 && faceTimer < 112) {
      image(baby, width / 2 - baby.width / 2, height / 2 - baby.height / 2);
    } else if (!playAudio && faceTimer === 112) {
      lagging.play();
      playAudio = true;
    } else if (faceTimer === 113) {
      playAudio = false;
    } else if (!playAudio && faceTimer === 114) {
      error.play();
      playAudio = true;
    } else if (faceTimer === 115) {
      playAudio = false;
    } else if (faceTimer >= 114 && faceTimer < 115) {
      image(eagle, 0, 0);
    } else if (!playAudio && faceTimer === 116) {
      winXP.play();
      playAudio = true;
    } else if (faceTimer === 119) {
      playAudio = false;
    }
  } else {
    // Mostrar mensaje de idle solo si ya se mostró alguno antes
    if (mensajeMostrado) {
      image(backText, 0, 0);
      velocidad = 3;
      fontSize = 24;
      escribirTexto("Uff, que alivio");
    }
  }

  if (faceTimer === 116) {
    mirror = "error";
  }
  if (faceTimer === 121) {
    breakingGlass.play();
    playAudio = true;
    mirror = "broken";
  }

  if (mirror === "broken") {
    image(bsod, 0, 0);
    image(
      brokenMirror,
      width / 2 - brokenMirror.width / 2,
      height / 2 - brokenMirror.height / 2
    );
  } else if (mirror === "error") {
    image(bsod, 0, 0);
  }

  if (debug) {
    // Muestra el temporizador en pantalla
    fill(0);
    rect(5, 5, 270, 30);
    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    textFont("Arial");
    text("Tiempo en pantalla: " + faceTimer + "s", 10, 10);
  }
}

// Función de devolución de llamada para cuando bodyPose genera datos
function gotPoses(results) {
  // Guardar la salida en la variable poses
  poses = results;
}

// Función para mostrar texto con efecto de máquina de escribir
function escribirTexto(nuevoTexto) {
  if (texto !== nuevoTexto) {
    texto = nuevoTexto;
    index = 0;
    estado = "escribiendo";
  }

  if (estado === "escribiendo") {
    if (frameCount % velocidad === 0 && index < texto.length) {
      index++;
      talkSans.play();
    }
    if (index === texto.length) {
      estado = null; // Termina de escribir
    }
  }
  // Formato del texto del espejo
  fill(255);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  text(texto.substring(0, index), width / 2, height - 30);
}
