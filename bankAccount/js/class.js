'use strict'

//creación cuenta
class Account {

    constructor(holder, balance, numAccount, numOps) {

        console.log(' Bank account in progress');

        this._holder     = holder;

        this._balance    = balance;

        this._numAccount = numAccount;

        this._numOps     = numOps;

    }

    //setters
    set setHolder(holder) {

        this._holder = holder;
    }

    set setBalance(balance) {

        this._balance = balance;
    }

    set setNumAccount(numAccount) {

        this._numAccount = numAccount;
    }

    set setNumOps(numOps) {

        this._numOps = numOps;
    }
    //getters
    get getHolder(){

        return this._holder;
    }
    
    get getBalance(){

        return this._balance;
    }
    get getNumAccount(){

        return this._numAccount;
    }
    get getNumOps(){

        return this._numOps;
    }

//comportamiento


    //incomings
    depositMoney(){

        console.log('deposit works')//this._balance + incoming

        //add all operations while function
        this._numOps++

        //containers
         let show;

         let dinero = 0;
        
        let question = prompt('Would you like to make a deposit? YES/ NO');

        question = question.toLowerCase();

        let find = false;

        (question == "no") ? show = (`Account's balance: ${this._balance}€`) : 
        
                            dinero = parseInt(prompt('How much would you like to deposit?'));

        show = ` Your deposit of ${dinero}€ has been made. Your balance is now: ${this._balance += dinero} `;

        console.log(show);

        return show;
    }

    //withdraws
    withdrawMoney(){

        console.log('withdraw works');

          //containers
          let show;

          let text;

          let dinero = 0;

          //questions
          let question = prompt('Would you like to make a withdraw? YES/ NO');

          question = question.toLowerCase();

          //start it
          (question == "no") ? show = (`Account's balance: ${this._balance}€`) : 
        
                            dinero = parseInt(prompt('How much would you like to withdraw?'));

        //do we have money
        (dinero > this.balance) ? alert(`Balance: ${this._balance}€. You can't make the operation`) :

        //add every operation
        this._numOps++;

        show = this._balance - dinero;

        text = (`Account balance: ${show}€`);

        console.log(text);

        return text;
    }

    //check accounts
    returnBalance(){

        let show;

        show = (`Your account holds ${this._balance}€ and made ${this._numOps} operations`);

        console.log(show);

        return show;
}

    viewTransc(){

    console.log('viewTransc works');

        return (`This account made ${this._numOps} operations`);
}

    viewAccount(){

        let view = "Welcome " + this._holder + ", your account number" + " " + this._numAccount + " has got a balance of " + this._balance +"."

        + " Operations done: " + this._numOps;

        console.log('viewAccount works');

        return view;
    
    
}

}