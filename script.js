    let pw = document.getElementById("password");
    let pw2 = document.getElementById("password2");
    let pw3 = document.getElementById("password3");
    let pw4 = document.getElementById("password4");
    let btn = document.querySelector("#button");
    




    btn.addEventListener('click', genPassword)
    btn.addEventListener('click', genPassword2)
    btn.addEventListener('click', genPassword3)
    btn.addEventListener('click', genPassword4)




    
function genPassword() {
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let password = "";

for (var i = 0; i <= passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber+1);
}

pw.value = password;
}

function genPassword2() {
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let password = "";

for (var i = 0; i <= passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber+1);
}

pw2.value = password;
}

function genPassword3() {
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let password = "";

for (var i = 0; i <= passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber+1);
}

pw3.value = password;
}

function genPassword4() {
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let password = "";

for (var i = 0; i <= passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber+1);
}

pw4.value = password;
}

