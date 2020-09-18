'use strict'

//courtains raise

//containers
let uniqueArr = [];

//boolean
let find = false;

//keep my data x the for and loops
let show, show1, show2;

//somthing else will come up


//listen you up babe
document.getElementById('boton1').addEventListener('click', newEmployee);

document.getElementById('boton2').addEventListener('click', checkOnMe);

document.getElementById('boton3').addEventListener('click', deleteWorker);

document.getElementById('boton4').addEventListener('click', newTeam);

document.getElementById('boton5').addEventListener('click', newCar);




//it all begins here
function newEmployee(){

    let choice = 0;
    //choices
    do {

     choice = parseInt(prompt('would you like to contract a: \n Pilot (press key 1)\n Mechanic (press key 2)'));

    switch (choice) {
        case 1:
            console.log('pilot works');

            makePilots();
            break;
    
        case 2:
            console.log('mechanics works')

            makeMechs();
            break;
    
        default:
            console.log('exit works')
            break;
    }
} while (choice < 1 || choice > 2);

}
/******************************PILOTS **********************/
const makePilots = () =>{

     //container
    let myPilot;

    let pilotLoop;

    //data
    let name = prompt('Pilot name: ');

    name = clearStr(name);

    let surname = prompt('Pilot surname: ');

    surname = clearStr(surname);

    //check
    for (let driver of uniqueArr){

        if (driver instanceof Pilot){

            if (driver.name == name && driver.surname == surname) {

                find = true;


            }
        }  
    }

    //outside for always or is a never ending
    if (!find) {

        let age = parseInt(prompt('Age'));

        let height = parseInt(prompt('Height'));
    
        let weight = parseInt(prompt('Weight'));
    
        //make checks later, not now
        let howLong = parseInt(prompt('How long within the race team?'));

        let salary = 0;

    //creation 
    myPilot = new Pilot (name, surname, age, height, weight, howLong, salary);

    uniqueArr.push(myPilot);

    console.log(myPilot.pilotSalary());

    alert(myPilot.toString());

    alert(`Ms/ Mr ${myPilot.surname} has become a new pilot`);

    }else {

        show = ('Already in the data base!');

        alert(show);
    }
    //for the sake of the exercise
    let pilot1 = new Pilot ("Sebastian", "Vetel", 33, 176, 58, 2, budgetFormat(100000));

    uniqueArr[0].workers.push(pilot1);
    
    let pilot2 = new Pilot ("Nico", "Rosberg", 35, 178, 71, 0, budgetFormat(100000));

    uniqueArr[1].workers.push(pilot2);

    let pilot3 = new Pilot ("Lewis", "Hamilton", 21, 174, 68, 1, budgetFormat(100000));

    uniqueArr[2].workers.push(pilot3);

    let pilot4 = new Pilot ("Mark", "Weber", 37, 184, 75, 3, budgetFormat(100000));

    uniqueArr[2].workers.push(pilot4);

    let pilot5 = new Pilot ("Felipe", "Massa", 25, 166, 59, 2, budgetFormat(100000));

    uniqueArr[2].workers.push(pilot5);

    let pilot6 = new Pilot ("Kimi", "Raikonen", 29, 175, 70, 1, budgetFormat(100000));

    uniqueArr[2].workers.push(pilot6);

    console.log(uniqueArr);

}

/*************************MECHANICS *************************************/
const makeMechs = () =>{
    //container
    let myMech;

    //data
    let name = prompt('Mechanic name: ');

    name = clearStr(name);

    let surname = prompt('Mechanic surname: ');

    surname = clearStr(surname);

    //check
    for (let engineer of uniqueArr){

        if (engineer instanceof Mechanic){

            if ((engineer.name == name) && (engineer.surname == surname)) find = true;
        }

    }
    //outside the loop
    if (!find){

        let age = parseInt(prompt('Age'));

        let studies = parseInt(prompt('Mechanical Engineer?\n YES (press key 1) / NO (press key 2)'));
        
        (studies > 2 ) ? studies = parseInt(propmt('Mechanical Engineer. YES (press key 1) / NO (press key 2)')) :

        (studies == 1) ? studies = "Degree" : studies = "No degree";

            //make checks later, not now
        let howLong = parseInt(prompt('How long within the race team?'));

        let salary = 0;

        //creation 
        myMech = new Mechanic (name, surname, age, studies, howLong, salary);

        uniqueArr.push(myMech);

        console.log(myMech.mechanicSalary());

        alert(myMech.toString());

        alert(`Ms/ Mr ${myMech.surname} has become a new Mechanic `);

    }else {

        show = ('Already in the data base!');

        alert(show);
    }

        //for the sake of the exercise
        let mechanic1 = new Mechanic("David", "Bisbal", 35, "Degree", 1, budgetFormat(100000));

        uniqueArr[0].workers.push(mechanic1);
        
        let mechanic2 = new Mechanic("Peter", "Handsome", 52, "No degree", 10, budgetFormat(100000));
    
        uniqueArr[1].workers.push(mechanic2);
    
        let mechanic3 = new Mechanic("John", "Wick", 45, "Degree", 3, budgetFormat(100000));
    
        uniqueArr[2].workers.push(mechanic3);
    
    /*     let mechanic4 = new Mechanic("John", "Wick", 45, "Degree", 3, 100000);
    
        workers.push(mechanic4); */
        
        console.log(uniqueArr);
}
/********************************CHECK PEOPLE *********************************/
function checkOnMe(){

    //define what are you looking for
    //let choice = prompt('Pilots? (press key 1) Mechanics? (press key 2)');

    //container
    let box;

    let choice;

    //data 
    let name = prompt('Employee name');

    let surname = prompt('Employee surname');

    name = clearStr(name);

    surname = clearStr(surname);

    for (let worker of uniqueArr){

        if (worker.name == name && worker.surname == surname){

            find = true

            box = worker;

        }
    }
    if (!find) {

        alert(`${box.name} ${box.surname} doesn't work with us`);
    } else {

        console.log(box.salary + " " + box.name + " " + box.surname);

    }

    
}

