
const numberOdds = () =>{
    
    let num1, num2, result;



    num1 = document.getElementById('num1').value;

    num1 = parseInt(num1);

    num2 = (num1 % 2 === 0) ? result = (`El ${num1} es par!`) : result = (`El ${num1} es inpar!`);

    
    document.getElementById('demo').innerHTML = result;
}






