let gridSize = 20;
let dx = 0;
let dy = 0;

function setup() {
  createCanvas(400, 700);
  frameRate(60);
  cols = width / gridSize;
  rows = height / gridSize;
  player = new Player(1, 1)
  c = new Circle(0, 0, 255, 0, 0)
}

function draw() {
  background(220);
  fill(0);
  player.move(dx, dy);
  player.show();
  c.show();
  c.move();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) [dx, dy] = [-1, 0];
  if (keyCode === RIGHT_ARROW) [dx, dy] = [1, 0];
  if (keyCode === UP_ARROW) [dx, dy] = [0, -1];
  if (keyCode === DOWN_ARROW) [dx, dy] = [0, 1];
}


class Player{
  constructor(x, y){
    this.x = x
    this.y = y
  }
  
  show (){
  fill(0)
  rect(this.x * gridSize, this.y * gridSize, gridSize, gridSize)
  }
  
  move(dx, dy){
    this.x = (this.x + dx + cols) % cols;
    this.y = (this.y + dy + rows) % rows;
  }
}

class Circle{
  constructor(x, y, k1, k2, k3){
    this.x = x
    this.y = y
    this.k1 = k1
    this.k2 = k2
    this.k3 = k3
  }
  show(){
    fill(this.k1, this.k2, this.k3);
    ellipse(this.x, this.y, 20, 20);
  }
  move(){
    this.x = (this.x + 20 + width) % width;
    this.y = (this.y + 20 + height) % height;
  }
}
