

const toFahrenheit = () =>{

    //formula grados a fare  (0 × 9/5) + 32 
    //recogida datos
    let grados = parseInt(document.getElementById('num1').value);

    let fahren = ((grados * 9/5) + 32);

    document.getElementById('demo').innerHTML = "Temperatura en Fº:" + Math.round((fahren * 100) / 100);
}

const toCelsius = () =>{

    //formula fare to c  (32 − 32) × 5/9 
    //recogida datos
    let temperature = parseInt(document.getElementById('num1').value);


    let centiGrados = ((temperature - 32) * 5 / 9);

    document.getElementById('demo1').innerHTML = "Temperatura en Cº :" + Math.round((centiGrados * 100) / 100);
}


/************************** DOCUMENTACION *********************************************************/
//

