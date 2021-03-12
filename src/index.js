/// Función para guarar el nombre */
function validar() {
  let nombre = document.getElementById("nombre").value;
  localStorage.setItem("nombre", nombre);
  window.location.href = "html/tip.html" 
}
/* Función para guardar el número  */
import validator from './validator.js';
let numero = document.getElementById("creditCardNumber").value;
     localStorage.setItem("creditCardNumber", numero); 
     console.log (invertirNumero(numero));
/* Función para reverar el número  "123" => ["1","2","3",] => ["3","2","1"] => con .join("") = "321"console.log(validator);*/
function invertirNumero(numero)
return (numero.toString().split("").reverse());
}