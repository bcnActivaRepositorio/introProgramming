
const productNum = () =>{
    let result;

    //arr 1- 10
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let lengthArr = arr.length;

    //recogida datos
    let multiplyNumber = document.getElementById('num1').value;

     //NUMERAL
    multiplyNumber = parseInt(multiplyNumber);


/************************FUERZATE a hacerlo con for loop************************************/
    //

    //new arr insertar num for
    let arr2 = [];

    //loop

// No recordaba el let of cuando ya tenemos un elemento iterable!
    for (let i of arr){

         //multiplicación
         result = multiplyNumber * i;

         //introducción  values array 
         // arr2.push("<br/>" + i + "x" + multiplyNumber + "=" + result );
          arr2.push("<br/>" + ` ${i} x ${multiplyNumber} = ${result} `);

    }

    document.getElementById('demo').innerHTML = `La tabla de multiplicar por el num introducido es: ${arr2}`;

    
}



/******************loop SIN arr creada*********************************************************/

    /* for (let i = 1; i <= 10; i ++){

        //multiplicación 
        result = multiplyNumber * i;

        //introducimos values in the new arr
        arr2.push(result);
    } */


/*************************Para los PRO de clase*************************************************/

    //recorrido arr multiplicando Higher function
    //Why me es más fácil el avión que el coche? Dammn it!!

    //result = arr.map((numeros) => numeros * multiplyNumber);

    /**
     * En este caso mato moscas a cañonazos, pero me impresiona el poder de map, reduce y filter
     */

     
/*********************************************************************************/
         //usamos lengthArr así sólo itera una vez y ya sabe el length. 
    //Si usara i<=10 o i<=arr.length itera CADA vez para saber el numero de elementos de la array!
    //En este caso es indiferente(10 e) pero una base de datos con decenas de miles...

/*     for (let i = 1; i <= lengthArr; i ++){
        
        //multiplicación
        result = multiplyNumber * i;

        //introducción  values array 
         arr2.push(result);
    } */
