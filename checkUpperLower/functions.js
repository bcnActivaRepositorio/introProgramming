const checkStr = () =>{

    //datos
    let sentence = document.getElementById('word1').value;

    //Intanciamos
    let text;

    //cleaning of white spaces  back and forth
    sentence = sentence.trim();

    //check
    while(parseInt(sentence) == +sentence){

        sentence = prompt('Words are needed to fuel me!');
    }

    //work done
    (sentence == sentence.toUpperCase()) ? text = "The line is all Uppercased!" :

    (sentence == sentence.toLowerCase()) ? text = "The line is all Lowercased!" :

                                           text = "The line has got both, Uppercase and Lowercase typo!";
   

    document.getElementById('demo').innerHTML = text;
}



/************************** DOCUMENTACIÓN *************************/
//pero como me lio yo solo la troca!!! buff 

// Gracias a Daniel Fernandez por darme zasca en toda la cara!

/**
 * Exercici 6
Comprovar si una frase introduïda per l’usuari està formada només per minúscules, només per
majúscules o per minúscules i majúscules.
 */