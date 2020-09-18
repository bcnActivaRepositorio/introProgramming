/*
En el següent exercici el nostre client és una entitat bancària. 
El banc vol que un client pugui donar d’alta, de baixa, veure informació o fer certes operacions en un compte corrent. 
Per fer-ho necessitem una classe Compte que tindrà el camp Titular (nom + cognom), saldo, nombre de compte i el nombre de transaccions realitzades. 
Els mètodes de la classe són: ingresar euros, retirar euros, retornar saldo, veure transaccions, veure compte.

●     El mètode ingresar euros permet fer un ingrés al saldo del compte.
●     El mètode retirar saldo permet treure euros del saldo del compte
●     El mètode retornar saldo, retorna el saldo total del compte
●     El mètode veure transaccions, retorna el nombre de transaccions que s’han fet amb el compte
●     El mètode veure compte mostra per pantalla totes les dades del compte

Per donar d’alta un compte, el client ha d’omplir les següents dades: nom, cognom i nombre de compte. 
Quan es crea un compte, la qüantitat sempre és 50€ i el nombre de transaccions és 0.
Abans de crear el compte, hem d’estar segurs que no hi ha cap compte que tingui el mateix titular i el mateix nombre de compte. 
Si un titular ja té aquest nombre de compte, hem d’informar a l’usuari dient-li que el compte no es crearà perquè ja té un compte amb aquest nombre i li mostrarem totes les dades d’aquest compte.
Per donar de baixa un compte, li demanarem a l’usuari que introdueixi nom, cognom i nombre de compte. 
Si el compte existeix, l’eliminarem i informarem a l’usuari que el compte ha estat eliminat. 
Si el compte no existeix, informarem a l’usuari que el compte no existeix i mostrarem a l’usuari tots els comptes que té.
Per veure un compte, li demanarem a l’usuari que introdueixi nom, cognom i nombre de compte. 
Si el compte existeix, li mostrarem a l’usuari tota la informació del compte. 
Si el compte no existeix, informarem a l’usuari que el compte no existeix i li mostrarem tots els seus comptes.
Si l’usuari vol fer operacions amb el compte corrent, primer ha d’introduir el compte amb el que vol operar
i llavors ha de poder ingresar, retirar, veure transaccions i veure compte. 
Si el compte no existeix, s’ha d’informar a l’usuari de que el compte amb el que vol operar no existeix i 
se li han de mostrar tots els seus comptes.
*/

/**
 * IMPORTANTE :   A REVISAR LAS FUNCIONES DE LA CLASE
 * 
 * FUNCIONES FUERA FUNCIONAN
 * 
 */

"use strict";

//listeners
document.getElementById("boton1").addEventListener("click", newAccount);

document.getElementById("boton2").addEventListener("click", checkAccount);

document.getElementById("boton3").addEventListener("click", deleteAccount);

document.getElementById("boton4").addEventListener("click", opsAccount);

//containers & declarations

let text, text1, text2, text3, text4, text5, text6;

let myAccount;

let accountArr    = [];

let whichAccounts = [];

let accountCheck  = "";

let contador      = 0;

let find          = false;

//what else comes in here

function newAccount() {

  //data
  let name = document.getElementById('word1').value;

  name = clearStr(name);

  let surname = document.getElementById('word2').value;

  surname = clearStr(surname);

  let holder = name + " " + surname;

  (holder == "") ? holder = getHolder() : alert('something is weird');

  let numAccount = parseInt(document.getElementById('num1').value);

  while (isNaN(numAccount)){
    numAccount = parseInt(prompt('Number', ""));
  
    (!isNaN(numAccount)) ? console.log('si') : console.log('no');
  }


  //if you find me, change your state to true
  for (let account of accountArr) {

    if (account._holder == holder && account._numAccount == numAccount)

      find = true;
  }

  //lets create it
  if (!find) {
    //numOps declaration
    let numOps = 0;

    //balance
    let balance = 50;

    myAccount = new Account(holder, balance, numAccount, numOps);

    accountArr.push(myAccount);

    text =
      "The account number " +
      numAccount +
      " " +
      "held by: " +
      holder +
      " " +
      "has been created";

    document.getElementById('demo').innerHTML = text;
    //alert(text);
  } else {
    text1 = "Already in the data base!";

    //document.getElementById('demo1').innerHTML = text1;
    alert(text1);
  }

  console.log(myAccount);

  console.log(accountArr);

  //pintado

  //clear fields
  clearFields();
}

