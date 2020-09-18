function numAl() {
  /**
     * El ejercicio consiste en que cuando se cargue la página, mediante la función: prompt("");
Le pedimos al usuario que introduzca números del 1 al 10 hasta que adivine el número escogido por el programa.
Una vez el usuario ha acertado el número escogido, saldrá un alert por pantalla diciendo: Has acertado! El número era “x” y has necesitado “y” intentos para acertar!
     * 
     */

     //recoger dato user
     //generar random
     //guardar ambos
     //do ==> compara random y dato while ==> no lo adivines

     //declaramos dato user
     //declaramos dato user
     let numUser;

     //declaramos random
     let randomNum = Math.ceil((Math.random() * 100)+ 1);

     //contador
    contador = 0;

    //let numInte
   // maxInt = 5;

     console.log(randomNum);

     //respuesta pantalla
     let texto = ("Numero acertado!");


     while(numUser !== randomNum){

          numUser = prompt("introduzca un número del 1 al 100"); 

          numUser = parseInt(numUser);

          contador ++;

        (numUser < randomNum ) ? alert("El número" + " " + numUser + " " + "es más bajo que el número a adivinar!") :

        (numUser > randomNum)  ? alert("El número" + " " + numUser + " " + "es más alto que el número a adivinar!") :  alert("Again!");
     }


     document.getElementById('modo').innerHTML = texto;
}