/**************************************DELETE *********************************/
function deleteWorker(){

    //containers
    let toDelete;

        //data 
        let name = prompt('Employee name');

        let surname = prompt('Employee surname');
    
        name = clearStr(name);
    
        surname = clearStr(surname);

        //general iteration
        /* for (let worker of uniqueArr){

            if (worker.name == name && worker.surname == surname) {
                
                find = true;

                toDelete += worker;

            }
        } */

        //while
        let i = 0;
        //as long as i is minor than the arr.length, keep looking
        while (i < uniqueArr.length && !find) {

            //if you match everything, bingo!
            if( uniqueArr[i].name == name && uniqueArr[i].surname == surname){

                find = true //boolean to true

                uniqueArr.splice(i, 1); //erase the only object from the arr

                console.log(uniqueArr[i]);

                alert(`${name} ${surname} contract has been revoqued.`);

                console.log(uniqueArr);
            }
            //add positions to i, but once found, we skip it
            i++;
        }
        //but if not
        if(find == false ) {
            
            alert(`${name} ${surname} is not in our database`);

        console.log(uniqueArr);
        }
}

/**************************************TEAM ********************************************/

function newTeam(){
    //containers
    let myTeam;

    //data
    let budget = 0;

    let name = "";

    let country = "";

    myTeam = new Team(name, budget, country);

        //for the sake of the exercise
    
        let myTeam1 = new Team("Mercedes", budgetFormat(484000000), "Germany");
    
        uniqueArr.push(myTeam1);
        
    
        let myTeam2 = new Team("Ferrari", budgetFormat(463000000), "Italy");
    
        uniqueArr.push(myTeam2);
                
        let myTeam3 = new Team("Red Bull", budgetFormat(445000000), "England");
    
        uniqueArr.push(myTeam3);

        let myTeam4 = new Team("Renault", budgetFormat(272000000), "France"); 

        uniqueArr.push(myTeam4);

        let myTeam5 = new Team("McLaren", budgetFormat(269000000), "England");
    
        uniqueArr.push(myTeam5);
        
        
       console.log(uniqueArr);



    //check
/*     for ( let team of uniqueArr) {

        if (team instanceof Team){

        if (team.name == name){

            find = true;
        }
      }
    }

    //if it is not there
    if (!find){

        let country = prompt("Team's country");

        country = clearStr(country);
    
        budget = parseInt(prompt("Team's budget"));

        myTeam = new Team(name, budget, country);

        console.log(myTeam);

        uniqueArr.push(myTeam);

        console.log(myTeam.budgetTeam());

        alert(myTeam.toString());

        console.log(uniqueArr);
    } else {

        show = ('Already in the data base!');

        alert(show);
    } */


}
/*****************************************CAR *******************************/

function newCar(){
    //container
    let myCar;

    let coche;

    let i = 0;
    
    let carArr = [];

    let colorArr = ['Rosso corsa', 'French blue', 'Silver arrow', 'Japanese marfil', 'British green'];

    let power    = 0;

    let maxSpeed = 0;

    let color;

    let price = 0;

    myCar = new Car (power, maxSpeed, color, price);

     //for the sake of the exercise cars
     let myCar1 = new Car(786, 345, `${colorArr[0]}`, budgetFormat(15500000)); 

     uniqueArr[0].cars.push(myCar1);
     
     let myCar2 = new Car(771, 320, `${colorArr[1]}`, budgetFormat(14000000));
 
     uniqueArr[1].cars.push(myCar2);
 
     let myCar3 = new Car(744, 300, `${colorArr[2]}`, budgetFormat(13500000));
 
     uniqueArr[2].cars.push(myCar3);

     let myCar4 = new Car(718, 285, `${colorArr[3]}`, budgetFormat(12000000)); 

     uniqueArr[3].cars.push(myCar4);
    
     let myCar5 = new Car(710, 250, `${colorArr[4]}`, budgetFormat(9000000)); 

     uniqueArr[4].cars.push(myCar5);
    

     console.log(uniqueArr);


     alert(uniqueArr.map((e) => e));

     //console.log(carArr);


}
/***************************************************************** */
/*********************************************************************** */

//clena str
const clearStr = (str) =>{

    //cleaning
 str = str.replace(/\s/g, "");

 str = str.toLowerCase();

 //Capitalise
 str = str.charAt(0).toUpperCase() + str.slice(1);

 return str;
}

function currencyToPay(){

    console.log('functions currency works');

     let currency = new Intl.NumberFormat("es-ES", {

        style: "currency",
        
        currency: "EUR"
      })

    return   currency;
}
function budgetFormat  (num){ return currencyToPay().format(num) };


/**********************************DOCUMENTACION ******************************/

//biometrics  https://i.imgur.com/hRQ45tE.jpg

//https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class

//powerhorse
//https://maxf1.net/en/how-much-power-f1-engines-have/

//maxspeed
//https://maxf1.net/en/2019-azerbaijan-gp-honda-sets-the-highest-2019-f1-top-speed/

//budgets teams
//https://www.essentiallysports.com/what-are-the-budgets-for-all-10-formula-one-teams-2019/

//cost car F1
//https://lifebeyondsportmedia.com/The-Average-Cost

//specs pilots
//https://www.reddit.com/r/formula1/comments/1934jl/f1_drivers_height_weight/

//colors
//https://es.wikipedia.org/wiki/Anexo:Colores_de_carrocería_en_competiciones_automovilísticas_por_país