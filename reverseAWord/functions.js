const reverseStr = () =>{

    //containers
    let reverseName = "";

    let text;

    //data
    let wordTo = document.getElementById('word1').value;

    //first checkpoint
    (wordTo === "") ? wordTo = prompt(" You really need to write down a word!") : true;

    //you need some cleaning
    wordTo = wordTo.trim(); //replace(/\s+/g, "").trim();

    wordTo = wordTo.toLowerCase();

    //extension string
    let extension = wordTo.length;

    //iteracion
    for ( let i = extension - 1; i>= 0; i--){

        //iteramos por el length y colocamos la ultima palabra dentro de container
        reverseName += wordTo[i];
    }

    //pintado
    text = `${wordTo} se ha convertido en ${reverseName}`;

    document.getElementById('demo').innerHTML = text;

}

//se aprenden!!
/**
 * const reverseStr = () =>{

    //data
    let wordTo = document.getElementById('word1').value;

    //first checkpoint
    (wordTo === "") ? wordTo = prompt(" You really need to write down a word!") : true;

    //you need some cleaning
    wordTo = wordTo.replace(/\s+/g, "").trim();

    wordTo = wordTo.toLowerCase();

    //Now, keep in mind, if I use split() it will return an arr of the string sentence
    //split
    wordTo = wordTo.split("");

    //container new arr
    let arr = [];

    //length
    let lengthWord = wordTo.length;

    console.log(lengthWord);

    //loop
    for (let i = 0; i < lengthWord; i++){

       arr += wordTo.splice(-1); //corta el arr original y lo empuja a arr
    }
    
    let node = `This your reversed word: <strong>${arr}</strong>`;

    document.getElementById('demo').innerHTML = node;

}
 */