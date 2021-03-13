const validator = {

isValid:function(validarnumero)
 let numero = document.getElementById("validarnumero").value;
 localStorage.setItem("creditCardNumber", numero); 
console.log (invertirNumero(numero));
/* Función para reverar el número  "123" => ["1","2","3",] => ["3","2","1"] => con .join("") = "321"console.log(validator);*/
function invertirNumero(numero)
return (numero.toString().split("").reverse())

let suma=0

};

//export default validator;
