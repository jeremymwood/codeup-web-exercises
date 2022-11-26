"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     return (`Hello ` + name + `.`);
// }

// sayHello(`codeUp`);

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'numberMessage'.
 *
 * console.log 'numberMessage' to check your work
 */
let myName = `Jeremy`;

let helloMessage = sayHello(myName);
console.log(helloMessage);


function sayHello(name) {
    return (`Hello ` + name + `.`);
}

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

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
    if (x === number) {
        return true;
    }

    return false;
}

console.log((random) + ` = ` + number +    ` (` + isTwo(random) + `)`);



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

// let billAmount = 33.42;
// let tipPercentage = 0.15;
//
// function calculateTip(billAmount,tipPercentage) {
//     return (billAmount * tipPercentage);
// };
//
// function calculateTotal(billAmount,tipPercentage) {
//     return (billAmount * (1 + tipPercentage));
// };
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


// let billAmount = prompt(`What is your bill amount?`);
// let tipPercentage = prompt(`What percentage would you like to tip?`);
//
// function calculateTip(billAmount,tipPercentage) {
//     return (billAmount * tipPercentage);
// };
//
// function calculateTotal(billAmount,tipPercentage) {
//     return (billAmount * (1 + tipPercentage));
// };
//
// console.log(`A ` + (tipPercentage * 100) + `% tip for a $` + billAmount +    ` meal is $` + calculateTip(billAmount, tipPercentage) + `.`);
//
// console.log(`The total bill is $` + calculateTotal(billAmount, tipPercentage) + `.`);

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
};


console.log(`Your discounted price is $` + applyDiscount(originalPrice, discountPercentage) + `.`);
