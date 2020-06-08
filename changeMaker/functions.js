const checkChange = () =>{

    //datos is already a +change due the front
    let money = parseInt(document.getElementById('num1').value);

    //Instanciamos
    let text, text1;

    //key value obj to know how many of each currency
    let change = {};

    //container to add data
    let valores = "";


    //arr muny
    let ownMuny = [1, 2, 5, 10, 20, 50];

    //length
    let howMuchIhave = ownMuny.length - 1;

    //checks
    (money === 0) ? text = 'No change need it' :

    (money < 0)   ? text = 'You gotta be kidding, right' : true;

    //loop para añadir el cambio al dinero introducido
    for (let i = howMuchIhave; i >= 0 ; i--) {

        //valores recogerá el valor de cada indice del arr ownMuny[i] del dinero que usamos como cambio
        //recordar que i comienza en cero, la primera posicion del index del arr
        //My house, my rules, I turned it over! howMuchIHave starts at the end of the arr
        valores = ownMuny[i];

            // if  i = 5 ==> ownMuny[index] = 50 = valores
            if (valores <= money) {

                //recogemos ese valor. 50 y lo  cargamos en change
                change[valores] = Math.floor(money / valores);

                money -= valores * change[valores];
            }
    }



    console.log(change);

    document.getElementById('demo').innerHTML = text;
   
    document.getElementById('demo1').innerHTML = `Estos son los valores de las monedas y billetes ${Object.keys(change)} y estas las cantidades de cada una de ellas ${Object.values(change)}`;


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
