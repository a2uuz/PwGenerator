    let pw = document.getElementById("password");
    let pw2 = document.getElementById("passwordT");
    passwordT
   
   
   
   
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





    function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
  
}