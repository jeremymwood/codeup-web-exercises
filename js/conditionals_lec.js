"use strict";

let magicNumber = 3;
let userChoice = 3;

function getMessageFromUserChoice(userChoice, magicNumber) {
    if (userChoice === magicNumber) {
        console.log(`Correct!`);
    } else if (userChoice < magicNumber) {
        console.log(`Too low!`);
    } else {
        console.log(`Too high!`);
    }
}
// console.log(getMessageFromUserChoice(4,magicNumber));

let result = getMessageFromUserChoice(2,magicNumber);

result = getMessageFromUserChoice(3,magicNumber);

result = getMessageFromUserChoice(4,magicNumber);