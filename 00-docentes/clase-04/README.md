# clase-04

demostración de que sin arreglos la vida es muy dura

```javascript
// quiero hacer cinco elipses
// esas elipses quiero que partan
// en lugares aleatorios
// y que despues se muevan
// aleatoriamente por el lienzo

let posX0;
let posY0;

let posX1;
let posY1;


function setup() {
  createCanvas(400, 400);
  
  posX0 = random(0, 400);
  posY0 = random(0, 400);
  
  posX1 = random(0, 400);
  posY1 = random(0, 400);
  
}

function draw() {

  background(220);
  
  ellipse(posX0, posY0, 80, 80);
  ellipse(posX1, posY1, 40, 40);
  
  posX0 = posX0 + random(-2, 2);
  posY0 = posY0 + random(-2, 2);
  
  posX1 = posX1 + random(-2, 2);
  posY1 = posY1 + random(-2, 2);
  
}
```

muy pronto: ARREGLOS!!
