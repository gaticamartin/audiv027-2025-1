# clase-11

## IDEA INICIAL PROYECTO PROGRAMACION

- pagina pagina relacionada a sismologia nacional
- conectar API´s con p5
- desarrollar lenguaje grafico de interes

-- idea grafica inicialfondo horizontal 1080x720 fondo negro,cada vez que se registra un sismo se dibuja en el centro de la pantalla una elipse de radio relacionado a la magnitud del sismo. esta circunferencia se desbanece lentamente hasta desaparecer 24 h despues. los limites de la pantalla son equivalentes a un sismo de grado considerable(?????)

  **links**
  - https://earthquake.usgs.gov/fdsnws/event/1/
  - https://www.getambee.com/api/earthquake
  - https://www.sismologia.cl/sismicidad/catalogo/2025/04/20250411.html

## OTRA IDEA

al ejecutar el proyecto se revela el primer (?) pixel de una imagen (superior izquierdo), cada vez q se clickea o se hace tap sobre la pantalla se revela un pixel aleatorio de la imagen 
((desarrollar)).

### de vuelta con los terremotos:

https://api.gael.cloud/#clima-por-codigo <- API informacion sismologiaca en formato JSON  

    "Fecha": "2025-06-06 15:04:30",
    "Profundidad": "253",
    "Magnitud": "3.5",
    "RefGeografica": "53 km al S de Socaire",
    "FechaUpdate": "2025-06-06T15:55:01.343Z"

Reales datos de interes:

    "Fecha": "2025-06-06 15:04:30",
    "Magnitud": "3.5",

En el centro de la pantalla podria haber un texto que explicara la relacion de la geografia de chile con los movimientos teluricos como:

*Otra vez, otra vez el caballo iracundo patea el planeta
y escoge la patria delgada, la orilla del páramo andino,
la tierra que dio en su angostura la uva celeste y el cobre absoluto,
otra vez, otra vez la herradura en el rostro
de la pobre familia que nace y padece otra vez el espanto y la grieta.*

Pero que no sea de Pablo Neruda jaja

### primer intento codigo

    //En base a la base de datos API de Gael Cloud "https://api.gael.cloud/general/public/sismos"

    let sismos = [];

    function setup() {
      // Lienzo en 1080p
      createCanvas(1920,1080);

      //Investigar Bien lo siguiente: No lo entiendo.
  
      // URL del proxy para evitar problemas de CORS al acceder a la API externa
      // CORSProxy.io actúa como intermediario entre el navegador y la API real
      let url = 'https://corsproxy.io/?https://api.gael.cloud/general/public/sismos';

      // Cargamos el JSON desde la URL (con proxy) y especificamos qué hacer cuando cargue
      // 'gotData' es la función que se ejecutará si carga bien
      // 'errorCarga' se ejecuta si hay un error
      loadJSON(url, gotData, 'json', errorCarga);
    }

    // Esta función se ejecuta cuando los datos JSON se han cargado correctamente
    function gotData(data) {
      // Guardamos los datos de sismos en la variable global
      sismos = data;
      // Mostramos los datos en la consola del navegador para inspeccionarlos
      console.log(sismos);
    }

    // si ocurre un error al cargar los datos
    function errorCarga(err) {
      // Mostramos el error en la consola para diagnóstico
      console.error("Error al cargar los sismos:", err);
    }

     // Visualizacion

    function draw() {
      // color Lienzo
      background(0); //negro(?)

       // estilo texto
      textSize(22);
      fill(255); //blanco(?)
      textAlign(LEFT, TOP);

      // Verificar si ya se han cargado los datos de sismos
      if (sismos.length > 0) {
        // Iterar primeros 10 sismos para mostrarlos 
        for (let i = 0; i < sismos.length; i++) {
          let sismo = sismos[i]; // Obtenemos el sismo actual

     //Seleccion de datos     
      
          // Texto en pantalla de fecha y magnitud
          //  para agregar ubicación: - ${sismo.RefGeografica}
          text(`${sismo.Fecha} - M${sismo.Magnitud}`, 10, 30 + i * 20);
      

          // Limitar la cantidad de sismos, en este caso hasta 10
          if (i > 10) break;
        }
      } else {
        // Mensaje de carga, PENSAR UNO MEJOR.
        text("Siguiendo las vibraciones en la tierra...", 10, 10);
          // estilo texto
  
      }
    }

   #### ACOTACIONES

   - en este codigo ya se reproducen los datos de interes y se solucionaron posibles problemas de proxy
   - hay que reemplazar la seleccion de sismos mostrados de los ultimos 10 a todos los sismos registrados durante las ultimas 24h.
   - para esto falta agregar a la definicion la nocion de hora y fecha actual para generar la relacion entre el tiempo transcurrido y la fecha/hora de el sismo
   - centrar los textos
   - aun hay que convertir estos datos a el lenguaje visual deseado.
   - quizas programar que los datos se muestren a partir de un click o tap en la pantalla, y antes de eso solo mostrar una determinada cita que haga referencia a la relacion de el paisaje nacional con su naturaleza sismica.
   - 

    // En base a la base de datos API de Gael Cloud "https://api.gael.cloud/general/public/sismos"

    let sismos = [];

    function setup() {
      // Lienzo en 1080p
      createCanvas(1920, 1080);

      //Investigar Bien lo siguiente: No lo entiendo.
  
      // URL del proxy para evitar problemas de CORS al acceder a la API externa
      // corsproxy.io actúa como intermediario entre el navegador y la API real
      let url = 'https://corsproxy.io/?https://api.gael.cloud/general/public/sismos';

      // Cargamos el JSON desde la URL (con proxy)
      loadJSON(url, gotData, 'json', errorCarga);
    }

    // Esta función se ejecuta cuando los datos JSON se han cargado correctamente
    function gotData(data) {
      sismos = data;
      console.log(sismos);
    }

    // en caso de error al cargar los datos
    function errorCarga(err) {
      console.error("Error al cargar los sismos:", err);
    }

    // VISUALIZACION
    function draw() {
      background(0); // fondo negro

      textSize(22);
      fill(255); // texto blanco
      textAlign(LEFT, TOP);

      if (sismos.length > 0) {
        // FECHA Y HORA ACTUAL
        let ahora = new Date();

        // FECHA Y HORA HACE 24H
        let hace24Horas = new Date(ahora.getTime() - (24 * 60 * 60 * 1000));

        // Iterar todos los sismos disponibles
        for (let i = 0; i < sismos.length; i++) {
          let sismo = sismos[i];

          // Convertir la fecha del sismo (string) a objeto Date
          let fechaSismo = new Date(sismo.Fecha);

          // Filtrar solo sismos últimas 24 horas
          if (fechaSismo > hace24Horas) {
          // Texto en pantalla de fecha y magnitud
          //  para agregar ubicación: - ${sismo.RefGeografica}
          text(`${sismo.Fecha} - M${sismo.Magnitud}`, 10, 30 + i * 20);
          }
        }

        // mensaje en el caso de que no se hayan registrado sismos en las ultimas 24h
        if (yOffset === 30) {
          text(":c", 10, yOffset);
        }

      } else {
        // MENSAJE DE CARGA
        text("Siguiendo las vibraciones en la tierra...", 100, 100);
    
      }
    }
