Instrucciones de Implementación

Bienvenidos al reto 5, para cumplirlo deberán seguir lo siguiente:

1. Ver el video de explicación de reto.

2. Tienen los siguientes recursos: HTML y parte del css y js*
   
   * Acá les damos una estructura y una guía de cómo deben hacerlo sientanse libres de cambiar el código en donde necesiten para llegar al resultado final.

3. Deberán completar el css y el js para que el reto funcione.

Resultado: El reto debe ser igual al que visualizan en el video.

¡HINTS!

CSS

La imagen a usar es : https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80

deberá tener propiedades para que se vea exactamente igual al video.

Para crear el efecto pordrán usar la propiedad filter: blur (averiguar como funciona)

Dentro del reto vemos una Imagen After y una Before, donde se ve la diferencia en los bordes, buscar los valores adecuados para llegar a la imagen Before.


JS

 - Validar paso a paso hacer uso de console.log() y la herramienta de desarrollador - 

Crear una función llamada blurring que se encargará de realizar:

- El conteo de carga, dentro de la misma deberán crear un condicional que permita visualizar los números de 1 a 100% (probar con console.log)
- Una vez tengan el conteo podrán realizar un innerText para que cambie el valor de la numeración (esta propiedad establece o devuelve el contenido de texto del nodo especificado.)
- Una vez tengamos el paso anterior deberán tener en cuenta lo siguiente:

Para terminar el ejercicio debemos tener en cuenta que el valor de opacidad no será el valor de carga porque va de 0 a 100 y 
la opacidad va de 0 a 1, por lo que comenzará en nuestro caso, completamente opaco entonces iremos de 1 a 0, teniendo en cuenta lo siguiente entonces necesitamos una función específica
que nos ayude a realizar un mapa de rango de números.  (básicamente de cero a 100 para pasar de uno a cero en la misma cantidad de tiempo.)

revisar cómo hacerlo a través de Javascript y cómo aplicaría esa función en los números de carga y en el blur del efecto.  buscar "mapear un rango de números a otro rango de números"

