import validator from './validator.js';
/* Función para guarar el nombre */
function validar(){         
/* Creamos una variable para llamar al nombre */
    let nombre = document.getElementById("nombre").value;
/* Lo guardamos en el localStorage */
     localStorage.setItem("nombre", nombre);
/* Referimos la página siguiente */
     window.location.href="html/tip.html" 
    }

/* Función para guardar el número  */
    function siguiente(){
/* creamos una variable para guardar el número ingresado */    
    let numero = document.getElementById("numeroi").value;
/* Lo guardamos en el localStorage */
     localStorage.setItem("numero:", numero); 
/* Mostramos en la consola el número invetrido y en un array */
     /* console.log (invertirNumero(numero)); */ 
    
    }
/* Función para volver el número un array  "123" => ["1","2","3"]*/
    function invertirNumero(numero){
    let creditCardNumber = numero.split("")
    let reversarNumero = creditCardNumber.reverse();
    return reversarNumero
  
    }
    let x = invertirNumero("123467")


    console.log (x)
    let multiplicacion = [0, 0];
    let reversarNumero = "1,2,3"
     for ( let i = 0; i<reversarNumero.length; i++ ){
       if( i % 2 === 0);{

       }
    }
  
  
console.log(validator);
