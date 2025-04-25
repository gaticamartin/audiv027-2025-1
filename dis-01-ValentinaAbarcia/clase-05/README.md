# clase-05
## Apuntes 11-04-2025

Para condiciones **If () {}**
```
 if (3 >= 3) {
    ellipse (width/2, height/2, 50, 50);
    }
```
  
  Si la condición se cumple entonces se realiza la acción.
  
  De no ser así -> **else {}**
  
  ```
else {
      rect(width/2, height/2, 50, 50);
    }
```
Proceso completo en aplicación:


```
function setup() {
  createCanvas(400, 400);
frameRate(1)
}

function draw() {
  background(0);

  console.log(frameCount);
  
  if (frameCount % 2 == 0) {
    ellipse (width/2, height/2, 50, 50);
    } else {
      rect(width/2, height/2, 50, 50);      
    }
}
````

-frameCount -> veces que se dibuja 

-Para **comparar** se utilizan 2 signos igual *==*, ya que uno se utiliza para **Asignar valor**

-Para controlar el tiempo de reacción -> **frameRate(1)**

!== -> distinto 

```
function setup() {
  createCanvas(400, 400);
**frameRate(1)
}
```
Código de trabajo "Elipses al hacer click"
``` javascript
function setup() {
  createCanvas(400, 400);
//frameRate(1)
  background(0);
}

function draw() {
  //background(0);
  if (mouseIsPressed ==true) {
    fill(255);
    ellipse(
      random(width),
      random(height),
      random(50),
      random(50)
            );
}

```



Modificación del codigo trabajado durante la clase: https://editor.p5js.org/valentina.abarcia/full/5e4G6Qpjd


Referencias:
https://turboflip.de/audiosensitive-drawing-with-p5-js/

