/**
 * Els organitzadors d’un campionat de cotxes volen tenir un programa per gestionar part de 
 * la informació que fins ara no tenien informatitzada.
 *  Volen saber de cada escuderia que participa en el campionat, el nom, el pressupost que tenen i el país d’origen. 
 * Cada escuderia pot tenir més d’un cotxe i de cadascun volen saber la potència, 
 * la velocitat màxima, el color i el preu de mercat.
Dels treballadors de les diferents escuderies volen saber el nom, el primer cognom, 
l’edat, el temps que porten a l’escuderia i el sou. 
El sou base és de 50.000€. A més, dels pilots volen saber la seva alçada, el pes i els anys que porten a l’escuderia. 
El sou dels pilots és el sou base dels treballadors més 10.000€ per cada any d’antiguitat a l’escuderia, més 50.000€ de perillositat.
Dels mecànics volen saber si tenen estudis superiors de mecànica o no. 
I el seu sou es calcula sumant 10.000 per cada any d’antiguitat a l’escuderia més el sou base.
Es demana que l’aplicació sigui capaç de donar d’alta, de baixa i de veure pilots i mecànics i de veure escuderies i bòlids.
 Les escuderies i els bòlids poden estar introduïts directament en el codi
 */
'use strict'

//squadras class

class Team {
    //const
    constructor (name, budget, country){

    this.name    = name;     

    this.budget  = budget;

    this.country = country;

    this.cars    = [];

    this.workers = [];


    console.log(this._workers);
    }
    //sets no volem tocar, no sets

    //getters
get getName(){

    return this.name;
}    
get getBudget(){

    //this.budget = currencyToPay().format(this.budget);

    return this.budget;
}
get getCountry(){

    return this.country;
}    

get getWorkers(){

    return this.workers;
}

get getCar(){

    return this.car;
}
budgetTeam(budget){

    console.log('€€€ team works');

    budget = this.currencyToPay().format(this.budget);

    return this.budget;

}
currencyToPay(){

    console.log('currency works');

    let currency = new Intl.NumberFormat("es-ES", {

        style: "currency",
        
        currency: "EUR"
      })

    return   currency;
}
//To String
    toString(){

        console.log('str team works');

        let infoTeam = `The ${this.name}'s team comes from ${this.country} and has got a budget of: ${this.budget}`;

        return infoTeam;
    }

}

/***************************** class Car *********************/
class Car {

    constructor (power, maxSpeed, color, price) {

        this.power = power;

        this.maxSpeed = maxSpeed;

        this.color = color;

        this.price = price;

    }

    //sets
set setPower (power) {

    this.power = power;
}
set setMaxspeed (maxSpeed) {

    this.maxSpeed = maxSpeed;
}
set setColor (color) {

    this.color = color;
}
set setPrice (price) {

    this.price =  price;
}
//get

get getPower(){

    return this.power;
}

get getMaxSpeed(){

    return this.maxSpeed;
}

get getColor(){

    return this.color;
}

get getPrice(){

    this.price = this.budgetTeam();

    return this.price;
}
budgetTeam(){

    this.price = parseInt(this.price);

    this.price = this.currencyToPay().format(this.price);

    return this.price;

}
currencyToPay(){

    console.log('car currency works');

    let currency = new Intl.NumberFormat("es-ES", {

        style: "currency",
        
        currency: "EUR"
      })

    return   currency;
}
//To string
    toString(){
        console.log('str car works');

        let infoCar = `Technical data. Power: ${this.power} CV. Maximum speed: ${this.maxSpeed} km/h. Color of choice: ${this.color}. Price, included taxes: ${this.price} \<br/>`;

        return infoCar;
    }
}

/*********************** Class Worker *********************/

class Worker {

    constructor (name, surname, age, howLong, salary) {


        this.name = name;

        this.surname = surname;

        this.age = age;

        this.howLong = howLong;

        this.salary = salary;
    }

    //set

    set setName (name){

        this.name = name;
    }

    set setSurname (surname){

        this.surname = surname;
    }

