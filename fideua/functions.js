/**
Exercici 7
Un grup d’amics ha quedat per fer una fideuà, els ingredients principals seran: fideus, gambes, i
calamars. Saben que per cada quatre persones han d’utilitzar mig quilo de fideus, 400 grams de
calamars i 200 grams de gambes. S’ha de fer un programa que demani per pantalla el preu per quilo
de cada ingredient i el nombre d’amics que seran per dinar. El programa ha de calcular les
quantitats necessàries de cada ingredient, el preu per persona i el preu final de la fideuà.
 */
'use strict'

function checkPrice(){

    //data
    let people  = parseInt(document.getElementById('num1').value);

    let shrimp = parseInt(document.getElementById('num2').value);

    let squid   = parseInt(document.getElementById('num3').value);

    let pasta   = parseInt(document.getElementById('num1').value);



   //total quantities counting on how many people
   let totalKgShrimp = (people *0.05).toFixed(3);

   let totalKgSquid  = (people *0.10).toFixed(3);

   let totalKgPasta  = (people *0.125).toFixed(3);

   //prices
   let totalPrice = (totalKgShrimp*shrimp)+(totalKgSquid*squid)+(totalKgPasta*pasta);

   let priceXperson = totalPrice / people;

   //pintado
   let text, text1;

   text = "Para hacer una fideuá rica rica necesitamos: " + "<br/>" + totalKgPasta + " " +"kg de pasta fideuá "+"<br/>" + totalKgShrimp + " " +"kg de gambas de Huelva o Figueres "+ "<br/>" + totalKgSquid + " " +"kg de calamares.";

   text1 = `El precio total de la comida asciende a ${totalPrice} y cada uno de nosotros debe pagar ${priceXperson}`;

   document.getElementById('demo').innerHTML = text;
   document.getElementById('demo1').innerHTML = text1;
}



/************************** DOCUMENTACIÓN *************************/

//Las gracias a ROSA MARIA y CRISTINA.  Yo me había metido en un jardín muy ilogico!!!

