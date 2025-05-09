# clase-08

no hay clase por interferiado.

## bitácora de proceso
Integrantes
@RafaFerrary: Rafael Ferrari @antoniapozo: Antonia Pozo 
Introducción
“Boomer taste” es un proyecto universitario del ramo "Inteligencia Artificial" de la Universidad de Chile, realizado con la plataforma Teachable Machine y el entorno creativo p5.js. Este trabajo utiliza un modelo entrenado con tres clases de sonido —jazz, reggaetón y silencio— para controlar la expresión facial de un personaje animado: un anciano con opiniones musicales bastante marcadas. Si el modelo detecta jazz, el anciano aparece feliz; si detecta reggaetón, se muestra molesto; y si hay silencio, mantiene una expresión neutral. El propósito de este trabajo es paródico: hacer burla de las típicas conversaciones generacionales sobre gustos musicales. A continuación, se presentarán las inspiraciones del proyecto, los pasos realizados, algunos errores durante el desarrollo y nuestras reflexiones finales sobre lo aprendido.
Inspiración
La idea nace a partir de las distintas opiniones que se dan al conversar de géneros musicales y, sobre todo, cuando la conversación se da entre personas de distintas generaciones, donde es más probable encontrar opiniones divididas o que algunos géneros más “actuales” no sean de completo agrado. Nos guiamos en conversaciones de Rafa con su padre, quien suele mostrar un profundo desagrado por el reggaetón, contrastando con su aprecio por el jazz y otros géneros “más clásicos”.
Esta dinámica generacional nos pareció divertida de representar a través de una inteligencia artificial, usando la expresividad de una caricatura como herramienta de humor. Además, nos inspiramos en ejercicios previos mostrados en clases, más específicamente la clase 5 con el gran ejemplo de la dinámica con Don Francisco, donde el profesor entrena la Teachable Machin por medio de imágenes. En este caso, decidimos explorar el reconocimiento sonoro como eje central del proyecto.
Desarrollo del proyecto
El desarrollo comenzó con el entrenamiento de un modelo en Teachable Machine, en su modalidad de reconocimiento de audio. Para alimentar las distintas clases del modelo, y otorgarle una mayor muestras de audios (alrededor de 500), usamos tres fuentes:
Una playlist de jazz llamada "Jazz Classics"


Una playlist de reggaetón llamada "Mansión Reggaetón"


Fragmentos de silencio para representar momentos sin sonido.

Con estos datos, entrenamos un modelo que pudiera identificar cuál de los tres sonidos se estaba reproduciendo en tiempo real a través del micrófono del computador.


Una vez entrenado el modelo, descargamos los archivos generados seleccionando la opción TensorFlow.js, que permite integrarlo fácilmente en un proyecto de p5.js. En el código de p5, se definieron tres estados visuales para un personaje anciano (claramente sin ningún animo de ofender, pues esto es meramente humorístico) dibujado en el canvas: feliz, neutral y enojado, que se activan según la etiqueta (label) que entrega la IA. Por ejemplo:
Si el label es "jazz", se muestra el anciano feliz.


Si el label es "reggaeton", se muestra el anciano molesto.


Si el label es "silencio", el anciano aparece sin expresión.


Esta lógica permite una interacción en tiempo real entre la música del entorno y la reacción humorística del personaje.
Luego de exportar el código de la Teachable Machine lo incluimos en nuestro panel de p5.

Dentro de la carpeta index.html incluimos:

Luego, subimos las imagenes que iba a utilizar el código:
Pruebas

Parte crucial fueron las pruebas, en donde reproducimos canciones de ambos géneros, esto con la finalidad de ver cómo estaba reaccionando el modelo.

En la primera prueba optamos partir con audio local del computador, como ejemplo se utilizó la canción “The Girl From Ipanema” de Stan Getz:



Siguiendo este mismo ejemplo, pero ahora con el reggaetón, se utilizó la canción “Ponte Lokita” de Katteyes y Kidd Voodoo:



En la segunda prueba, utilizamos un audio proveniente de un dispositivo externo (celular), partiendo con el jazz, reproducimos la canción “Autumn Leaves” de Chet Baker:



Luego con el reggaetón, haciendo el mismo procedimiento, reproducimos la canción “Resentia” de Pablo Chill-E: 


En ambas pruebas pudimos observar que el modelo era capaz de detectar el audio y diferenciar estos géneros, entregándonos la reacción esperada y cumpliendo con las expectativas.  
Dificultades y aprendizajes
Durante el proceso, tuvimos algunos problemas con el código, desde mínimos detalles en su escritura a problemas más grandes a la hora de querer llamar a la teachable machine.
Otros problemas surgieron cuando notamos que al modelo le costaba diferenciar bien entre el jazz y el reggaetón, especialmente cuando ambos tenían instrumentales similares. Pero mientras más muestras le enseñábamos a la herramienta, menos le costaba discernir entre géneros. 
Este proyecto nos ayudó a comprender mejor cómo entrenar modelos personalizados en Teachable Machine, cómo integrarlos con p5.js, y cómo usar la inteligencia artificial con fines creativos y humorísticos. Además, fue una forma entretenida de reflexionar sobre la relación entre tecnología, cultura y diferencias generacionales, dejándonos ver que conversaciones (o quizás discusiones) tan triviales pueden servir como una gran inspiración para proyectos.

https://editor.p5js.org/antoniapozo/sketches/VwShivw6l
