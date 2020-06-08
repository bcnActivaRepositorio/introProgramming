const checkChange = () =>{

    //datos is already a +change due the front
    let money = parseInt(document.getElementById('num1').value);

    //object where key values money will be stored
    let change = {};

    //pintado
    let text;

    //values to the change
    let moneyType = ["Bin Laden", "Billete de 100€", "Billete de 50€", "Billete de 20€", "Billete de 10€", "Billete de 5€", "Billete de 1€", "Moneda de 0.50€", 

    "Moneda de 0.20€", "Moneda de 0.10€", "Moneda de 0.05€", "Moneda de 0.02€", "la más pequeña"];

    let moneyValue = [50000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 10, 5, 2, 1];

    //how many of those we need?
    let amount;

    for (let i = 0; i < moneyValue.length; i++){

        amount = parseInt(money / moneyValue[i]).toFixed(0);//round down, no decimals

        if (amount > 0) {

            change[moneyType[i]] = amount;

            money = money % moneyValue[i]; 
            // we add modulo to avoid the fact of divide and try to find the rest
            //exem: the loop gives us an amount of 225. The rest of dividing this out of 200
            //will be 25, that number will iterate again through the loop til matches
            //lets say 20 so 25 / 20 leaves a rest o 5 and five will iterate.. 

        }
    }


    console.log(change) ;

for (let [key, value] of Object.entries(change)){

    text += ` ${key}: ${value} <br/>`;

    
}

    document.getElementById('demo').innerHTML = text;
}



/************************** DOCUMENTACIÓN *************************/
/**
 * Exercici 9
Un comerç del barri té una aplicació que li diu al botiguer quin és el canvi que ha de tornar cada cop
que fa una venda. Ara el botiguer vol, que quan ell introdueix la quantitat que li ha de tornar al client
el programa li digui quants bitllets de cada quantitat i quantes monedes de cada quantitat li ha de
tornar.
 */

 //Problemas con la devolucion. console-log me da el objeto. entries es confuso en el pintado
