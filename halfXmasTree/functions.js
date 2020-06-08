
const xmasThree = () =>{

    // mostrar * con forma de arbol
    //loop de menos a mas
    //árbol viene dado por input
    //pintado saltando i + "<br/>"?

    //datos
    let treeSize = parseInt(document.getElementById('num1').value);

    //¿ qué debemos pintar?aqui estoy
    let tree = "*";


    //¿donde? en br o p
    let jumpPoint = "<br/>"
    let result= "";

    //loop for ya que sabemos el num de lineas a pintar
    for (let i = 1; i <= treeSize; i++){
        
        result += tree;

        //Arbol enter
         document.getElementById('demo1').innerHTML += result + jumpPoint; 
         //vas sumando los resultados incrementalmente

    }
/**
 * Entiendo los dos for, ya que uno y otro se van pintando en pantalla 
 * simultaneamente, pero por qué document.write() me pinta correctamente
 * y sin embargo document.getElement no?
 * 
 * 
 */


/***********************************************************************************/


/*     for (let i = 0; i <= treeSize; i++){

      result += breakPoint;

      console.log(result);
      
        for ( let j = 0; j <= i; j++){

            result += tree;
        }
     
    };

     document.getElementById('demo1').innerHTML = result; */

     
//https://www.codecademy.com/forum_questions/525e38cdabf8214770000804
    
/*      for (let i = 1; i <= treeSize; i++){
 
               for(let j = 1; j <= i; j++){

                //document.write("*");

                document.getElementById('demo1').innerHTML += ("*")

    }

            //document.write("<br>");

             document.getElementById('demo1').innerHTML += ("<br>")


} */
}
