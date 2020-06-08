
const numberOdds = () =>{
    
    let num1, num2, result;



    num1 = document.getElementById('num1').value;

    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;

    num2 = parseInt(num2);


    (num1 >= num2) ? result = (num1 + num2) / 2 : alert("El primer numero debe ser mayor que el segundo");

    document.getElementById('demo').innerHTML = `La media de los numeros es ${result}`
}






