//INITIALIZATIONS

var lwrcharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uprcharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var spclcharArray = [ "+", "-", "=", "&", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "%", "$", "#", "@", ";", "<", ">", "_"];

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var touseArrays = [];

var newLetter = "";
var emptyPassword = "";

//ACCESS HTML BY DOM

// Password:
var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");


//FUNCTIONS

function beginPrompt() {
  var passLength = prompt("What is the desired password length?", "Choose between 8 and 128");
  if (8<=passLength<=128) {
    var passLength = prompt("You chose a length out of bounds.", "Please - choose between 8 and 128");
  }
}


// Called in beginning of writePassword, generates the password
function generatePassword() {

    if (!lwrcaseBox.checked && !uprcaseBox.checked && !specialsBox.checked && !numbersBox.checked) {
      emptyPassword = "You must make appropriate selections in the given criteria";
      return emptyPassword;
    }
    
    if (lwrcaseBox.checked) {
      touseArrays = touseArrays.concat(lwrcharArray);
    }

    if (uprcaseBox.checked) {
      touseArrays = touseArrays.concat(uprcharArray);
    }

    if (specialsBox.checked) {
      touseArrays = touseArrays.concat(spclcharArray);
    }

    if (numbersBox.checked) {
      touseArrays = touseArrays.concat(numberArray);
    }
    
    for (let i = 0; i < slider.value; i++) {
      newLetter = touseArrays[Math.floor(Math.random() * touseArrays.length)];
      emptyPassword += newLetter;
    }
    return emptyPassword;
}

// Both called at end of writePassword, resets the pass generation for next btn press
function resetPassword() {
  emptyPassword = "";
}

function emptyArray() {
  touseArrays = [];
}

// Main func, writePassword is called when gnerateBtn is clicked
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
  resetPassword();
  emptyArray();
}

// Add event listener to generate button
generateBtn.addEventListener("click", beginPrompt);

