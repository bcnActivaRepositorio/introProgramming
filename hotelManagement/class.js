'use strict'
//fichero clases
//class Hotel
 class Hotel {
    //constructor
    constructor(_name, _numberOfRooms, _floorsHotel, _areaHotel){

        //s'ha construit?
        console.log('¡¡¡Hotel en construcción!!!');

        //aquest particular this
        this.name          = _name;

        this.numberOfRooms = _numberOfRooms;

        this.floorsHotel   = _floorsHotel;

        this.areaHotel     = _areaHotel;



    }
    set setName(_name){

        this.name = _name;
    }

    set setNumOfRooms(_numberOfRooms){

        this.numberOfRooms = _numberOfRooms;
    }

    set setFloors(_floorsHotel){

        this.floorsHotel = _floorsHotel;
    }

    set setArea(_areaHotel){

        this.areaHotel = _areaHotel;
     }
    get getName(){

        return this.name;

    }

    get getNumOfRooms(){

        return this.numberOfRooms;
    }

    get getFloors(){
 
         return this.floorsHotel;

    }

    get getArea(){

        return this.areaHotel
    }

    calcularManteniment() {

        //cada empleado trabaja en 20 hab
        let employees = parseInt((this.numberOfRooms / 20));

        //what happens if we have 32 rooms? We need to add an extra worker
        (this.numberOfRooms % 20 != 0) ? employees++ : employees;

        //numbers in Javascript are tricky, protect yourself: parseint, Round and floor
        let payment   = Math.round(employees * 1500);

        return payment;
    }

}



/**
 * Clase creada, funciona la maldita.
 * ¿Cómo hago que me recoja los datos? ¿Como enlazo los dos documentos?
 * 
 * Vamos a por ello!
 */