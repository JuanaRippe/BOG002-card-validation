/* Función para guarar el nombre
function validar() {
  let nombre = document.getElementById("nombre").value;
  localStorage.setItem("nombre", nombre);
} */

import validator from './validator.js';
// Traemos el botón por medio de un id
let validarNumero = document.getElementById('validarNumero');
// Evento para mostar mensaje al oprimir el boton validar
validarNumero.addEventListener('click', () => {
});
// Evento para la validación
validarNumero.addEventListener('click', (Evento) => {
  Evento.preventDefault();
// Traemos el número ingresado por el usuario
  let numeroi = document.getElementById('numeroi').value;
// Importamos el objeto iValid y Maskify
  let resultado = validator.isValid(numeroi);
  let ocultar = validator.maskify(numeroi);

// Mensaje que se va a mostrar
  document.getElementById('ocultar').innerHTML = `${'*SU  TARJETA '}${ocultar}ES: `;

  let texto;
  if (resultado === true) {
    texto = '<span> VÁLIDA </span>';
    document.getElementById('valiNum').innerHTML = texto;
    return false;
  }
  texto = '<span> INVÁLIDA </span>';
  document.getElementById('valiNum').innerHTML = texto;
  return false;
});

console.log(validator);
