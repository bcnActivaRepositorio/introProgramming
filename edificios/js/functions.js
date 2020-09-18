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

let hotelArr    = [];

let hospitalArr = [];

let cinemaArr   = [];

//pintado
let text, text1, text2, text3;

//listeners
document.getElementById('boton1').addEventListener('click', openingHotels);

document.getElementById('boton2').addEventListener('click', checkHotels);

document.getElementById('boton3').addEventListener('click', updateHotels);

document.getElementById('boton4').addEventListener('click', deleteHotels);



//opening the courtains
function openingHotels(str, num1, num2, num3){

    //data

    let name = prompt('Name the Hotel');

    name = clearStr(name);

    let height = parseInt(prompt('How many floors does it have'));

    let numRooms = parseInt(prompt('How many rooms does it have?'));

    let area = parseInt(prompt('How many m2 does it have?'));
    /* let name = str;
    let height = num1;
    let numRooms = num2;
    let area = num3; */


    // lets create hotels
    let myHotel = [];

    //check
    let find = false;

    // lets find it

    for (let hotel of hotelArr){

        if ( hotel.name == name) find = true;
    }

    if(!find){

        myHotel = new Hotel(name, height, numRooms, area);

        //empenyem cap arr

        hotelArr.push(myHotel);

        console.log(hotelArr);

        alert(`The ${myHotel.name} has been constructed`);
    }else {

        text = ('Already in the data base!');

        alert(text);
    }

    

}

 let myHotel1 = new Hotel("Colon", 5, 50, 300);
 hotelArr.push(myHotel1);
 let myHotel2 = new Hotel("Californi", 1, 15, 400);
 hotelArr.push(myHotel2);
 let myHotel3 = new Hotel("Zurich", 2, 19, 700);
 hotelArr.push(myHotel3);
 let myHotel4 = new Hotel("HH", 10, 70, 1375.58);
 hotelArr.push(myHotel4);
 let myHotel5 = new Hotel("Abbey", 1, 5, 100);
 hotelArr.push(myHotel5);
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