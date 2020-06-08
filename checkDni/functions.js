

const letraDni = () =>{

    //recogida datos
    let dniNumber = parseInt(document.getElementById('num1').value);

    let letraDni = document.getElementById('word').value;

    //vitaminada
    letraDni = letraDni.toUpperCase();

    //check
    let letters = /^[A-Za-z]+$/;

    while (letraDni !=  letraDni.match(letters)){

        letraDni = prompt('Escriba una letra, no números');
    

    //num greater than an double check
   while  ((dniNumber <= 0 || dniNumber > 99999999) && dniNumber.length != 8){

        dniNumber = prompt("No es un DNI correcto. Again!");

        dniNumber = parseInt(dniNumber);

    } 
}

    //letras dni
    let words ="TRWAGMYFPDXBNJZSQVHLCKET";

    //si el resto es cero...
    let position = dniNumber % 23;

    //encontrar la letra cortar DESDE la posicion que de la division y LA letra correspondiente
   // let word = words.substring(position, position + 1);

    //solucion Isaac utilizando el resultado como indice... ¿por qué yo no puedo pensar así just yet?
    let word = words[position];

    //pintado pantalla
    let text;   

    //(word == letraDni) ? text = true : text = false;
    (word == letraDni) ? text = `El DNI es correcto` : text = `El DNI es incorrecto`;

    console.log(letraDni);
    console.log(word);
    
    document.getElementById('demo').innerHTML = text;

}

/************************** DOCUMENTACION *********************************************************/
//https://www.lawebdelprogramador.com/foros/JavaScript/1352895-ayuda-para-calcular-la-letra-del-DNI.html
//primera respuesta es la genial, no codigo, no bajar scroll.

//substring
//https://www.w3schools.com/jsref/jsref_substring.asp

