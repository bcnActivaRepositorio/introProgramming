

const primosNum = () =>{

    //recogida datos
    let introNumber = parseInt(document.getElementById('num1').value);

    //pintado pantalla
    let text;   

   //checkpoint
   (introNumber !== parseInt(introNumber, 10)) ?  introNumber = parseInt(prompt('Only Integers you fool!')) : true;

    //declaramos i = 2 para descartar de entrada los pares!!!
    //recordemos que index va creciendo conforme iteramos sobre él!

    for (let i = 2; i < introNumber; i++ ){

        //(n % 2 === 0) all it begun here!
        (introNumber % i === 0) ? text = (introNumber + " " + "no es un número primo") :  //false ,
                                                                                       

                                  text =  (introNumber + " " + " es un número primo"); //true 

                                  
    } 

    
    document.getElementById('demo').innerHTML = text;

}

/************************** DOCUMENTACION *********************************************************/
//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

