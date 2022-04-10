let pw = document.getElementById("password");
let pw2 = document.getElementById("password2");
let pw3 = document.getElementById("password3");
let pw4 = document.getElementById("password4");
const charAmountRange = document.querySelector("#charAmountRange");
const charAmountNumber = document.querySelector("#charAmountNumber");
const btnCopy = document.getElementById('btnCopy');
const btnCopy2 = document.getElementById('btnCopy2');
const btnCopy3 = document.getElementById('btnCopy3');
const btnCopy4 = document.getElementById('btnCopy4');


// Sync between range and number lenght of password
charAmountNumber.addEventListener('input', syncCharacterAmount)
charAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e){
    const value = e.target.value;
    charAmountNumber.value = value
    charAmountRange.value = value
}

// Random Pass Button Generator button click events
let btn = document.querySelector("#button");

btn.addEventListener("click", genPassword);
btn.addEventListener("click", genPassword2);
btn.addEventListener("click", genPassword3);
btn.addEventListener("click", genPassword4);


// Randomgen Pass functions 
function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = charAmountNumber.value;
    let password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1 );
    }

    pw.value = password;
}

function genPassword2() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = charAmountNumber.value;
    let password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    pw2.value = password;
}

function genPassword3() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = charAmountNumber.value;
    let password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    pw3.value = password;
}

function genPassword4() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = charAmountNumber.value;
    let password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    pw4.value = password;
}


// Copying the password 
btnCopy.addEventListener('click', () =>{
pw.select();
document.execCommand('copy');

});
 
btnCopy2.addEventListener('click', () =>{
pw2.select();
document.execCommand('copy');

});

btnCopy3.addEventListener('click', () =>{
pw3.select();
document.execCommand('copy');

});

btnCopy4.addEventListener('click', () =>{
pw4.select();
document.execCommand('copy');

});