// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", ",", ".", "?"];

var randomPasswordArr = [];

var result = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var userPasswordLength = window.prompt("Please enter a password length between 8 and 128 characters")
if (userPasswordLength < 8 || userPasswordLength > 128 || isNaN(userPasswordLength)) {
  window.alert("Please click ok to try again.")
  writePassword();
}
var useUppercase = window.confirm("Do you want to include uppercase letters in your password?") 
  if (useUppercase) {
    randomPasswordArr.push(...uppercaseArr);
}
var useLowercase = window.confirm("Do you want to include lowercase letters in your password?")
if (useLowercase) {
  randomPasswordArr.push(...lowercaseArr);
}
var useNumbers = window.confirm("Do you want to include numbers in your password?")
if (useNumbers) {
  randomPasswordArr.push(...numbersArr);
}
var useSymbols = window.confirm("Do you want to include symbols in your password?")
if (useSymbols) {
  randomPasswordArr.push(...symbolsArr);
  
}

for (i = 0; i < userPasswordLength; i++) {
  var generateRandomItems = randomPasswordArr[Math.floor(Math.random() * randomPasswordArr.length)];
  result.push(generateRandomItems);
}

  return result.join(""); 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
