const palindromo = () =>{

    //data
    let stringOriginal = document.getElementById('word1').value;

    //check
    (palindromo == "") ? stringOriginal = prompt('Escribe tu frase o palabra!') : true;

    //pintado
    let text;

    //check regex
    let reg = /[\W_]/g;

    //if not a word, puff dissapear
    let smallString = stringOriginal.toLowerCase().replace(reg, '');

    //Hay que darle la vuelta
    //split, separa
    //reverse, ya, no?
    //join, deshace split, archienemigos

    let reverseString = smallString.split('').reverse().join('');

    //comparamos strings
     (smallString === reverseString) ? text = `${stringOriginal} es un palindromo` :
    
                                       text = `${stringOriginal} no es un palindromo`;

    //pantalla
    document.getElementById('demo').innerHTML = text;

    

}

