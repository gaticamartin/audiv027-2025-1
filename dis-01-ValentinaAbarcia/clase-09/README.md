# clase-09

Viernes 09 mayo 2025

## IDENTIFICADOR DE PHOTOCARDS

Integrantes:

* Valentina Abarcia <LINK [https://github.com/ValentinaAbarcia]>
* Annais Bustamante <LINK [https://github.com/annibustamante]>
* Erlea Fuentealba  <LINK [https://github.com/erleafuentealba]>

```md
mi equipo de trabajo es <https://github.com/NOMBRE> y <https://github.com/NOMBRE>, entregamos en el repositorio en este enlace <https://github.com/ETC>.
```

## Acerca del proyecto

El proyecto busca investigar el funcionamiento de la IA, más especificamente las IAs de Teacheble Machine, que tienen la cualidad de aprender. Todo esto con el objetivo de enternder como se puede utlizar la IA en la vida diaria y los hobbies.

El proyecto busca lograr la identificación de photocards de idols de k-pop, como un apoyo para los coleccionistas de photocards.

Se utilizó la herremienta de proyecto de imagen de Teacheble Machine, para ello se realizó una carga masiva de imagenes.

## Código del proyecto

El código original que citamos es

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
</script>}
```


## Enlace del proyecto

Lo hicimos en editor de p5.js https://editor.p5js.org/erlea.fuentealba/full/0sa94OdNK 

## Documentación multimedia / audiovisual del proyecto funcionando

![image](https://github.com/user-attachments/assets/e3167e60-e53f-4023-9c29-ad0ff006ea69)
![image (1)](https://github.com/user-attachments/assets/acf9ab9c-ab76-4a4a-9ab7-d07263e71342)
![image (2)](https://github.com/user-attachments/assets/c6dd2884-3996-494e-a8ee-8ea5f432667f)
![image (3)](https://github.com/user-attachments/assets/8129a16e-ba6e-49c7-8157-7d9e916f577f)
![image (4)](https://github.com/user-attachments/assets/bce4c05d-2169-4d37-bbfb-dd1191348662)
![image (5)](https://github.com/user-attachments/assets/c37803ca-bb33-4d9d-ad71-e796cc2abd60)
![image (6)](https://github.com/user-attachments/assets/a0804473-fb01-438d-b72e-587e8174afce)
![image (7)](https://github.com/user-attachments/assets/24452c60-4d32-476a-b0ca-fd7c77b6ed37)
![image (8)](https://github.com/user-attachments/assets/7fc29c97-808e-4513-887b-cbed9de6b392)
![image (9)](https://github.com/user-attachments/assets/1411289a-fdca-4965-9dd6-bc6d97eb2183)
![image (10)](https://github.com/user-attachments/assets/f7f7deec-87c6-4d62-a2b8-be264c78602b)
![image (11)](https://github.com/user-attachments/assets/4f124b43-b268-4e60-a77c-6be70dbcbab8)
![image (12)](https://github.com/user-attachments/assets/25c972fb-811f-42b7-afbe-a4a54b09388f)
![image (13)](https://github.com/user-attachments/assets/6a742280-428b-41fe-8861-34d978daab6f)
![image (14)](https://github.com/user-attachments/assets/22a26318-df63-4807-a45d-cd248cec02b1)
![image (15)](https://github.com/user-attachments/assets/c9318ec9-5c75-4918-b121-37be221c5f19)
![image (16)](https://github.com/user-attachments/assets/03a582f6-2d04-4ed5-8f71-f175183f821c)
![image (17)](https://github.com/user-attachments/assets/3fafa8fa-1dc2-4fb6-b73a-9ea72aeb93ef)
![image (18)](https://github.com/user-attachments/assets/e43147aa-acef-4510-8620-5da9dac30c30)
![image (19)](https://github.com/user-attachments/assets/d7b9b0bb-fadc-46df-a78b-edd014cf80fb)
![image (20)](https://github.com/user-attachments/assets/fe14338b-e5ab-406b-9f89-c662e1fb1aef)
![image (21)](https://github.com/user-attachments/assets/f1f9a3fd-eb19-4e84-896d-7530fbf571b9)
![image (22)](https://github.com/user-attachments/assets/fca57f4d-8e12-4089-918c-b8f3d31e75f4)
![image (23)](https://github.com/user-attachments/assets/08a8438a-00a0-410b-817f-5130ad737c25)
![image (24)](https://github.com/user-attachments/assets/cb58b073-f727-4eb3-acd9-6a67d64b894f)
![image (25)](https://github.com/user-attachments/assets/0108ff67-205e-4afd-ba28-ad334e0a2d0d)
![image (26)](https://github.com/user-attachments/assets/2ccb48fe-8b86-4de8-a0b3-24a1c1c025c1)


El trabajo fue realizado mayormente de forma presencial y sincronica, por las tres integrantes del grupo. Los roles y tareas se fueron rotando a medida que se cumplian etapas del proyecto.
1. Se realizó una busqueda de imagenes inicial, dos integrantes, y se realizó una carga masiva, una integrante.
2. Se realizaron pruebas de imagen, tres integrantes.
3. Se realizó un segunda  busqueda de imagenes, dos integrantes, y se realizó una segunda carga masiva, una integrante.
4. Se realizaron pruebas de funcionamiento, dos integrantes, y anotaciones de conclusiones, una integrante.
5. Traspaso de información al formato final, tres integrantes
6. Correcciones de codigo, una integrante.

## Bibliografía

Carpeta de imagenes utilizadas para la realización del proyecto https://drive.google.com/drive/folders/1LLjgteFf0vlq8stqluBKnOGRSXTofFdQ?hl=es

Tomamos el código base de https://teachablemachine.withgoogle.com/train/image

## Conclusiones

1. Teachable Machine empieza a reconocer los rostros a partir de las 30 imágenes.
2. La luz y su reflejo afecta a la hora de reconocer los rostros, por ejemplo: poniendo la cámara a mirar los rostros a través de una pantalla.
3. El rostro tiene que estar claramente visible sin un ruido visual para tener una mejor lectura.
4. Entre mayor cantidad de imágenes reconoce mejor los rostros aunque no se vean en tan buena calidad.
5. Mientras menos distancia haya entre la cámara y el rostro más acertado es.
6. Puede llegar a confundirse de persona si se está muy cerca, pero a la vez puede acertar a la persona a una distancia adecuada.
7. Puede reconocer a la persona por sus rasgos faciales, como los labios, si está lo suficientemente cerca.

## Dimensión ética
Comprendiendo que se está trabajando con la imagen de otra persona, existe la posibilidad de contribuir a la objetificación de la persona, tratandolo como un "objeto de datos". Esto se relaciona con la relación parasocial que se genera entre fanático-ídolo. Así mismo, también están la cuestión del uso de la imagen del idol con IA, para lo cual no se cuenta con el consentimiento de la persona o la empresa a cargo de la imagen. Finalmente, una herramienta como esta podría ser usada de manera negativa, como puede ser para acosar o el doxxing debido a la sobre exposición.

