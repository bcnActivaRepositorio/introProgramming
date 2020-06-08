  //boolean
  let boleano; 

const check = (year) => {

    (year % 400 == 0) ? boleano = true :

    (year % 4 == 0 && year % 100 !== 0) ? boleano = true : boleano = false;

    return boleano;

}

const yearsTraspas = () =>{

    //datos
    let yearIntro = parseInt(document.getElementById('num1').value);

    //declaraciones
    let year       = "";

    let nextYear   = "";

    let yearBefore = "";

    let text;

    //check
    check(yearIntro);

    if (boleano == true){

        text = (yearIntro + " " + "es un año bisiesto");

    } else {

        //find earlier
        yearBefore = yearIntro;

        while(boleano == false){
            
            yearBefore--;

            check(yearBefore);

        }
        //find late ones

        nextYear = yearIntro;

        boleano = false;

        while (!boleano) {
            
            nextYear++;

            check(nextYear)
        }
        
        text = "Los años bisiestos anterior y posterior al año introducido son:" + " " + yearBefore + " y " + nextYear;
    }

    document.getElementById('demo').innerHTML = text;
}


/************************** DOCUMENTACION *********************************************************/


