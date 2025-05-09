# clase-08

no hay clase por interferiado.

## bitácora de proceso

- Giuliano: https://github.com/gaticamartin/audiv027-2025-1/tree/main/arq-01-Giulianocam/clase-08
- Jacob: https://github.com/gaticamartin/audiv027-2025-1/tree/main/dis-08-Jacob-Gidi/clase-08

## Meta inicial:
 
 generar un codigo que funcione como arbitro en el juego "quien pestañea primero", con dos jugadores en pantalla simultaneamente y señalando al primero que la camara reconozca pestañear.
 
 
 ## Pasos a seguir:
 
 1. Configurar FaceMesh
 Usa ml5.facemesh(video) para capturar los 468 puntos del rostro.
 
 2. Identificar los puntos del ojo
 Con FaceMesh, cada parte del rostro tiene índices específicos.
 
 Para los ojos, los más útiles son:
 
 
 Ojo	Índices de puntos útiles
 Ojo derecho	33 (ext), 133 (int), 159, 145 (arriba/abajo)
 Ojo izquierdo	362 (ext), 263 (int), 386, 374 (arriba/abajo)
 
 3. Calcular EAR con esos puntos
 Fórmula para un ojo:
 
 ini
 Copiar
 Editar
 EAR = (dist(159,145)) / dist(33,133)
 Lo mismo para el otro ojo.
 
 4. Detectar el pestañeo
 Si el EAR < 0.2 por un par de frames → pestañeo.
 
 Usa una variable tipo isBlinking para no contar múltiples veces un mismo pestañeo.
