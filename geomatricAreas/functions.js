
const number = () =>{
    //recogida datos
    let numero = document.getElementById('num1').value;

        numero = parseInt(numero);

    return numero;
    //devuelve el numero que luego se utiliza como parametro
    //colocamos el parametro en la llamada de la funcion en el html
}

function square(num) {

    let squareNumber = num * num;

    document.getElementById('demo').innerHTML = "El cuadrado mide" + " " + Math.round((squareNumber * 10) / 10) + "m2";
}

function circle(num){

    let circleNumber = Math.PI * (num * num);

    document.getElementById('demo').innerHTML = "El area total del círculo es de:" + " " + Math.round((circleNumber * 10) / 10) + "m2";
}

function rectangle(){

    //datos
    let sideOne = document.getElementById('num4').value;

        sideOne = parseInt(sideOne);

    let sideTwo = document.getElementById('num5').value;

        sideTwo = parseInt(sideTwo);

    let rectangleNumber =  (sideOne * sideTwo);

    document.getElementById('demo3').innerHTML = "El area total del rectángulo es de: " + Math.round((rectangleNumber * 10) / 10) + "m2";
}

function triangle(){

    //datos
    let base = document.getElementById('num2').value;

        base = parseInt(base);

    let area = document.getElementById('num3').value;

        area = parseInt(area);

    let triangleNumber = (base * area) / 2;

    document.getElementById('demo2').innerHTML = "El area del triángulo rectángulo es de " + Math.round((triangleNumber * 10) / 10) + "m2";
}


/************************** DOCUMENTACION *********************************************************/
//

