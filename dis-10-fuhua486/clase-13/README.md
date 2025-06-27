# clase-13

```Javascript
  
let data = [];

let classifier;
let label = "training";

// para handpose
let handPose;
let video;
let hands = [];

let deboEntrenar = false;
let manosParaEntrenar = [];

let entrenandoA = true;
let entrenandoB = false;
let entrenandoC = false;


function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}



function setup() {
  createCanvas(640, 240);
  // For this example to work across all browsers
  // "webgl" or "cpu" needs to be set as the backend
  ml5.setBackend("webgl");

  // Step 2: set your neural network options
  let options = {
    task: "classification",
    debug: true,
  };
  
    // Step 3: initialize your neural network
  classifier = ml5.neuralNetwork(options);
  
  
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  
}


// Step 7: use the trained model
function finishedTraining() {
  label = "ready";
}

// Step 8: make a classification

function draw() {
  background(200);
  textAlign(CENTER, CENTER);
  textSize(64);
  text(label, width / 2, height / 2);

}



//function mouseDragged() {
//  manosParaEntrenar.push(manoActual);
  // end = createVector(mouseX, mouseY);
//}


// Step 9: define a function to handle the results of your classification
function gotResults(results) {
  label = results[0].label;
  console.log(results);
}


// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}


function keyPressed() {
  
  if (key === 'a') {
    entrenandoA = true;
    entrenandoB = false;
    entrenandoC = false;
  } else if (key === 'b') {
    entrenandoA = false;
    entrenandoB = true;
    entrenandoC = false;
  } else if (key === 'c') {
    entrenandoA = false;
    entrenandoB = false;
    entrenandoC = true;
  }
  
  
  if (keyCode === LEFT_ARROW) {
   deboEntrenar = true;
  manosParaEntrenar = [];
  }
  
  if (keyCode === RIGHT_ARROW) {
    
    try {
      console.log(hands[0].keypoints3D);
      
      let clone = structuredClone(hands[0].keypoints3D);
      
      if (entrenandoA) {
        clone.salida = "a";
      }  else if (entrenandoB) {
        clone.salida = "b";
      } else if (entrenandoC) {
        clone.salida = "c";
      }
      
      data.push(clone);
  
      
    }
    catch(e) {
      console.log("sorry no vi la manito")
    }
    
    
  }
  
  
  if (keyCode === UP_ARROW) {
    deboEntrenar = false;
    enviarDatosDeEntrenamiento();
  }

}



function enviarDatosDeEntrenamiento() {
  // Step 4: add data to the neural network
   for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let inputs = [item[0].x, item[0].y];
    let outputs = [item.salida];
    classifier.addData(inputs, outputs);
  }
  
  


  // Step 5: normalize your data;
  classifier.normalizeData();

  // Step 6: train your neural network
  classifier.train({ epochs: 100 }, finishedTraining);
}
```
