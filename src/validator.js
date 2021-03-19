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
// Se declara una variable para convertir un string en un número base
        let orden = parseInt(reversarNumero[i]);
// Obtenemos las posiciones pares
          if (i % 2 != 0) {
// Multiplicamos los números de estas posiciones
          orden = orden * 2;
// Si queda un número de dos digítos 
          if (orden > 9){
// Se le saca el residuo y se la suma 
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
    },

};
export default validator;
