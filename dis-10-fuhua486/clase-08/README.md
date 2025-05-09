# clase-08

no hay clase por interferiado.

## bitácora de proceso

Para comenzar, analizamos las 12 palabras en Lengua de Señas Chilena más importantes segun la fuente de biobioChile. (https://www.biobiochile.cl/noticias/servicios/toma-nota/2024/09/24/12-palabras-en-lengua-de-senas-chilena-que-deberias-aprender-te-sabes-alguna.shtml)

Dividimos estas palabras en dos categorias: Con movimiento(dinamico)/estatico.

Las palabras con movimientos son: Hola, Gracias, Por favor, Si, No, Amigo/a, Perdón, Comida y Agua.
Las palabras sin movimientos(Estatico) son: Casa y Amor.

Después de clasificar los movimientos, vamos a entrenar nuestro modelo en Teachable Machine.
Al principio probamos el modelo de postura, pero no nos resulta, porque el modelo no se puede detectar las diferencias entre la postura de mano y dedos, el modelo solo sirve para detectar postura en el sentido de movimiento con todos el cuerpo, y no en detalles pequeños.


Luego vamos a usar el modelo de imagen, probando diferentes lengua de seña. El modelo de imagen resulta mucho mejor que de postura para nuestro proyecto, pero se requiere un tamaño de muestra mayor para detectarlo mejor.
El modelo de imagen de Teachable Machine se ve afectado por muchos factores a la hora de distinguir el lenguaje de señas: la distancia del gesto, la apariencia del demostrador (mostrando solo el cuerpo o la persona completa), el entorno circundante y el color de la ropa.


Intentamos todo eso de mostrar la lengua de señas chilena delante de la cámara: sí, no, gracias. El resultado es que Teachable Machine no puede reconocer con precisión el lenguaje de señas que expresamos(a una distancia que se puede ver el demostrador y el gesto que hace). Sólo puede reconocerlo cuando mostramos los gestos individualmente y estamos cerca de los gestos en lugar de la persona(el demostrador). Además, no es 100% exacto y hay algunas desviaciones. Por esta razón, terminamos eligiendo solo ocho frases para la capacitación: Hola, Gracias, Por favor, Si, No, Amigo/a, Casa y Amor.

![image](https://github.com/user-attachments/assets/12dd7477-1e3c-4f61-a040-95fa96302282)
