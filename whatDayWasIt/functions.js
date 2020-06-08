
/**
 * Exercici 8
L’usuari introdueix un any i el programa diu si dia 1 de gener de l’any introduït és diumenge
 */

const checkDay = () =>{

    //data
    let year = parseInt(document.getElementById('num1').value);

    //answer
    let text;

    //arr week in English, otherwise not Sunday to find or create key : value or adapt the arr
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //check on first day of Jan
    let findDay = new Date(year, 0, 1);

    console.log(findDay);

    //numbers numbers
    //getDay only returns a number from 0 to 6, look upon you at the arr of week and check index
    //yep, that is right. getDay() tells you the position of that array
    let dayOfWeek = findDay.getDay();

    //therefore, if the number obtained in dayOfWeek === 0 => week[0] = "Sunday"
    (dayOfWeek === 0) ? text = "The first of January of" + " " + year + " " + "was Sunday" : 
                               
                               text = `${week[dayOfWeek]} of ${year} wasn't Sunday at all!`;

    
    document.getElementById('demo').innerHTML = text;

}

/*************************DOCUMENTACION **********************/
//https://www.w3schools.com/jsref/jsref_getday.asp

//https://www.geeksforgeeks.org/how-to-get-the-first-day-of-the-year-in-javascript/