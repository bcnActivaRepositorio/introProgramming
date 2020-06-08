
const notasClase = () =>{

    //pregunta
    let numIterations = document.getElementById("num1").value;

    numIterations = parseInt(numIterations);

    //control
    let contador = 0;

    //question new prompt
    let veces;

    //array x notes
    let nota;

    //container math ops
    let mediaNotas = 0;

    //max y min
    let max = 0;

    let min = 10;

    //texto
    let text;


    //Vitaminado para los avanzados
    //let media = notas.reduce((a, b) => (a + b) / notas.length);

    for (let i = 1; i <= numIterations; i++){

        nota = parseInt(prompt("Introduce la nota" + " " + "número" + i + ": "));

        (nota > max) ? max = nota : false;
        
        (nota < min) ? min = nota : false;

        mediaNotas += nota; //container suma
    }
    //maths ops media
    mediaNotas = mediaNotas / numIterations;  

    switch(true){
        case(mediaNotas === 5) :

        text = ("Aprobais por los pelos");

            break;

        case (mediaNotas < 5):

        text = ("Sois unos zoquetes...por mi culpa!");
            break;

        case(mediaNotas > 5 || mediaNotas < 7):

        text = (" Todo en esta vida se puede mejorar! Pero llevaís el camino correcto!");

            break;

       case(mediaNotas > 7):

        text = (" Sois unos cracks!");

            break;

        default:

            text = ("I'd give it a goal!");
    }


    document.getElementById('demo').innerHTML = text;
    
       
/*    document.getElementById('demo').innerHTML = `La nota media de los datos introducidos es: ${media}`;

    //math methods
    let numMax = Math.max(...notas); //==> Math.max.apply(Math, notas);

    document.getElementById('demo1').innerHTML = `La nota más alta introducida ha sido: ${numMax}`; //fair enough!

    //math methods
    let numMin = Math.min(...notas); //==> Math.min(Math, notas);

    document.getElementById('demo2').innerHTML = `La nota más baja introducida ha sido: ${numMin}`; */

    

}
/***********************************************************************************/

//DOCUMENTACION
//Math.max(), Math.min()
//https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa

//loop adding
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex

//Hate loops 
//https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d