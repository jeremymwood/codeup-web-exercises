"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeUp") // returns "Hello, codeUp!"
 */


function sayHello(name) {
    return (`Hello ` + name + `.`);
}

console.log(sayHello(`Jeremy 1`));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


let helloMessage = sayHello(`Jeremy 2`);
console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


let myName = `Jeremy 3`;
console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

let number = 2;

function isTwo(x) {
    return x === number;
}

console.log(`${random} = ${number} (${isTwo(random)})`);
//
// console.log((random) + ` = ` + number +    ` (` + isTwo(random) + `)`);


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// first todo
// let billAmount = 33.42;
// let tipPercentage = 0.15;
//
// second todo
// let billAmount = prompt(`What is your bill amount?`);
// let tipPercentage = prompt(`What percentage would you like to tip?`);
//
// function calculateTip(billAmount,tipPercentage) {
//     return (billAmount * tipPercentage);
// }
//
// function calculateTotal(billAmount,tipPercentage) {
//     return (billAmount * (1 + tipPercentage));
// }
//
// console.log(`The tip amount for a $` + billAmount +    ` meal is $` + calculateTip(billAmount, tipPercentage) + `.`);
//
// console.log(`The total bill is $` + calculateTotal(billAmount, tipPercentage) + `.`);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// redefined variables inserted above to precede function call

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

let originalPrice = 100;
let discountPercentage = 0.2;

function applyDiscount(originalPrice,discountPercentage) {
    return (originalPrice - (originalPrice * discountPercentage));
}

console.log(`Your discounted price is $` + applyDiscount(originalPrice, discountPercentage) + `.`);


//check for push after moving local directory

//blackjack game
// math floor 1-11
//deal two cards, prompt to hit or stay
//check if less than or equal to 21


// console.log(`\n\n*** BLACKJACK GAME ***`);
//
// let firstCard = Math.floor((Math.random() * 11) + 1);
// let secondCard = Math.floor((Math.random() *11) + 1);
// let thirdCard = Math.floor((Math.random() *11) + 1);
//
// let firstScore = (firstCard + secondCard);
// let secondScore = (firstScore + thirdCard);
//
// let firstMove = prompt(`${firstCard} + ${secondCard} = ${firstScore}.\nHit or stay?`);
// let secondMove = prompt(`${firstCard} + ${secondCard} + ${thirdCard} = ${secondScore}.\nHit or stay?`);
//
// switch(firstMove) {
//     case `hit`:
//         console.log(`${firstCard} + ${secondCard} + ${thirdCard} = $`);
//         break;
//     case `stay`:
//         alert(`stay`);
//         break;
//     default:
//         alert(`please advise`);
//         break;
// }
//
// console.log(firstMove);
//
// // console.log(`Your current score is ` + (firstCard + secondCard) + `.  Would you like to hit or stay?`);
