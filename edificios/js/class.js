/**CREACIÓ CLASS EDIFICI ABSTRACT */

class Building {
    //construtor
    constructor ( name, height, area){

        this.name   = name;
        
        this.height = height;

        this.area   = area;
    }

    //getters
    get getName(){

        return this.name;
    }

    get getHeight(){

        return this.height;
    }

    get getArea(){

        return this.area;
    }

    //methods and behaviour

    clean(){

        let people = parseInt(this.numRooms / 20);

        (parseInt(this.numRooms % 20 != 0)) ? people++ : 

        (this.numRooms <=20) ? people = 1 : people;

        let cost = people * 1000;

        cost = this.currencyToPay().format(cost);

        people = `${people} people are needed`;

        let time = this.timeToPay();

        let show = (`${people} and ${cost} and ${time}`);


        console.log(cost);
        console.log(people);

        return show;

    }
    timeToPay(){
        
        console.log('timetoPay works');

        let time = parseInt((this.area) / 5);

        let timeFloor = parseInt((this.height) * 0.5);

        let timeCost = Math.round(time + timeFloor / 60) / 10;

        let timeMonth = parseInt(timeCost * 30);

        timeMonth = this.currencyToPay().format(timeMonth);

        console.log(timeCost);

        console.log(timeMonth);

        let show = `Every day the hotel needs ${timeCost} hours to be cleaned, spending ${timeMonth} a month.`

        return show;

    }

    currencyToPay(){

        console.log('currency works');

        let currency = new Intl.NumberFormat("es-ES", {

            style: "currency",
            
            currency: "EUR"
          })
  
        return   currency;
    }

    /********************** METHOD VIGILANT ABSTRACT *********************/
    //vigilant(){ Metodo Abstract }
}

//Class Hotel

class Hotel extends Building{

    constructor(name, height, numRooms, area){

        //inheritance
        super(name, height, area);
        
        //my precious
    this.numRooms = numRooms;

    

    }

    //get

    get getNumRooms(){

        return this.numRooms;
    }
    //set
    set(numRooms){

        this.numRooms = numRooms;
    }


    //methods vigilantes
    costGuardsHotel(){
        
        console.log('costGuardsHotel works');

        //super solo se usa en el constructor
        //recoge los datos madre
        //pero dentro subclase es this. 

        let employees = parseInt((this.area / 1000)); // let employees = parseInt((super.area / 1000));

        (this.area % 1000 != 0) ? employees++ : employees; //(super.area % 1000 != 0) ? employees++ : employees;

        let costWatchHotel = parseInt(employees * 1800);

        costWatchHotel = this.currencyToPay().format(costWatchHotel);
 
       let show = `The surveillance team needs ${employees} employees and costs ${costWatchHotel} monthly`

       return show;
    }
}

//class Hospital

class Hospital extends Building{

    constructor(name, height, numSicks, area){

        super(name, height, area);

        this.numSicks = numSicks;


    }
    //set
    set(numSicks){

        this.numSicks = numSicks;
    }

    //get
    get getNumSick(){

        return this.numSicks;
    }

    costGuardsHospital(){
        console.log('costGuardsHospitals works');
        
        let employees = parseInt((this.area / 1000));

        (this.area % 1000 != 0) ? employees++ : employees;

        let costWatchHospital = parseInt(employees * 1300);
 
        return costWatchHospital;
    }

    meals(){

        console.log('meals works');

        let show;
        
        let totalFood = parseInt(this.numSicks * 3);

        show = totalFood;

       // let foodTime = 
    }
}

//class Cinema

class Cinema extends Building{

    constructor(name, height, area, seats, tickets, seasons){

        super(name, height, area);

        this.seats   = seats;

        this.tickets = tickets;

        this.seasons = seasons;
    }

    //setters
    set(seats){

        this.seats = seats;
    }

    set(tickets){

        this.tickets = tickets;
    }

    set(seasons){

        this.seasons = seasons;
    }

    //getters
    get getSeats(){

        return this.seats;
    }

    get getTickets(){

        return this.tickets;
    }

    get getSeasons(){

        return this.seasons;
    }
    //functions super

    costGuardsCinema(){
        
        let employees = parseInt((this.area / 3000));

        (this.area % 3000 != 0) ? employees++ : employees;

        let costWatchCinema = parseInt(employees * 1300);
 
        return costWatchCinema;
    }

    //muny
    ticketsPrice(){
        
        let price = parseInt(35 * 5.50);

        return price;

    }


}
