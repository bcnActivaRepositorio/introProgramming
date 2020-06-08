

const factorialNum = () =>{

    let introNumber = parseInt(document.getElementById('num1').value);

    //num para multiplicación
    let factorialNumber = 1;

    //pintado pantalla
    let text;   

   //checkpoint
   (introNumber !== parseInt(introNumber, 10)) ?  introNumber = parseInt(prompt('Only Integers you fool!')) : true;


    //loop
    // indice se utiliza para multiplicar num introducido
    //no podemos colocar el resultado en introNumber ya que se incrementaria y el index
    //nunca podría ser superior a ese numero. Esa funcion la cumple factorialNumber
    //factorialNumber está establecido en 1 xk si fuera cero, el resultado final sería cero

    for (let i = 1; i <= introNumber; i++ ){

        text = (factorialNumber *= i);
    }

    
    document.getElementById('demo').innerHTML = " The factorial number of" + " " + introNumber + " " + "is:" + " " + text;

}

/***********************************************************************************/

