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
// Checkboxes:
var lwrcaseBox = document.getElementById("useLwrcase");
var uprcaseBox = document.getElementById("useUprcase");
var specialsBox = document.getElementById("useSpecials");
var numbersBox = document.getElementById("useNumbers");
// Slider:
var slider = document.getElementById("passLengthSlider");
var output = document.getElementById("passLengthText");

//FUNCTIONS

// Called in beginning of writePassword, generates the password
function generatePassword() {

    if (!lwrcaseBox.checked && !uprcaseBox.checked && !specialsBox.checked && !numbersBox.checked) {
      emptyPassword = "Check some boxes ya dingus";
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
generateBtn.addEventListener("click", writePassword);




// SLIDER CODE:

output.value = slider.value; // Display the default slider value
// Updates the other input method when its correspondent is changed (e.g. slider moves when numbers are typed in box)
slider.oninput = function() {
  output.value = this.value;
}

output.oninput = function() {
  slider.value = this.value;
}