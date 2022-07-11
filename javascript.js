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

//Start the prompts for the user, builds the password, and returns the password value back as 'emptyPassword'
function beginPrompt() {

  //A number counter to make sure people chose at least one option
  var notenoughOptions = 0;

  //Folks pick how long their password is to be. 
  var passLength = prompt("What is the desired password length?", "Choose between 8 and 128");
  //If they're cheaky and type in a word, we gotta put their shenanigans to an end.
  //First we make their input into a number type. If they put in non-number characters, it'll get converted to NaN
  //Also makes sure they didn't put in a decimal.
  passLength = parseInt(passLength);
  //If its Nan, everything stops and they gotta redo the process
  if (Number.isNaN(passLength)) {
    alert("Bruh, that is not a number."); 
    alert("Go google 'what is a number' then come back and try again.");
    emptyPassword = "Please Try Again";
    return emptyPassword;
  }

  //If the did put in a number but its not in the given range, they'll loop here indefinitely until they pick right.
  //I thought about giving them an escape but they can just refresh if they dont wanna play ball.
  while (passLength<8 || passLength>128) {
    var passLength = prompt("You chose a length out of bounds.", "Please - choose between 8 and 128");
    //Gotta make sure they didn't put in a non-number this time too, ugh
    passLength = parseInt(passLength);
    if (Number.isNaN(passLength)) {
      alert("First it's not in range, now its not even a number."); 
      alert("Go google 'what is a number' then come back and try again.");
      emptyPassword = "Please Try Again";
      return emptyPassword;
    } else if (passLength>=8 && passLength<=128) {
      break;
    }
  };

  //The four options (not including password length)
  //Selecting true concatinates that option's array with the array from which we build the password (i.e. touseArray)
  //LOWERCASE
  var lcA = confirm("Shall the password use lowercase letters?");
    if (lcA == true) {
      touseArrays = touseArrays.concat(lwrcharArray);
      notenoughOptions++;
    } else {
      alert("Lowercase letters will not be used.")
    };
  //UPPERCASE
  var ucA = confirm("Shall the password use uppercase letters?");
    if (ucA == true) {
      touseArrays = touseArrays.concat(uprcharArray);
      notenoughOptions++;
    } else {
      alert("Uppercase letters will not be used.")
    };
  //SPECIAL CHARACTERS
  var spA = confirm("Shall the password use special characters?");
    if (spA == true) {
      touseArrays = touseArrays.concat(spclcharArray);
      notenoughOptions++;
    } else {
      alert("Special characters will not be used.")
    };
  //NUMBERS
  var nA = confirm("Shall the password use numbers?");
    if (nA == true) {
      touseArrays = touseArrays.concat(numberArray);
      notenoughOptions++;
    } else {
      alert("Numeric characters will not be used.")
    };

  //Picking any option will increase this counter higher than 0. 
  //So if it is zero, they must have picked nothin' and they need to try again.
  if (notenoughOptions == 0) {
    alert("Please select at least one of the previous options.");
    alert("Your password has to be made with *something*");
    emptyPassword = "Please Try Again"
    return emptyPassword;
  }

  //Great, we got the length and our touseArray built with the options they want. Lets build the password:
  for (let i = 0; i < passLength; i++) {
    newLetter = touseArrays[Math.floor(Math.random() * touseArrays.length)];
    emptyPassword += newLetter;
  }

  //Now that its built I could just return the value. But, instead, I have some fun here depending on what options were taken ;)
  if (notenoughOptions == 4 && passLength == 128) {
    alert("You picked MAXIMUM OPTIONS™️ for MAXIMUM SECURITY™️");
    return emptyPassword;
  } else if (passLength >= 60) {
    alert("Jeez, Goodluck remembering that");
    return emptyPassword;
  } else if (notenoughOptions == 4) {
    alert("You picked all the options -- Lookin' Secure");
    return emptyPassword;
  } else {
    alert("Enjoy the password!");
    return emptyPassword;
   }
}

// Called at end of writePassword, resets the pass generation for next btn press
function resetAll() {
  touseArrays = [];
  newLetter = "";
  emptyPassword = "";
}

// Main func, writePassword is called when gnerateBtn is clicked
function writePassword() {
  var password = beginPrompt();
  passwordText.value = password;
  resetAll();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

