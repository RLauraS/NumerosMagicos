/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */


let formulario = document.querySelector("form");
formulario.addEventListener('submit', leerDatoFormulario);

function leerDatoFormulario(e) {
  e.preventDefault();

  let input = document.querySelector('input');
  let datoIngresado = parseInt(input.value);
  let numeroMagico = getRandomIntInclusive(1, 10);
  console.log(`El número mágico es: ${numeroMagico}`);

  if (datoIngresado === numeroMagico) {
    alert('¡Felicidades, adivinaste el número mágico!');
  } else if (datoIngresado < numeroMagico) {
    alert('El número que ingresaste es menor al número mágico.');
  } else {
    alert('El número que ingresaste es mayor al número mágico.');
  }
}
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

