
const notasClase = () =>{

    //pregunta
    let question = parseInt(prompt('¿Cuantas notas quieres introducir?'));

    //control
    let contador = 0;

    //question new prompt
    let veces;

    //array x notes
    let notas = [];

    //container math ops
    let media = 0;

    while(contador < question)  {

        contador ++;

        veces = parseInt(prompt('notas'));

        notas.push(veces);
    }

    //Vitaminado para los avanzados
    //let media = notas.reduce((a, b) => (a + b) / notas.length);

    for (let i = 0; i < notas.length; i++){

        media += notas[i]; //container suma
    }
    //maths ops media
    media = media / notas.length;  
       
   document.getElementById('demo').innerHTML = `La nota media de los datos introducidos es: ${media}`;

    //math methods
    let numMax = Math.max(...notas); //==> Math.max.apply(Math, notas);

    document.getElementById('demo1').innerHTML = `La nota más alta introducida ha sido: ${numMax}`; //fair enough!

    //math methods
    let numMin = Math.min(...notas); //==> Math.min(Math, notas);

    document.getElementById('demo2').innerHTML = `La nota más baja introducida ha sido: ${numMin}`;

    

}
/***********************************************************************************/

//DOCUMENTACION
//Math.max(), Math.min()
//https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa

//loop adding
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex

//Hate loops 
//https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d