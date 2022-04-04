// const charAmountRange = document.querySelector("#charAmountRange");
// const charAmountNumber = document.querySelector("#charAmountNumber");
// const form = document.querySelector("#passGenForm");


// charAmountNumber.addEventListener('input', syncCharacterAmount)
// charAmountRange.addEventListener('input', syncCharacterAmount)

// form.addEventListener('submit', e =>{
//     e.preventDefault()
//     const password = generatePassword(cha)
// })



// function syncCharacterAmount(e){
//     const value = e.target.value;
//     charAmountNumber.value = value
//     charAmountRange.value = value

// }

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.' 
    return symbols [Math.floor(Math.random()* symbols.length)]
}

console.log(getRandomNumber())
console.log(getRandomUpper())
console.log(getRandomLower())
console.log(getRandomSymbol())


