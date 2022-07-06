// // Change the values and operators below to test your algorithm meets all conditions
// var x = 50;
// var expression1 = (x > 25);
// var expression2 = (x == 50);

// var theState = {
//     exp1Answer: "DEBUG",
//     exp2Answer: "DEBUG",

//     test() {
//         console.log(this.exp1Answer + this.exp2Answer)
//     }
// };

// if (expression1) {
//     theState.exp1Answer = ("True ✅") 
//     } else { 
//         theState.exp1Answer = ("False ❌")
// }

// if (expression2) {
//     theState.exp2Answer = ("True ✅") 
//     } else { 
//         theState.exp2Answer = ("False ❌")
// }


// // Found @ https://stackoverflow.com/questions/54658421/how-to-display-a-string-javascript-in-html
// window.onload = function(){
//     document.getElementById("list").innerHTML = theState.exp1Answer + theState.exp2Answer;
// }

// var runDebug = function() {
//     theState.test();
// }


// let aiPick = "DEBUG";
let compChoices = ["rock", "paper", "scizzors"];
var choice = "rock";

var score = 0;

function displayScore() {
    document.getElementById("score").innerHTML =
       "Your score is " + score;
}

function theGame() {
    aiPick = compChoices[Math.floor(Math.random() * 3)];
    choice = prompt("Choose rock, paper, or scizzors");
    console.log(choice);

    if (!choice) {
        return;
    }

    //Folling if needs a compChoices.filter I think
    // if (choice = compChoices.filter(u => {
    //     u = compChoices
    // })) {
    //     error();
    //     return;
    // }
    
    else {letsPlay(choice, aiPick);
    }
}

function letsPlay(choice, aiPick) {

    
    if (choice === aiPick) {
        youDraw();
    }
    
    else if ((choice === "rock" && aiPick === "scizzors") || (choice === "paper" && aiPick === "rock") || (choice === "scizzors" && aiPick === "paper")) {
        youWin();
        score++;
        displayScore();
    }
    

    else {
        youLose();
        score--;
        displayScore();
    }
}

function youWin() {
    document.getElementById("demo").innerHTML =
       "You chose " + choice + " and comp chose " + aiPick + " so you won!";
}
function youLose() {
    document.getElementById("demo").innerHTML =
       "You chose " + choice + " and comp chose " + aiPick + " so you lost :(";
}
function youDraw() {
    document.getElementById("demo").innerHTML =
       "You chose " + choice + " and comp chose " + aiPick + " so you draw!";
}
function error() {
    document.getElementById("demo").innerHTML =
       "Uh oh! Something went wrong! Maybe you can't spell? ;)";
}

