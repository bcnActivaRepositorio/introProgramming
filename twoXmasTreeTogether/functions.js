
const xmasThree = () =>{

    // mostrar * con forma de arbol
    //loop de menos a mas
    //árbol viene dado por input
    //pintado saltando i + "<br/>"?

    //datos
    let treeSize = parseInt(document.getElementById('num1').value);


    //loop positivo

    for ( let i = 1; i <= treeSize; i++){

        for( let j = 1; j <= i; j++){

            document.getElementById('demo').innerHTML += ("*")
            
            
        }

        document.getElementById('demo').innerHTML += ("<br>");
            
    }

    //loop negativo

for (let i = 1; i <= treeSize; i++){

    for(let j = treeSize; j > i; j--){

        document.getElementById('demo').innerHTML +=('*'); 
    }

    document.getElementById('demo').innerHTML +=('<br/>');

}
}

//En este caso en concreto le quitamos el simbolo = al segunfo loop
//del negativo, para evitar que nos copie la misma linea dos veces del maximo numero 
//for (let j = treeSize; j >= i; j--) ==> for(let j = treeSize; j > i; j--)

/***********************************************************************************/

