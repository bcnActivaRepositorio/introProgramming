
//datos
let username    = document.forms['vform']['nombre'];

let email       = document.forms['vform']['eMail'];

let phone       = document.forms['vform']['telefono'];

let passWord    = document.forms['vform']['secreto'];

let passConfirm = document.forms['vform']['secreto1'];

//errors pointers
let nameError    = document.getElementById('demo');

let mailError    = document.getElementById('demo1');

let phoneError   = document.getElementById('demo2');

let passError    = document.getElementById('demo3');

let confirmError = document.getElementById('demo4');

//event listeners pointers
//se añaden a las variables declaradas arriba
//segundo paramétro is a const =()=> Necesito declararlas!! 

username.addEventListener('blur', nameVerify, true);

email.addEventListener('blur', mailVerify, true);

phone.addEventListener('blur', phoneVerify, true);

passWord.addEventListener('blur', passVerify, true);

//passConfirm.addEventListener('blur', confirmVerify, true);

//validsacion datos

function validate(){
    let boleano = true;
    //validate username

    if (username.value == "") {

        nameError.innerHTML = "Username should be at least 3 characters";

        nameError.style.color = "red";

        username.focus();

        boleano = false;
    }

    if (username.value.length < 3) {

        nameError.innerHTML = "Username should be longer than that";

        nameError.style.color = "red";

        username.focus();

        boleano = false;
    }

    //validate mail

    if (email.value == "") {

        mailError.innerHTML = "Email is mandatory";

        mailError.style.color = "red";

        email.focus();

        boleano = false;
    }

    //validate phone
    //mind the gaps!!!!!!

    let telefon = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;

    if (!(telefon.test(phone.value))) {

        phoneError.innerHTML = "Phone is not correct";

        phoneError.style.color = "red";

        phone.focus();

        boleano = false;
    }

    if (phone.value == "") {

        phoneError.innerHTML = "Emptyness is not a proper phone number";

        phoneError.style.textEmphasis = "triangle #D55";

        //phoneError.style.color = "red";

        phone.focus();

        boleano = false;
    }

    //validate pass

    if (passWord.value == "") {

        passError.innerHTML = "Emptyness is not a proper Password";

        passError.style.color = "red";

        passWord.focus();

        boleano = false;
    }

    //you old dog, check if passwords are the same!

    if (passWord.value == "") {

        confirmError.innerHTML = "Ok, rocket science, um?";

        confirmError.style.color = "red";

        boleano = false;
    }
    if (passWord.value != passConfirm.value) {

        confirmError.innerHTML = "Ok, rocket science, um? They don't match!";

        confirmError.style.color = "red";

        boleano = false;
    }

    //you can't have many of the good stuff! Only one!

    return boleano;
}

//event Handlers ==> Handler grabs a listener up in the sky!! Mira arriba del codigo you fool!
//username
const nameVerify = () =>{

    if (username.value != "") {

        username.style.border = "1px solid #5e6e66";//Css you fool!!!

        nameError.innerHTML = "";

        return true;

    }
}

const mailVerify = () =>{

    if (email.value != "") {

        email.style.border = "1px solid #5e6e66";//Css you fool!!!

        mailError.innerHTML = "";

        return true;
    }
}

const phoneVerify = () => {

    if (phone.value != "") {

        phone.style.border = "1px solid #5e6e66";//Css you fool!!!

        phoneError.innerHTML = "";

        return true;
    }
}

const passVerify = () =>{

        //container booleano
        let validator = true;

    if (passWord.value != "") {

        passWord.style.border = "1px solid #5e6e66";//Css you fool!!!

        passError.innerHTML = "";

         validator;
    }



    if(passConfirm.value != passWord.value) {

        passConfirm.style.border = "1px solid #5e6e66";//Css you fool!!!

        passError.innerHTML = "";

        validator;
    }
     //only one of the good stuff

     return validator;

}
/************************** DOCUMENTACION *********************************************************/

//https://www.youtube.com/watch?v=WY4rvU4ImgE

//https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php

//file:///C:/Users/usuario/Desktop/Roberto/cursos/barcelonaActiva/ejerciciosPracticos/exe28/index.html

//https://codewithawa.com/posts/form-validation-with-javascript
