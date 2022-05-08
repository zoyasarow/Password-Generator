//In order to practice better and start from a place I understood more, I reworked and rewrote the assignment code 
//Some of this code has been influenced by Traversy Media's video: 
//(https://www.youtube.com/watch?v=duNmhKgtcsI)

//Variables
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!", "@", "#", "$", "%", "&", "?"];
var lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//DOM Elements 
var resultEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");

//Function Object
var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getNumber,
  symbol: getSymbol
};

//Event Listeners
generateBtn.addEventListener('click', () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//Generate password function 
function generatePassword(lower, upper, number, symbol, length) {

  var generatedPassword = " ";
  var typesCount = lower + upper + number + symbol;
  //console.log('typesCount:', typesCount);

//is placing elements into an array to be tested if true/false and filtered
  var typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
  //console.log('typesArray:', typesArray);

//creating result for no selections 
  if(typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
       const funcName = Object.keys(type)[0];
    //console.log('funcName:', funcName);
    
    generatedPassword += randomFunction[funcName]();
    });
  }

  var finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

//Random functions (breaking them down into each variable option)
function getRandomLower() {
  var lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return lettersLower[Math.floor(Math.random() * lettersLower.length)];
}

function getRandomUpper() {
  var lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
}

function getNumber() {
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  var symbols = ["!", "@", "#", "$", "%", "&", "?"];
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getSymbol())
