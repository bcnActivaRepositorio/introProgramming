

/* const fibonacci = () =>{

    //recogida datos
    let number = parseInt(document.getElementById('num1').value);

    //pintado pantalla
    let pintar = "0, 1";

    //resultado
    let resultado = 0;

    //numeral
    let var1 = 0;

    let var2 = 1;

    //creacion loop
    for (let i = 0; i <= number; i++){

        resultado = var1 + var2;

        pintar += resultado + ", ";

        var1 = var2;

        var2 = resultado;



    }

    document.getElementById('demo').innerHTML = "Los numeros de la serie fibonacci son:" + fibonacciNumbers + " "
} */
const miFunction = () =>{

       //recogida datos
       let number = parseInt(document.getElementById('num1').value);

       fibonacci(number);

}

const fibonacci = (num) =>{

  let arr = [];

  for( let i = 0; i < num; i++){

    (i == 0) ? arr.push(0) :

    (i == 1) ? arr.push(1) : arr.push(arr[i - 1] + arr[i - 2]);

  }


    

    document.getElementById('demo').innerHTML = "Los numeros de la serie fibonacci son:" + arr + " ";
}


/************************** DOCUMENTACION *********************************************************/


