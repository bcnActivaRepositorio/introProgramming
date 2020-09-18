
const numberOdds = () =>{
    
    let num, num3, result;

    let num1 = [];

    let num2 = [];

    let total = 0;

     //recogida datos
     num = document.getElementById('num1').value;
     
     num = parseInt(num);

    for (let i = 0; i < num; i++){
        
        total = prompt("Introduzca un numero");
  
    
    result = (total % 2 === 0) ? num1.push(total) : num2.push(total);
}
  /*   do{
        //recogida datos
        num = document.getElementById('num1').value;

        num = parseInt(num);

        //prompt inicial i secuencial
        num3 = prompt("Introduzca un numero");

        num3 = parseInt(num3);

        // is even or odd?
        result = (num3 % 2 === 0) ? num1.push(num3) : num2.push(num3);

        //contador
        total ++;



    } while (total < num ); */

    
    document.getElementById('demo').innerHTML = `Estos numeros: ${num1} son pares`;

    document.getElementById('demo1').innerHTML = `Estos numeros: ${num2} son impares`;
}






