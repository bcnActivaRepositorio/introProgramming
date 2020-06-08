const orderNames = () =>{

    //data
    let names = document.getElementById('word1').value;

    //first checkpoint
    (names === "") ? names = prompt(" You really need to write down a list!") : true;

    //you need some cleaning
     names = names.toLowerCase();

     //separador
     let separatedNames = names.split(" ");

    //container new arr
    let arr = [];

    let arr1 = [];

    //length
    let namesExtension = separatedNames.length;

    console.log(namesExtension);

    //loop to get single names
    for (let i = 0; i < namesExtension; i++){

       arr += " " + separatedNames.splice(-1);

       arr = arr.trim();

       //arr.length
       /* for (let k = arr.length - 1; k < arr.length; k++){

            arr1 += arr.split(-1);
       } */




    }
    
    let node = `This is your reversed list: <strong>${arr}</strong>`;

    document.getElementById('demo').innerHTML = node;

}