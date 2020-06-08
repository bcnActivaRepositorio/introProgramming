const checkStr = () =>{

    //datos
    let sentence = document.getElementById('word1').value;

    //Intanciamos
    let text;

    //letters containers
    let str      = "";

    let minors   = "";

    let capital  = "";

    let integers = "";

    //cleaning of white spaces between and back and forth
    sentence = sentence.replace(/\s/g,"");

    sentence = sentence.trim();

    let large = sentence.length - 1;

    //loop para evitar convertirlo en arr , en orden descendente!!
    for (let i = large; i >= 0; i--){

            //no añado el += pk no quiero conservar todos los elementos, solo el ultimo
        str = sentence[i];

        (isUpper(str) == true) ? capital += str :

        (isLower(str) == true) ? minors += str :

        (checkNum(str) == true) ? integers += str : text = "Something went terrible wrong!";

    }
    
    text = "This line has got" + " " + minors.length + " " + "lower letters," + " " + capital.length + " " + "capital letters and" + " " + integers.length + " " + " numbers all together!";

    document.getElementById('demo').innerHTML = text;
}

const isUpper = (element) => /^[A-Z]*$/.test(element);

const isLower = (element) => /^[a-z]*$/.test(element);

const checkNum = (element) => /^[0-9]+$/.test(element);


/************************** DOCUMENTACIÓN *************************/
// ejercicio reversed word del finde pasado
//comencé con arrays i sentence.split('') y me acordé de la solucion de Joan