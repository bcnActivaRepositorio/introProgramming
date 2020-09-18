/**
Ens demanen crear una aplicació per donar d’alta, modificar, veure i eliminar hotels.
La classe hotel haurà de tenir els següents atributs: nom, nombre d’habitacions, nombre de plantes i superfície total
 de l’hotel. 
Com a mètodes només haurà de tenir els getters i setters propis de la classe i un mètode anomenat calcularManteniment(). 
Aquest mètode ha de tenir en compte que cada persona del servei pot atendre 20 habitacions i haurà de 
mostrar quantes persones són necessàries per atendre el servei d’habitacions de l’hotel i
 quin és el cost total destinat al servei sabent que aquestes persones cobren 1.500€ al mes.
El mètode crearHotel() haurà de demanar a l’usuari que introdueixi per pantalla les dades de nom,  
nombre d’habitacions, nombre de plantes i superfície total de l’hotel. Un cop hagi demanat totes aquestes dades, 
s’ha d’instanciar l’objecte de la classe i afegir-lo a un array d’hotels.
El mètode donarDeBaixaHotel() ha de demanar quin hotel es vol donar de baixa. 
L’usuari introduirà el nom de l’hotel i si l’hotel està dintre de l’array, 
l’eliminarem i mostrarem un missatge per pantalla informant l’usuari que hem eliminat l’hotel. 
Si no hem trobat l’hotel dintre de l’array, avisarem l’usuari dient que l’hotel 
no estava dintre de la nostra aplicació.
El mètode veureHotel() ha de demanar a l’usuari el nom de l’hotel que vol que mostrem per pantalla, 
si l’hotel està a la nostra aplicació, li mostrarem l’hotel, si no hi és, 
informarem l’usuari dient que l’hotel que ens ha demanat no està dintre de la nostra aplicació.
Quan mostrem l’hotel, a més, de mostrar el nombre d’habitacions, nombre de plantes i superfície total de l’hotel
 també es cridarà al mètode calcularManteniment().
El mètode modificarHotel() ha de demanar a l’usuari quin hotel vol modificar.
 L’usuari introduirà el nom de l’hotel. Si el tenim a l’aplicació, li demanarem si 
 vol modificar el nombre d’habitacions, el nombre de plantes o la superfície total de l’hotel. 
 Farem la modificació pertinent i avisarem a l’usuari que la modificació s’ha realitzat.
 */

 /**
  * Me faltan los checks, pero estoy muerto. 1:11 am!!!!
  */
"use strict";

    //containers

    let arr = [];

    let myhotel;


    let text, text1, text2, text3;

    

    //listeners
    document.getElementById('boton1').addEventListener('click', crearHotel);

    document.getElementById('boton3').addEventListener('click', veureHotel);

    document.getElementById('boton4').addEventListener('click', modificarHotel);

    document.getElementById('boton2').addEventListener('click', donarDeBaixaHotel);

function crearHotel() {
 
    //data
    let name          = document.getElementById('word1').value;

    let numberOfRooms = parseInt(document.getElementById('num1').value);

    let floorsHotel   = parseInt(document.getElementById('num2').value);

    let areaHotel     = parseInt(document.getElementById('num3').value);

    //cleaning
    name = name.replace(/ +/g, " ");

    name = name.toLowerCase();

    //Capitalise
    //name = name.charAt(0).toUpperCase() + name.slice(1);


    //checks
    let encontrado = false;

    //si encuentras el nombre igual cambias el estado boleano
    for (let hotel of arr) {

        if (hotel.name == name) encontrado = true;
    }

    //if else
    if (!encontrado) {

        myhotel = new Hotel(name, numberOfRooms, floorsHotel, areaHotel);

        arr.push(myhotel);

    } else {

        text = ('Already in the data base!');

        document.getElementById('demo').innerHTML = text;
    }


    console.log(myhotel);

    console.log(arr);

    clearFields();

}


