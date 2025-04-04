# clase-03
## Apunte 1  
<https://runwayml.com/>

### Tipos de Variables  
Int = Integer = Número Entero  0  
Bool = Boolean = Verdadero / Falso  0/1  
Float = Número Decimal // 0.00 

### Declaración de variables GLOBALES  
Antes de iniciar tu código fuente deberias declarar los códigos que vas a utilizar mediante:

> [!NOTE]
> let (VARIABLE) = (VALOR);

###  Funciones  

Después de haber realizado la declaración de variables comienza el código fuente a segmentarse en funciones, en Unreal Engine es equivalente a los Eventos, entre ellas hay:  

> [!NOTE]
> function preload() {  }  (BeforePlay) //One Tick  
> function setup() { }  (BeginPlay) //One Tick  
> function draw() { }  (Run-Time) //Multiple Ticks during Runtime

### Comandos  

Si necesitas imprimir algo en la consola, debes usar el siguiente comando:  
console.log();  

Si necesitas que sea literalmente lo que vas a escribir debe ser:  
console.log("TEXTO");  

nf((VARIABLE_NUMERICA), 0, 2) ; //Redondear de 0 a 2 cifras
if (VARIABLE)
