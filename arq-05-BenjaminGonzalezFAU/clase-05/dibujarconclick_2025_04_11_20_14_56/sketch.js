function setup() {
  createCanvas(400, 400);
  //frameRate(1);
  background(0);
}

function draw() {
  
  //detectar click izquierdo
  if(mouseIsPressed) {
    fill(255);
    ellipse(
    random(width),
    random(height),
    random(50),
    random(50)
          );
    //en caso de no cumplir condicion
  } else{
    fill(255, 40);
    rect(0, 0, width, height)
  }
    
  //console.log(frameCount);
  
  //puede o no que pase
  //if (frameCount%2==1) {
  // ellipse (width/2, height/2, 50, 50) 
  //} else{
  //  rect (width/2, height/2, 50, 50) 
  //}
  
  //idea para jugar
  //crear un circulo blanco, 50 de transparencia
  //posicionar en el centro
  //movimiento aleatorio
  //si se mueve derecha aumenta de tamaño el circulo
  //si se mueve izquierda disminuye de tamaño
  //si se mueve arriba +10 transparencia
  //si se mueve abajo -10 transparencia
}