    set setAge (age){

        this.age = age;
    }

    set setHowLong (howLong){

        this.howLong = howLong;
    }

    set setSalary (salary){

        this.salary = salary;
    }
//get

    get getName() {

        return this.name;
    }

    get getSurname() {

        return this.surname;
    }

    get getAge() {

        return this.age;
    }

    get getHowlong() {

        return this.howlong;
    }

    get getSalary() {

        this.salary = this.currencyToPay().format(this.salary);

        return this.salary;
    }

//metodes
    basicSalary(){

        console.log('salary works');

        this.salary = parseInt(50000);

        this.salary = this.currencyToPay().format(this.salary);

        console.log(this.salary)

        return this.salary;

    }

    //convert to Euros

    currencyToPay(){

        console.log('currency works');

        let currency = new Intl.NumberFormat("es-ES", {

            style: "currency",
            
            currency: "EUR"
          })
  
        return   currency;
    }

    //tS
    toString(){

        console.log('str worker works');

        let full = `${this.name} ${this.surname}`;

        let infoWorker = `${full} works for ${Team.name} and earns ${this.salary} as has been within the company for ${this.howLong}`;

        return infoWorker;
    }
}

/************************************class pilots extends workers **************************/

class Pilot extends Worker {

    constructor (name, surname, age,  heigth, weight, howLong, salary) {

        //inheritance
        super(name, surname, age, howLong, salary)

        //all belong to you babe
        this.heigth = heigth;

        this.weight = weight;

    }

    //set
    set setSalary(salary){

        this.salary = salary;
    }

    set setHeigth(heigth){

        this.heigth = heigth;
    }

    set setWeigth(weight){

        this.weight = weight;
    }
    //get

    get getHeigth(){

        return this.heigth;
    }
    get getWeigth(){

        return this.weight;
    }

    get getSalary() {

        this.salary = this.pilotSalary();

        return this.salary;
    }
    //methods

    pilotSalary(){

        console.log('pilots salary works');

        let time = 10000 * this.howLong;

        let danger = parseInt(50000);

        let basic = parseInt(50000);

        this.salary = basic + time + danger;

        this.salary = this.currencyToPay().format(this.salary);

        console.log(this.salary);

        return this.salary;

    }
    currencyToPay(){

        console.log('currency works');

        let currency = new Intl.NumberFormat("es-ES", {

            style: "currency",
            
            currency: "EUR"
          })
  
        return   currency;
    }

    //tS
    toString(){

        console.log('str pilot works');

        let full = `${this.name} ${this.surname}`;

        let infoPilot = `${full} works for ${Team.name}'s team as a Pilot.\n Seasons: ${this.howLong}\n Salary: ${this.salary}`;

        return infoPilot;
    }

}
/***************************Mechanics *****************************/

class Mechanic extends Worker {

    constructor (name, surname, age, studies, howLong, salary) {

        //inheritance
        super (name, surname, age, howLong, salary);

        //mine treasure
        this.studies = studies;
    }

    //set
    set setStudies(studies){

        this.studies = studies
    }

    set setSalary(salary){

        this.salary = salary;
    }
    //get

    get getStudies(){

        return this.studies;
    }

    get getSalary() {

        this.salary = this.mechanicSalary();

        return this.salary;
    }
    //methods

    mechanicSalary(){

        console.log('mechanics salary works');

        let time = 10000 * this.howLong;

        let basic = parseInt(50000);

        this.salary = parseInt(basic + time);

        this.salary = this.currencyToPay().format(this.salary);

        console.log(this.salary);

        return this.salary;

    }
    currencyToPay(){

        console.log('currency works');

        let currency = new Intl.NumberFormat("es-ES", {

            style: "currency",
            
            currency: "EUR"
          })
  
        return   currency;
    }
    //tS
    toString(){

        console.log('str mechanic works');

        let full = `${this.name} ${this.surname}`;

        let infoMech = `${full} works for ${Team.name}'s team as a Mechanic. Seasons: ${this.howLong} Salary: ${this.salary}`;

        return infoMech;
    }
}