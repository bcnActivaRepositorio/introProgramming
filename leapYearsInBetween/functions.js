

const yearsTraspas = () =>{

    //recogida datos
    let year1 = parseInt(document.getElementById('num1').value);

    let year2 = parseInt(document.getElementById('num2').value);

    //leapYears arr
    let leapYears = [];

    //pintado pantalla
   // let years = "";  

    //checkpoints
    (year1 > year2) ? year1 = parseInt(prompt('First year must be lower than the second')) :

    (year1 !== parseInt(year1)) ? year1 = parseInt(prompt('Only integers in the first year, you fool!')): 

    (year2 !== parseInt(year2)) ? year2 = parseInt(prompt('Only integers in the second year, you fool!')): true;


    for (let i = year1; i < year2; i++) {
    	

     if ((i % 400 == 0) || (i % 4 == 0 && i % 100 !== 0)) //si sólo se usa if, podemos precindir de las llaves!
     
                leapYears.push(i);

     			//years += " " + i + " ";

}
    //check point
    (leapYears === [""]) ? document.getElementById('demo').innerHTML = ("There are not leap years between them") : //Idea de Carlos!!
   
                     document.getElementById('demo').innerHTML = ("There are " + leapYears.length + " " + "leap years:" + " " + leapYears.join(', '));

}


/************************** DOCUMENTACION *********************************************************/
//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

