function setup() {
  createCanvas(400, 400);
// frameCount es cuantas veces ocurre draw en un seg (aprox 60)
//  frameRate(1);  cantidad de veces para que ocurra draw en un seg
  background(0);
}

function draw() {
// Se dibujarán elipses de dimensiones aleatorias cada vez que el mouse se presione 
// mouseIsPressed tiene dos valores. verdadero o falso
// if = puede o no pasar, son condiciones

  if (mouseIsPressed) {
    fill(255, 80, 120);
    ellipse(
      random(width),
      random(height),
      random(50),
      random(50)
      );
// Crar un canvas cuando el mouse ya no se encuentre siendo presionado
// else solo ocurrirá si if se cumple
  } else {
    fill(0, 40);
    rect(0, 0, width, height);
  }
//  console.log(frameCount);

// % = divide en números enteros y dame el resto, puede ser 1 o 0
// 1 para los impares y 0 para los pares
//  if (frameCount % 2 == 0) {
  
//  ellipse(width/2, height/2, 50, 50);
//  } else {
//     rect(width/2, height/2, 50, 50);
//  }
}

