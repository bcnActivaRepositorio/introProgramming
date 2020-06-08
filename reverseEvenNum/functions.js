

// First solution
//function
/* const paresInversos = () =>{

    for (let i = 100; i >= 1; i --){

        if ( i % 2 === 0){
           
       document.getElementById('demo').innerHTML += (i + ", ");
           
    }   
  }
};
 */

 /**************************************************************************************** */
//Global var
//
let arr = [];

const paresInversos = () =>{

    for (let i = 100; i >= 1; i --){

        if ( i % 2 === 0){
           
          arr.push(i);           
    }   
  }

  document.getElementById('demo').innerHTML = `The even numbers are: ${arr.join(', ')}.` 
};

//O la importancia de la sintaxis:
/**
 * [i]=> nos permite acceder al indice de una array, pero el metodo push() funciona SÖLO con paréntesis!!!
 * 
 * Una hora perdida ayer por los putos corchetes!!!
 */
//https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/

// Quién esté interesado en la construcción de arr, muy recomendable!! 

//documentación: https://www.freecodecamp.org/forum/t/push-numbers-in-an-array-using-for-loop/217742/3

/***************************************************************************************** */






