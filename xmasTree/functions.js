
const xmasThree = () =>{

    // mostrar * con forma de arbol
    //loop de menos a mas
    //árbol viene dado por input
    //pintado saltando i + "<br/>"?

    //datos
    let treeSize = parseInt(document.getElementById('num1').value);

   

    //loop for ya que sabemos el num de lineas a pintar

for (let i = 1; i <= treeSize; i++){

    for(let j = treeSize; j >= i; j--){

        document.getElementById('demo').innerHTML +=('*'); 
    }

    document.getElementById('demo').innerHTML +=('<br/>');

}
}



/***********************************************************************************/

/**
 *  let message = "";
 * 
 * for (let i = 0; i < treeSize; i++){

    for(let j = 0; j < treeSize - 1; j++){

        
        message += "*";
    }

    message += <br/>

}
document.getElementById('demo').innerHTML = message;
 * 
 */
