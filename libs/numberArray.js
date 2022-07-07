export var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function getRandoNumber() {

    var number = numberArray[Math.floor(Math.random() * numberArray.length)];
    return number;
}