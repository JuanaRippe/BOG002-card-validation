const validator = {
  // OBJETO ISVALID
 isValid: function (numeroi) {
// Convertimos el string en un array
    let creditCardNumber = numeroi.split("");
// Inviertimos el array 
     let reversarNumero = creditCardNumber.reverse();
// Declaramos la variable suma 
     let suma = 0;
// Recorremos el array
      for (let i=0; i<reversarNumero.length; i++) {
        let orden = parseInt(reversarNumero[i]);
          if (i % 2 != 0) {
// Multiplicamos los números de las posiciones pares
          orden = orden * 2;
// Si queda un número de dos digítos se saca el residuo y se le suma 1
          if (orden > 9) {
              orden = 1 + (orden%10);
          }
        }
       suma += orden;
      }
      if (suma%10==0){
          return true;
      } else {
          return false;
      }
   },
// OBJETO MASKIFY
   maskify: function(numeroi){
    let resultados = '';
    for(let i=0; i<numeroi.length;i++){
        if (i>=numeroi.length-4){
         resultados += numeroi[i];
        }else{
          resultados += "#";
        }
     }
    return resultados;
    }

};

export default validator;





/*isValid:function(validarnumero)
 let numero = document.getElementById("validarnumero").value;
 localStorage.setItem("creditCardNumber", numero); 
console.log (invertirNumero(numero));
/* Función para reverar el número  "123" => ["1","2","3",] => ["3","2","1"] => con .join("") = "321"console.log(validator);
function invertirNumero(numero)
return (numero.toString().split("").reverse())

let suma=0

}; */


