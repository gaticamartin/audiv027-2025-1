# clase-08

no hay clase por interferiado.

## bitácora de proceso
___

# Trabajo 1
Integrantes: Valentina Abarcia, Annais Bustamante, Erlea Fuentealba

## Materiales
1. https://teachablemachine.withgoogle.com/train/image\

### Codigo
Código de Teacheble Machine de reconocimiento de imagenes, con imagenes de tres grupos de KPop: Ateez, Stray Kids, Aespa.
```javascript
<div>Teachable Machine Image Model</div>
<button type="button" onclick="init()">Start</button>
<div id="webcam-container"></div>
<div id="label-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>
<script type="text/javascript">
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "./my_model/";

    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }
</script>
```
## Capturas de pantalla
### Proceso
1. Creación de Clases en Teacheble Machine, cada clase es un integrante del grupo de Kpop.

2. Carga de Documentación.


### Registro de Funcionamiento


## Conclusiones
1. Teachable Machine empieza a reconocer los rostros a partir de las 30 imágenes.
2. La luz y su reflejo afecta a la hora de reconocer los rostros, por ejemplo: poniendo la cámara a mirar los rostros a través de una pantalla.
3. El rostro tiene que estar claramente visible sin un ruido visual para tener una mejor lectura.
4. Entre mayor cantidad de imágenes reconoce mejor los rostros aunque no se vean en tan buena calidad.
5. Mientras menos distancia haya entre la cámara y el rostro más acertado es.
6. Puede llegar a confundirse de persona si se está muy cerca, pero a la vez puede acertar a la persona a una distancia adecuada.
7. Puede reconocer a la persona por sus rasgos faciales, como los labios, si está lo suficientemente cerca.

## Citas y Referentes
1. https://lens.google/intl/es-419/howlensworks/\


