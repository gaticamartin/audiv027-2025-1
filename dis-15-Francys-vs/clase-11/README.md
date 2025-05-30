# clase-11

link: <https://scholar.google.com/citations?user=fEMWXvkAAAAJ&hl=es>  
link: <https://medium.com/processing-foundation/from-simple-to-advanced-ml5-js-70d6730b360b>  
link: <https://github.com/fiebrink1>  
link: <https://docs.ml5js.org/#/reference/neural-network>  
link: <https://www.youtube.com/watch?v=3MqJzMvHE3E> (ejemplo de NeuralNetwork)  
link: <https://www.scaler.com/topics/cpp/procedural-programming/> 
link: <https://en.wikipedia.org/wiki/Printer_Command_Language>    
link: <https://developer.zebra.com/products/printers/zpl> 
link: <https://www.koloronline.es/trucos-y-consejos/postscript-que-es-y-por-que-es-tan-importante/?srsltid=AfmBOooew0GSHLNOnDyltEm2wud0UEunUQoZlGVN-VXBJw7uXi0DJhcC> 
link: <> 
link: <> 

#### Código para poder crear una línea con el mouse y el programa detecta hacia donde va (derecha, izquierda, arriba o abajo)  
```javascript
// Step 1: load data or create some data
let data = [
  { x: 0.99, y: 0.02, label: "right" },
  { x: 0.76, y: -0.1, label: "right" },
  { x: -1.0, y: 0.12, label: "left" },
  { x: -0.9, y: -0.1, label: "left" },
  { x: 0.02, y: 0.98, label: "down" },
  { x: -0.2, y: 0.75, label: "down" },
  { x: 0.01, y: -0.9, label: "up" },
  { x: -0.1, y: -0.8, label: "up" },
];

let classifer;
let label = "training";

let start, end;

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

  // Step 4: add data to the neural network
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let inputs = [item.x, item.y];
    let outputs = [item.label];
    classifier.addData(inputs, outputs);
  }

  // Step 5: normalize your data;
  classifier.normalizeData();

  // Step 6: train your neural network
  classifier.train({ epochs: 100 }, finishedTraining);
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
  if (start && end) {
    strokeWeight(8);
    line(start.x, start.y, end.x, end.y);
  }
}

function mousePressed() {
  start = createVector(mouseX, mouseY);
  end = createVector(mouseX, mouseY);
}

function mouseDragged() {
  end = createVector(mouseX, mouseY);
}

function mouseReleased() {
  let dir = p5.Vector.sub(end, start);
  dir.normalize();
  let inputs = [dir.x, dir.y];
  console.log(inputs);
  classifier.classify(inputs, gotResults);
}

// Step 9: define a function to handle the results of your classification
function gotResults(results) {
  label = results[0].label;
  console.log(results);
}
```
*Recordatorio*: "for" es para repeteición, iteración de datos.  
epoch = son "época", cantidad de veces que se entrena el programa (epoch = 50, se entrena 50 veces con el comando otorgado).  
¿Por qué se llaman bug? Los computadores eran grandes y se metió una polilla (funfact), por eso los errores computacionales se les denomina "bug".  
debug: proceso de quitar los fallos en la consola, ejemplo afinando las épocas.  
Función llamada "finishedTraining" sirve para que una vez que termine el entrenamiento continúe lo siguiente del código (paso 1: entrenar, paso 2: que aplique a algo lo entrenado)    
![image](https://github.com/user-attachments/assets/3e2b4b6d-a3c5-44da-924c-a7f01dee8382)  
![image](https://github.com/user-attachments/assets/7d538bbe-14b4-41ea-b5bd-ba5dde3207c4)
![image](https://github.com/user-attachments/assets/fef6ae6e-b71a-4e73-aef8-2507a8d92646)

label = es la etiqueta, en donde se escribe o muestra algo dentro.  
classifier = clasificador, empaqueta las instrucciones almacenadas dentro del porgrama al entrenarlo (literal clasifica).  
frontend = la página web, lo que veo.  
backend = el servidor, lo que ocurre detrás para que la web funcione.  

**let data una forma de almacenar grupos de datos, entre números y textos.**    

``` javascript
 let data = [
  { r: 255, g: 0, b: 0, color: "red-ish" },
  { r: 254, g: 0, b: 0, color: "red-ish" },
  { r: 253, g: 0, b: 0, color: "red-ish" },
  { r: 0, g: 255, b: 0, color: "green-ish" },
  { r: 0, g: 254, b: 0, color: "green-ish" },
  { r: 0, g: 253, b: 0, color: "green-ish" },
  { r: 0, g: 0, b: 255, color: "blue-ish" },
  { r: 0, g: 0, b: 254, color: "blue-ish" },
  { r: 0, g: 0, b: 253, color: "blue-ish" },
];

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let inputs = [item.r, item.g, item.b];
```  




