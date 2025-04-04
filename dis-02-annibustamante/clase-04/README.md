# clase-04

_Darle una posicion y donde moverse:_

let posX = 50;
  
  ellipse(posX, 50, 80, 80);
  
  posX = posX + 1;

posX = random (0, 400)

posY = random (0, 400)

----------------------------

_Que se mueva en direccion random:_

posX = posX + random(-2, 2);

posX = random (0, 400)

posY = random (0, 400)

posX = posX + random(-2, 2);

posY = posY + random(-2, 2);

-----------------------------

_Para dar mas de un valor:_

  for (algo; otra; ultima) {  
    posX.push(random(0, 400));
    
  for (let i = 0; i < 5; i++) {  
    posX.push(random(0, 400));
    
---------------------------
```javascript
//hacer 5 elipses
//que partan de lugares aleatorios
//y que despues se muevan aleatoriamente por el lienzo

let numElipses = 5;

//posX y posY son arreglos vacios
let posX = [];
let posY = [];

function setup() {
  createCanvas(400, 400);
  
//creo condiciones iniciales para posX y posY de todas las elipses
  for (let i = 0; i < numElipses; i++) {  
    posX.push(random(0, 400));
    posY.push(random(0, 400));
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < numElipses; i++) {  
    ellipse(posX[i], posY[i], 80, 80);
  }
  
  //ellipse(posX, posY, 80, 80);
  //ellipse(posX, posY, 40, 40)
  
  //posX = posX + random(-2, 2);
  //posY = posY + random(-2, 2);
}
```

