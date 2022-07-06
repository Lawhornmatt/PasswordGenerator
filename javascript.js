// Assignment code here

var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

var newLetter = "";
var emptyPassword = "";

function resetPassword() {
  emptyPassword = "";
}

function generatePassword() {
    for (let i = 0; i < 5; i++) {
      newLetter = characters[Math.floor(Math.random() * characters.length)];
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
