
const signDraw = () =>{

   /**
    * Fer un programa on l’usuari introdueix per pantalla un caràcter i un número. El programa imprimeix
      per pantalla un quadrat amb la mida i el caràcter introduïts per l’usuari.
      Exemple:
      % % % % %
      % % % % %
      % % % % %
      % % % % %
      % % % % %
    */
    //declarcion container
    let draw = "";

    //datos
    let drawSize   = parseInt(document.getElementById('num1').value);

    let signToDraw = document.getElementById('signo').value;

    //loop x br
    for(let i = 0; i < drawSize; i++){

        //loop for the sign
        for (let j = 0; j < drawSize; j++){

            draw += signToDraw + " ";
        }

        //salto de mata
        draw += "<br/>";

    }

    document.getElementById('demo').innerHTML = draw;

}



/***********************************************************************************/

