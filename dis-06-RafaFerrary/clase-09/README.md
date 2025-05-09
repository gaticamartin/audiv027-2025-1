# clase-09


# Integrantes

@RafaFerrary: Rafael Ferrari @antoniapozo: Antonia Pozo 


# Introducción

“Boomer taste” es un proyecto universitario del ramo "Inteligencia Artificial" de la Universidad de Chile, realizado con la plataforma Teachable Machine y el entorno creativo p5.js. Este trabajo utiliza un modelo entrenado con tres clases de sonido —jazz, reggaetón y silencio— para controlar la expresión facial de un personaje animado: un anciano con opiniones musicales bastante marcadas. Si el modelo detecta jazz, el anciano aparece feliz; si detecta reggaetón, se muestra molesto; y si hay silencio, mantiene una expresión neutral. El propósito de este trabajo es paródico: hacer burla de las típicas conversaciones generacionales sobre gustos musicales. A continuación, se presentarán las inspiraciones del proyecto, los pasos realizados, algunos errores durante el desarrollo y nuestras reflexiones finales sobre lo aprendido.


# Inspiración

La idea nace a partir de las distintas opiniones que se dan al conversar de géneros musicales y, sobre todo, cuando la conversación se da entre personas de distintas generaciones, donde es más probable encontrar opiniones divididas o que algunos géneros más “actuales” no sean de completo agrado. Nos guiamos en conversaciones de Rafa con su padre, quien suele mostrar un profundo desagrado por el reggaetón, contrastando con su aprecio por el jazz y otros géneros “más clásicos”.
Esta dinámica generacional nos pareció divertida de representar a través de una inteligencia artificial, usando la expresividad de una caricatura como herramienta de humor. Además, nos inspiramos en ejercicios previos mostrados en clases, más específicamente la clase 5 con el gran ejemplo de la dinámica con Don Francisco, donde el profesor entrena la Teachable Machin por medio de imágenes. En este caso, decidimos explorar el reconocimiento sonoro como eje central del proyecto.


# Desarrollo del proyecto

El desarrollo comenzó con el entrenamiento de un modelo en Teachable Machine, en su modalidad de reconocimiento de audio. Para alimentar las distintas clases del modelo, y otorgarle una mayor muestras de audios (alrededor de 500), usamos tres fuentes:
Una playlist de jazz llamada "Jazz Classics"


Una playlist de reggaetón llamada "Mansión Reggaetón"


Fragmentos de silencio para representar momentos sin sonido.

![unnamed (5)](https://github.com/user-attachments/assets/ef15acac-029a-4eed-bf7c-c2c75f6ed060)


Con estos datos, entrenamos un modelo que pudiera identificar cuál de los tres sonidos se estaba reproduciendo en tiempo real a través del micrófono del computador.

![unnamed (3)](https://github.com/user-attachments/assets/406bbbf8-9b2b-42ed-845a-fc54d0bb3a9f)


Una vez entrenado el modelo, descargamos los archivos generados seleccionando la opción TensorFlow.js, que permite integrarlo fácilmente en un proyecto de p5.js. En el código de p5, se definieron tres estados visuales para un personaje anciano (claramente sin ningún animo de ofender, pues esto es meramente humorístico) dibujado en el canvas: feliz, neutral y enojado, que se activan según la etiqueta (label) que entrega la IA. Por ejemplo:
Si el label es "jazz", se muestra el anciano feliz.


Si el label es "reggaeton", se muestra el anciano molesto.


Si el label es "silencio", el anciano aparece sin expresión.


Esta lógica permite una interacción en tiempo real entre la música del entorno y la reacción humorística del personaje.

![unnamed](https://github.com/user-attachments/assets/2c5ea838-7b5d-4def-9e0f-13eecb9091cd)
![unnamed (1)](https://github.com/user-attachments/assets/4627680b-ec56-401c-b846-a2f743ee0b6d)
![unnamed (2)](https://github.com/user-attachments/assets/557a13ed-1663-4b0f-aa17-fe2645c9124b)



Luego de exportar el código de la Teachable Machine lo incluimos en nuestro panel de p5.

![unnamed (7)](https://github.com/user-attachments/assets/6473f131-4aed-4a65-966d-0b78a1d0ed89)


Dentro de la carpeta index.html incluimos:

![unnamed (6)](https://github.com/user-attachments/assets/2592a81a-4425-43fd-a984-b214e2e67364)


Luego, subimos las imagenes que iba a utilizar el código:

![unnamed (4)](https://github.com/user-attachments/assets/1e39cfad-9af0-4cbf-bacd-59676fb6dc0e)



# Pruebas

Parte crucial fueron las pruebas, en donde reproducimos canciones de ambos géneros, esto con la finalidad de ver cómo estaba reaccionando el modelo.

En la primera prueba optamos partir con audio local del computador, como ejemplo se utilizó la canción “The Girl From Ipanema” de Stan Getz:

![unnamed (3)](https://github.com/user-attachments/assets/87f85270-3346-43ba-8639-5b45bd3041a4)


Siguiendo este mismo ejemplo, pero ahora con el reggaetón, se utilizó la canción “Ponte Lokita” de Katteyes y Kidd Voodoo:

![unnamed (2)](https://github.com/user-attachments/assets/0d7efbba-711c-4c34-86e8-2b06a360b5c6)


En la segunda prueba, utilizamos un audio proveniente de un dispositivo externo (celular), partiendo con el jazz, reproducimos la canción “Autumn Leaves” de Chet Baker:

![unnamed (1)](https://github.com/user-attachments/assets/8db878a5-8bad-4edc-9250-ed4d9d129684)


Luego con el reggaetón, haciendo el mismo procedimiento, reproducimos la canción “Resentia” de Pablo Chill-E: 

![unnamed](https://github.com/user-attachments/assets/4ac6607e-6eff-4239-8ef7-d810ebad0569)


En ambas pruebas pudimos observar que el modelo era capaz de detectar el audio y diferenciar estos géneros, entregándonos la reacción esperada y cumpliendo con las expectativas.  


# Dificultades y aprendizajes

Durante el proceso, tuvimos algunos problemas con el código, desde mínimos detalles en su escritura a problemas más grandes a la hora de querer llamar a la teachable machine.
Otros problemas surgieron cuando notamos que al modelo le costaba diferenciar bien entre el jazz y el reggaetón, especialmente cuando ambos tenían instrumentales similares. Pero mientras más muestras le enseñábamos a la herramienta, menos le costaba discernir entre géneros. 
Este proyecto nos ayudó a comprender mejor cómo entrenar modelos personalizados en Teachable Machine, cómo integrarlos con p5.js, y cómo usar la inteligencia artificial con fines creativos y humorísticos. Además, fue una forma entretenida de reflexionar sobre la relación entre tecnología, cultura y diferencias generacionales, dejándonos ver que conversaciones (o quizás discusiones) tan triviales pueden servir como una gran inspiración para proyectos.

https://editor.p5js.org/antoniapozo/sketches/VwShivw6l
