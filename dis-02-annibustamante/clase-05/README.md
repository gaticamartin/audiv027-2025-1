# clase-05

console.log(frameCount); _: contador_

== _: usado para asignar_

% _: usado para dividir pero utilizar lo que resta_

else _: usado para añadir otra condicion_

frameRate(1); _: tiempo o ´cada algo´ para que suceda la condicion_

-------------------------------------------------------------

```javascript
function setup() {
  createCanvas(400, 400);
  //frameRate(1);
}

function draw() {
  background(0);
  
  if (mouseIsPressed) {
    fill(255);
    ellipse(
      random(width),
      random(height),
      random(50),
      random(50)
            );
  } else {
    fill(0, 40);
    rect(0, 0, width, height);
  }
  
  //console.log(frameCount);
  //if (frameCount % 2 == 0) {
  //    ellipse(width/2, height/2, 50, 50);
  //} else {
  //    rect(width/2, height/2, 50, 50);
  //}
}
```
