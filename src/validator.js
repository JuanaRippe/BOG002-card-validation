const validator = {
  // OBJETO isValid

  isValid: function (numeroi) {
    let creditCardNumber = numeroi.split("");
     let reversarNumero = creditCardNumber.reverse();
     let suma = 0;
      for (let i=0; i<reversarNumero.length; i++) {
        let orden = parseInt(reversarNumero[i]);
          if(i % 2 != 0){
          orden = orden * 2;
          if (orden > 9){
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
   maskify: function(numberCard){
    let resultados = '';
    for(let i=0; i<numberCard.length;i++){
        if (i>=numberCard.length-4){
         resultados += numberCard[i];
        }else{
          resultados += "#"
        }
     }
    return resultados;
    }

};
export default validator;