//delete
function deleteAccount(){

  //data
  let holder = getHolder();

  let numAccount = getNumber();

  //iterate
  for (let account of accountArr){

    contador++;

      whichAccounts.push(account._numAccount);

      switch (true) {

        case ( (account._holder == holder) && (account._numAccount == numAccount)):

          accountArr.splice(account, 1);
          
          text3 = "Terminated. Hasta la vista, baby!";

          console.log(accountArr);

          break;
      
        case ((account._holder)):

          contador++;

          whichAccounts.push(account._numAccount);

          text3 = "You don't have this account number. You hold " + contador +" accounts in this Bank: " + "<br/>" + whichAccounts;

          
          break;
      
        default:

          text3 = "You made a mistake, once more";

          break;
      }
  }

    //pintado
    document.getElementById('demo').innerHTML = text3;
}

//check account
function checkAccount() {
  //data
 //declaration of holder
  let holder = getHolder();

  let numAccount = document.getElementById('num1').value;

  numAccount = parseInt(numAccount);

  //iterate
  for (let account of accountArr) {

    if ( account._holder == holder && account._numAccount == numAccount){

      find = true;

      console.log(account.viewAccount());

      alert(account.viewAccount());

      text2 = account.viewAccount();

    } else if ( account._holder == holder && !find){

      contador++;

      whichAccounts.push(account._numAccount);
    } 
  }

  (!find) ? text2 = (`Dear ${holder},  you hold ${contador} accounts in this bank.<br/> Account/s number/s:<strong> ${whichAccounts} </strong>`) : true;

  document.getElementById('demo').innerHTML = text2;



  clearFields();

}

//Operations account
function opsAccount(){

  //data
  let holder = getHolder();

  let numAccount = getNumber();

  for (let account of accountArr){

  
  let sacar = account.withdrawMoney();

 let poner = acount.depositMoney();
}
}



//empty the fields
const clearFields = () => {
  document.getElementById("word1").value = "";

  document.getElementById("word2").value = "";

  document.getElementById("num1").value = "";

  text, text1, text2, text3, text4, text5, text6 = "";

  setTimeout(function(){
  document.getElementById('demo').innerHTML = text;
  document.getElementById('demo').innerHTML = text1;
  document.getElementById('demo').innerHTML = text2;
  document.getElementById('demo').innerHTML = text3;
  document.getElementById('demo').innerHTML = text4;
  document.getElementById('demo').innerHTML = text5;
  document.getElementById('demo').innerHTML = text6;
}, 3000);
};

//get name and surname
const getHolder = () =>{

      //data
  let name = document.getElementById("word1").value;

  //cleaning
  (name == "") ? name = clearStr(prompt('Introduce your name')) :

                 name = clearStr(name);

  let surname = document.getElementById("word2").value;

  //cleaning
  (surname == "") ? surname = clearStr(prompt('Introduce your surname')) :

                    surname = clearStr(surname); 

      //declaration of holder
  let holder = name + " " + surname;

  return holder;

}

//clear names and surnames
const clearStr = (str) =>{

     //cleaning
  str = str.replace(/\s/g, "");

  str = str.toLowerCase();

  //Capitalise
  str = str.charAt(0).toUpperCase() + str.slice(1);

  return str;
}

//get and check number
const getNumber = () =>{

  let data;

  //data
  let numAccount = parseInt(document.getElementById("num1").value);

  //check
  ( Number.isInteger(numAccount) === false) ? numAccount = parseInt(prompt('Introduce only number of 3 digits')) : numAccount;

 data = numAccount;

  return data;
}