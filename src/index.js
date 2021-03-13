/// Función para guarar el nombre
function validar() {
  let nombre = document.getElementById("nombre").value;
  localStorage.setItem("nombre", nombre);
  window.location.href = "index.html" 
}

//
import validator from './validator' ;
let validarnumero = document.getElementById("validarnumero");
validarnumero.addEventListener("click") , ()  => {
}

validarnumero.addEventListener("click") , ()  => {
Event.preventDefault();

let numeroi = document.getElementById("creditCardNumber").value;

let resultado = validator.isValid("validarnumero");
