

const miFunction = () =>{

       //recogida datos
       let number = parseInt(document.getElementById('num1').value);

       fibonacci(number);


}

const fibonacci = (num) =>{

  //declaraciones
  let arr = [];

  let text;

  //no maths in for
  let extension = arr.length;

  //fibo's series
  for( let i = 0; i < num; i++){

    (i == 0) ? arr.push(0) :

    (i == 1) ? arr.push(1) : arr.push(arr[i - 1] + arr[i - 2]);

  }
  //is inside fibo's
  for ( let i = 0; i < arr.length; i++){

    (arr[i] === num) ? text = num + " " + "está dentro de la serie de Fibonacci" :

  
                        //else
                        text = num + " " + "no está dentro de la serie de Fibonacci";
  
 // (arr.includes(num)) ? text = num + " " + "está dentro de la serie de Fibonacci" :

  //                      text = num + " " + "no está dentro de la serie de Fibonacci" ;
    
}
    document.getElementById('demo').innerHTML = text;
}


/************************** DOCUMENTACION *********************************************************/


