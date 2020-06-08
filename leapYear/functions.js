

const yearsTraspas = () =>{

    //recogida datos
    let year1 = parseInt(document.getElementById('num1').value);

    //pintado pantalla
    let text;   

     (year1 % 400 == 0) ? text = ("Bisiesto") :

     (year1 % 4 == 0 && year1 % 100 !== 0) ? text = ("Bisiesto") : text = ("No es bisiesto")

    
    document.getElementById('demo').innerHTML = text;

}


/************************** DOCUMENTACION *********************************************************/
//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