function veureHotel (){
   
    //data
    let name = document.getElementById('word3').value;

        //cleaning
        name = name.replace(/ +/g, " ");

        name = name.toLowerCase();
    
        //Capitalise
        //name = name.charAt(0).toUpperCase() + name.slice(1);

/*     for (let hotel of arr){

     if (hotel.name == name) 
      
            text = `The ${hotel.name} with ${hotel.numberOfRooms} rooms and ${hotel.floorsHotel} and ${hotel.areaHotel} m2`;

            text1 = `And needs ${hotel.calcularManteniment()} of Euros monthly to have beds ready to be used`; 
    } */
    
    //La culpa es de Isaac que me ha puesto la idea en la cabeza
   // arr.forEach((element) =>{

       /* if (element.name == name) {
        
            
       text = `The ${element.name} has got ${element.numberOfRooms} rooms and ${element.floorsHotel} and ${element.areaHotel} m2`;

       text1 = `And needs ${element.calcularManteniment()} of Euros monthly to have beds ready to be used`;

       } else if (name == "" ){

        text = "No data available/ accesible";

       } else{

        text = "NO such thing";

       } */

             //avoid innecesary iterations

    arr.forEach((element) =>{

    switch (true) {

        case (element.name == name):

            text = `The ${element.name} has got ${element.numberOfRooms} rooms and ${element.floorsHotel} and ${element.areaHotel} m2`;

            text1 = `And needs ${element.calcularManteniment()} of Euros monthly to have beds ready to be used`;
            
            break;

        case (element.name !== name):

                text = "There is no such Hotel";
            
            break;
    
        default:

            text = "Something went terribly wrong";

            break;
    }
    })


    document.getElementById('demo8').innerHTML = text;

    document.getElementById('demo9').innerHTML = text1;


}

//ME DA PROBLEMAS POR EL ACORDION
//RECOGE LOS DATOS Y CAMBIA BIEN. lA UNICA QUE ME FALTA
function modificarHotel() {

    //tenemos que decir que hotel queremos encontrar
    //recorrer arr
    //encontrar
    //modificar elementos
    //dejar
    let name = prompt('Which is the Hotel requested?');

        //cleaning
        name = name.replace(/ +/g, " ");

        name = name.toLowerCase();
    
        //Capitalise
        //name = name.charAt(0).toUpperCase() + name.slice(1);

    let finding = arr.find((hotel) => hotel.name == name);//trying out

    //let doIt =  prompt('Do you need to make updates in the fields? YES/ NO');

    //doIt = doIt.toLowerCase();



    finding.name = document.getElementById('word2').value;

    finding.name = finding.name.toLowerCase();

    finding.numberOfRooms = parseInt(document.getElementById('num4').value);

    finding.floorsHotel = parseInt(document.getElementById('num5').value);

    finding.areaHotel = parseInt(document.getElementById('num6').value);

   // doIt = prompt('Do you need more updates in the fields? YES/ NO');

   

    console.log(finding)

    clearFields();


}

function donarDeBaixaHotel(){

    //get the data
    let name = document.getElementById('word5').value;

        //cleaning
        name = name.replace(/ +/g, " ");

        name = name.toLowerCase();
    
        //Capitalise
        //name = name.charAt(0).toUpperCase() + name.slice(1);

    //loop no js methods you cheater
    for (let hotel of arr){

        //avoid innecesary iterations
    switch (true) {

        case (hotel.name == name):

                arr.splice(hotel, 1);

                text = "Terminated. Hasta la vista, baby!";
            
            break;

        case (hotel.name !== name):

                text = "There is no such Hotel";
            
            break;
    
        default:

            text = "Something went terribly wrong";

            break;
    }

}
    document.getElementById('demo12').innerHTML = text;

    clearFields();
    console.log(arr)

}
//borrado de los p despues de visualizar
const clearFields = () =>{


    document.getElementById('word1').value = "";

    document.getElementById('num1').value = "";

    document.getElementById('num2').value = "";

    document.getElementById('num3').value = "";

    document.getElementById('demo1').value = "";
}
  

/************************** DOCUMENTACIÓN *************************/


//white spaces
//https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript

//capitalise
//https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript#:~:text=var%20uppercaseFirstLetter%20%3D%20string.,and%20remove%20the%20first%20letter.

