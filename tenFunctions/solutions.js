"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//problem 1
function isTrue(x) {
    return x === true;
}

console.log(isTrue(true));

//problem 2
function isFalse(x) {
    if(x === false) {
        return true;
    } else {
        return false;
    }
}

console.log(isFalse(false));

//problem 3
function not(x) {
    return !Boolean(x)
}

console.log(not(0));

// problem 4
function addOne(x) {
    if(!isNaN(x)) {
        return parseInt(x) + 1;
    }
}

console.log(addOne(Infinity));

// problem 5
function isEven(x) {
    return parseInt(x) % 2 === 0;
}

console.log(isEven(1));

// problem 6
function isIdentical(x,y) {
    if(x === y) {
        return true
    } else {
        return false
    }
}

console.log(isIdentical(2,`2`));

// problem 7
function isEqual(x,y) {
    if(x == y) {
        return `is equal`
    } else {
        return `is NOT equal`
    }
}

console.log(isEqual(`1`, 1));

// problem 8
function or(x,y) {
    if((Boolean(x) || Boolean(y)) === true) {
        return true
    } else {
        return false
    }
}

//both values are non-zero strings, having a character count > 1
//returns will be true regardless
console.log(or(`hello`, `world`));

// problem 9
function and(x,y) {
    if((Boolean(x) && Boolean(y)) === true) {
        return true
    } else {
        return false
    }
}

//both values are non-zero strings, having a character count > 1
//returns will be true regardless
console.log(and(`hello`, `world`));

// problem 10
// function concat(x,y) {
//     if((typeof(x)) === (null || Boolean | NaN || undefined)) {
//         return `is null.`
//     } else {
//         return x + y
//     }
// }

// console.log(concat(`connect`, null));

function testAgain(x) {
    if(typeof x === null) {
        return `null`
    } else {
        return `else`
    }
}

console.log(typeof(`sdkjgfh`));