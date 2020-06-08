const orderNumbers = () =>{

    //container new arr
    let arr = [];

    let arr1 = [];

    //data
    let numbersEntered = document.getElementById('word1').value;


    //separador
    let separatedNumbers = numbersEntered.split(",");

    //check
  

    let size = separatedNumbers.length;

    //todos o ninguno!!

     // (separatedNumbers.filter((num) => !isNaN(parseInt(num))));

    for (let i = 0; i < size; i++ ){

         arr.push(parseInt(separatedNumbers[i]));

    }

    //insertion (spoiler!) reversed
    let largo = arr.length;

    for (let i = largo - 1; i >= 0; i--){

        //posicion a mover hacia la dech
        let j = i + 1;

        //donde se guardan los numeros de manera temporal para compararlos
        let temp = arr[i];

        //mientras los numeros sean mayores los movemos a la izq
        while( j < largo && arr[j] >= temp){

            // movemos elemento derecha, incluidos los temporales y ya sorted(debug para verlo!), hacia la izqu
            arr[j - 1] = arr[j]

            j++
        }
        //colocamos num en posicion y almacenamos ese num en la base temporal
        arr[j - 1] = temp;
    }



     console.log(separatedNumbers);
     console.log(arr);




    
    let node =  `The sorted array of numbers is <strong>${arr}</strong>`;

    document.getElementById('demo').innerHTML = node;

}
/************************************************** DOCUMENTACIÖN  **********************************/
//check references
//https://stackoverflow.com/questions/32817027/check-if-an-array-contains-only-numeric-values

/**Bajo orden del jefe supremo, no os puedo revelar las fuentes de mi código!
 * 
 * but the true is out there!!! 
 * 
 * P.S. Ejercicio que NO hubiera podido hacer sin esas fuentes, y al que debo seguir dándole
 * 
 * la vuelta para aplicar, ya que entiendo la mecánica pero no soy capaz, yet, de expresar en téminos 
 * 
 * de programación. 
 */
