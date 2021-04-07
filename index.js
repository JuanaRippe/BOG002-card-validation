// Traemos botón para guardar el nombre 
  // let nombre = document.getElementById("validar");



import validator from './validator.js';
// Traemos el botón por medio de un id
let validarNumero = document.getElementById('validarNumero');
// Evento para mostar mensaje al oprimir el boton validar
validarNumero.addEventListener ('click', () => {
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
  document.getElementById('ocultar').innerHTML = `${'*SU  TARJETA ES:   '}${ocultar} `; 

  let texto;
  if (resultado === true) {
    texto = '<span style = "color: #8ff38f;"> VÁLIDA </span>';
    document.getElementById('valiNum').innerHTML = texto;
    return false;
  }
  texto = '<span style = "color: #f38f8f;"> INVÁLIDA </span>';
  document.getElementById('valiNum').innerHTML = texto;
  return false;
});

console.log(validator);
