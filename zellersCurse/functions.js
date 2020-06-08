/**
Exercici 8
L’usuari introdueix un any i el programa diu si dia 1 de gener de l’any introduït és diumenge
 */

function checkZeller(){
    
    //pintado
    let text;

    //data
    let year = parseInt(document.getElementById('num1').value);

    //week arr
    let week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    //for the sake of the exercise I declare day and month
    let d = 1;

    let m = 1;
    
    /**
      Note: This algorithm assumes Jan + Feb are the 13th & 14th month of the previous year. 01 26 1986 = 13-26-1985.
        and THAT is important to remember!!!
     */
    //correction of the 14 months in zellers formula 13 = Jan, 14 = Feb 
    
    if (m < 3) {

        m += 12;

        year--;
    }
    
    //zeller's formula that I can't in any possible way explain
    //first part I need to still sort it out
    //second part checks the leap years and its days

    let dayToFind = parseInt(( d + ((13 * (m + 1)) / 5) + year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7);


    let mightBeSunday = week[dayToFind];

    //checks
    //Remember the previous Note? Therefore year + 1!!

    (mightBeSunday == "Sunday") ? text = "The first of January of" + " " + (year + 1) + " " + "was Sunday" : 
                               
                            text = `${mightBeSunday} of ${year + 1} wasn't Sunday at all!`;

   document.getElementById('demo').innerHTML = text;

}



/************************** DOCUMENTACIÓN *************************/
//https://es.wikipedia.org/wiki/Congruencia_de_Zeller#:~:text=La%20congruencia%20de%20Zeller%20es,de%20cualquier%20fecha%20del%20calendario.

//https://repl.it/@nat4/Zellers-Congruence#main.js

//Rosa Maria con su if. Me ha ayudado a entender la correccion


