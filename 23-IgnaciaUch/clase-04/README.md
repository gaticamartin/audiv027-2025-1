# clase-04

Arreglo como forma de colección (Array) 
Disminuir la complejidad con arreglos (repetir y ordenar)

Sam Lavinge (Slow Hot Computer)

Copiar y pegar dentro del código no ayuda y es muy propenso a errores

*Backtick* se ponen tres de estos símbolos y se pega el código dentro ```

# EJEMPLO DE COMO NO HACER LAS COSAS
// Quiero hacer cinco elipses
// esas elipses quiero que partan 
// en lugares aleatorios 
// y que se muevan
// aleatoriamente por el lienzo

// Cantidad de elipses dentro del código
let numElipses = 5;

// posición dentro del lienzo (variable)
let posX0;
let posY0;

let posX1;
let posY2;

// Se define el setup, pero aún no se llama
function setup() {
  createCanvas(400, 400);
  
  posX0 = random(0, 400);
  posY0 = random(0, 400);
  
  posX1 = random(0, 400);
  posY1 = random(0, 400);
}

// El orden es importante, primero crea la elipse y luego pinta el canva
function draw() {
  background(185, 157, 167);
 
  ellipse(posX0, posY0, 80, 80);
  ellipse(posX1, posY1, 40, 40);
  
  posX0 = posX0 + random(-2, 2);
  posY0 = posY0 + random(-2, 2);
  
  posX1 = posX1 + random(-2, 2);
  posY1 = posY1 + random(-2, 2);
  
}

Array utiliza []
Push es para tomar un valor y ponerlo al final del valor anterior
Hay que agregar un comando (syntaxis) para que pare
Para hacer q posX.push se repita se pone dentro de for
