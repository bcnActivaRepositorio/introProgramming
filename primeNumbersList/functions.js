

const primosList = () =>{

    //recogida datos
    let numOne = parseInt(document.getElementById('num1').value);

    //let numTwo = parseInt(document.getElementById('num2').value);

    //pintado pantalla
    let text;   

    //arrs
    let store = [];

    let primos = [];

   //checkpoint
   (numOne !== parseInt(numOne)) ?  numOne = parseInt(prompt('Only Integers you fool!')) : true;

 //el primer for 

    for (let i = 2; i <= numOne; i++ ){

       if (!store[i])

            primos.push(i);

                //left shift
                //let j = i << 1;

                //que hace <<
                //(A << B) => A * (2 ** B) => A * Math.pow(2, B)
                //(170 << 3) => 170 * (2 ** 3) => 170 * 8 => 1360
                //nuestro caso
                //(3 << 1) => 3 * (2 ** 1) => 3 * 1 => 3

            for (let j = i; j <= numOne; j += i){

                store[j] = true;
            }
                                  
    } 

    
    document.getElementById('demo').innerHTML = primos;

}

/************************** DOCUMENTACION *********************************************************/
//primeNumbers
//https://www.w3resource.com/javascript-exercises/javascript-math-exercise-43.php

//bitwise
//https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/


