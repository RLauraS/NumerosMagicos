/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */
function leerDatoFormulario(e){
    //e= objeto event
    e.preventDefault();
    console.log(e);
    console.log('Desde acá la funcion del formulario')
  let input = document.querySelector('input')
  //en este caso porque es el unico que tiene, sino al menos emi suele usar mucho getElementById
  let datoIngresado= input.value; //en el caso del input es en el unico en que no saco el dato del innerHTML sino que tengo que usar .value .TRAE UN OBJETO//SI QUIERO TRABAJARLO A POSTERIOR VARIAS PROPIEDADES ME CONVIENE TRAERLO COMO OBJETO
  console.log(datoIngresado);
}
