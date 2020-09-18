'use strict'
/**
 * Solo he conseguido hacer la construcción de un hotel!!!
 * 2:44AM
 * A revisar el acceso a super....NO accedo al area y instaceof no me aclara nada
 * Solucinado! Gracias a Rosa Maria, si no, no lo veo.
 * 
 * revisar set y get
 * 
 * 10:15 AM Que sueño. Quiero revisar los for por los while, recuerdo que eran más efectivos!
 * Sólo una hora, bbdd
 * 
 * !important
 * 
 * TODO fuera del bucle for if, si no infierno eterno en un loop hasta que se acaba el array!
 * 
 */

//containers arr
let uniqueArr   = [];

let hotelArr    = [];

let hospitalArr = [];

let cinemaArr   = [];


//listeners
//document.getElementById('boton1').addEventListener('click', openingHotels);

document.getElementById('boton1').addEventListener('click', openingBuildings);

document.getElementById('boton2').addEventListener('click', checkHotels);

document.getElementById('boton3').addEventListener('click', updateHotels);

document.getElementById('boton4').addEventListener('click', deleteHotels);

function openingBuildings(){

    //hoteles
    let myHotel1 = new Hotel("Colon", 5, 50, 300);
    uniqueArr.push(myHotel1);
    let myHotel2 = new Hotel("Californi", 1, 15, 400);
    uniqueArr.push(myHotel2);
    let myHotel3 = new Hotel("Zurich", 2, 19, 700);
    uniqueArr.push(myHotel3);
    let myHotel4 = new Hotel("HH", 10, 70, 1375.58);
    uniqueArr.push(myHotel4);
    let myHotel5 = new Hotel("Abbey", 1, 5, 100);
    uniqueArr.push(myHotel5);

    //hospitales
    let myHospital1 = new Hospital("Hospital Vall Hebron", 20, 1500, 20000);
    uniqueArr.push(myHospital1);
    let myHospital2 = new Hospital("Hospital Clinic", 20, 1950, 30000);
    uniqueArr.push(myHospital2);
    let myHospital3 = new Hospital("Hospital del Mar", 7, 975, 5000);
    hotelArr.push(myHospital3);
    let myHospital4 = new Hospital("Hospital Sant Pau", 10, 890, 1375.58);
    uniqueArr.push(myHospital4);
    let myHospital5 = new Hospital("Hospital General", 30, 2500, 40000);
    uniqueArr.push(myHospital5);

    //cines
    let myCinema1 = new Cinema("Verdi", 2, 1300, 100, 75, 3);
    uniqueArr.push(myCinema1);
    let myCinema2 = new Cinema("Urquinaona", 1, 2000, 100, 75, 4);
    uniqueArr.push(myCinema2);
    let myCinema3 = new Cinema("Florida", 2, 700, 100, 75, 2);
    hotelArr.push(myCinema3);
    let myCinema4 = new Cinema("Renoir", 1, 1375.58, 100, 75, 3);
    uniqueArr.push(myCinema4);
    let myCinema5 = new Cinema("Castilla", 1, 400, 100, 75, 2);
    uniqueArr.push(myCinema5);

}


console.log(uniqueArr);
//check Hotels

function checkHotels() {

    //check
    let find = false;

    let name = prompt('What Hotel are you looking in our database?');

    name = clearStr(name);
    
    //container
    let hotelFound;

    //while
    let i = 0;

    //iterate over and over. I'll try with while!
    for( let i = 0; i < hotelArr.length; i++){

       if (hotelArr[i].name == name) {

        find = true;

        hotelFound = hotelArr[i];

       }
    }

    if(find == true) {
        
        alert(`The ${hotelFound.name} is in our database`);

    let knowCost = prompt('Would you like to know how much does it cost to keep it going?\n YES\n NO');

    knowCost = clearStr(knowCost);

    (knowCost == "Yes") ? alert(`${hotelFound.clean()} is the cost in cleaning and ${hotelFound.costGuardsHotel()}`) :
    
                          alert('Ignorance is blessing!');
    } else {
        
        alert(`The ${name} Hotel is NOT in our database`);

    }


    console.log(hotelFound.costGuardsHotel());
}
//update database
function updateHotels(){

    //data
    let name = prompt('Which is the Hotel requested?');

    name = clearStr(name);

    //check choice number
    let numOption;

    //declaration while
    let i = 0;

    //check
    let find = false;

    //container
    let updateHotel;

    do {
        //until a choice..
        numOption = prompt('Would you like to update: \n 1 Rooms\n 2 Height\n 3 m2 ');

    } while (numOption < 1 || numOption > 3);

   for (let hotel of hotelArr){

        //IMPORTANTE NO SEAS TAN GUAY
        //if (hotel.name == name) find = true
        //updateHotel = hotel;
        //mas de un linea en el if sin llaves DA PROBLEMAS TARUGO
        //itera por TODO el arr y da valor del último elemento!!

        if (hotel.name == name) {
            
            find = true;

        updateHotel = hotel;

        }
   }

   //cases escenarios
   switch (true) {
       case numOption == 1:

        //update 
        updateHotel.numRooms = prompt('How many rooms?');
           
           break;
   
       case numOption == 2:

        //update 
        updateHotel.height = prompt('How many floors?');
           
           break;

       case numOption == 3:

        //update 
        updateHotel.area = prompt('m2?');
           
           break;

       default:

       console.log('update is not working');

       alert('Mira la consola');

           break;
   }

   console.log(updateHotel)
   console.log(hotelArr)
   
   alert(`The ${updateHotel.name} has updated: ${updateHotel.numRooms} rooms, ${updateHotel.height} floors and ${updateHotel.area}m2`);

}
//final act at 2:17 AM
function deleteHotels(){

    //data
    let name = prompt('Which is the Hotel requested?');

    name = clearStr(name);

    //check
    let find = false;

    //while
    let i = 0;

    //containers
    let deleteHotel, toDelete;
    //referencia hotel 1.0 y 1.1

    //while
    //let's try
    while (i < hotelArr. length && !find) {

        if ( hotelArr[i].name == name){

            find = true;

            toDelete = hotelArr[i];

            hotelArr.splice(hotelArr.indexOf(toDelete), 1);

            alert("Terminated." +" "+ toDelete.name +" Hotel has been erase!");
        }
     
        i++;
    }

     if (find == false) alert(`The ${name} Hotel is not in our database!`);
        
    console.log(hotelArr);

    deleteHotel = hotelArr.map((e) => e.name)

    alert(`${deleteHotel} still in the database`);
}


//clena str
const clearStr = (str) =>{

    //cleaning
 str = str.replace(/\s/g, "");

 str = str.toLowerCase();

 //Capitalise
 str = str.charAt(0).toUpperCase() + str.slice(1);

 return str;
}


/* openingHotels('Hilton', 12,250,6000);
openingHotels('Waldorf', 12,250,3000);
openingHotels('Wella', 12,250,4000);
openingHotels('Mandarin', 12,250,7000);
openingHotels('Ritz', 12,250,1000);
openingHotels('Astoria', 12,250,3000); */

/*****************DOCUMENTACION ************************************/
//https://teamtreehouse.com/library/create-an-array-of-objects

//muny!
//https://www.youtube.com/watch?v=p7VVvJAsXWg
//https://flaviocopes.com/how-to-format-number-as-currency-javascript/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

//Math
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
//https://www.w3schools.com/JSREF/jsref_tofixed.asp