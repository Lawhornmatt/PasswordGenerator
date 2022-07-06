var lwrcharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uprcharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var spclcharArray = [ "+", "-", "=", "&", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":", "%", "$", "#", "@", ";", "<", ">", "_"];

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var newLetter = "";
var emptyPassword = "";

function resetPassword() {
  emptyPassword = "";
}

function generatePassword() {
    for (let i = 0; i < 5; i++) {
      newLetter = lwrcharArray[Math.floor(Math.random() * lwrcharArray.length)];
      // console.log(newLetter); DEBUG
      emptyPassword += newLetter;
    }
    // console.log(emptyPassword); DEBUG
    return emptyPassword;
}


// Get references to the #generate & #password elements
var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");

// Write password to the #password input
function writePassword() {
  // console.log("Button was pressed"); DEBUG
  var password = generatePassword();
  // console.log(password); DEBUG
  passwordText.value = password;
  resetPassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
