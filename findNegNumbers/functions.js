
const negativos = () =>{

    let result;

    let message = "Hay negativo";
    
    //datos
    let num1Value = document.getElementById('num1').value;

    let num2Value = document.getElementById('num2').value;

    //Number
    num1Value = parseInt(num1Value);

    num2Value = parseInt(num2Value);

    ((num1Value < 0 || num2Value < 0) && (num1Value >= 0 || num2Value >= 0)) ?  document.getElementById('demo').innerHTML = message :

                                                                                document.getElementById('demo').innerHTML = ("Enjoy the silence!");

}






