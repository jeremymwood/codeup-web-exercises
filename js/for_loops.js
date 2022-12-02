`use strict`;

// while (/*condition*/) {
//     // body
// }

// do {
//     //body
// } while(/*condition*/);

// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }

//billie dorrie solution
// function showMultiplicationTable(num) {
//     for (let i = 1, num = 7; i <= 10; i++) {
//         console.log(`${num} x ${i} = ` + (num * i));
//     }
// }

function showMultiplicationTable(num) {
    for(let i = 1; i < 10; i++){
        console.log(i + ` X ${num} = ` + (num * i));
    }
}

showMultiplicationTable(7);

console.log(`\n`);

for (let i = 1; i <= 10; i++) {
    let randomNum = Math.floor(Math.random() * 200 - 20) +20;
    // console.log(`iteration # ${i}:`);
    if (randomNum % 2 === 0) {
        console.log(`${randomNum} is even`)
    } else {
        console.log(`${randomNum} is odd`)
    }
}

for (let i = 0; i < 10; i++) {
    console.log(`${i}`.repeat(i));
}

console.log(`\n`)


for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}


// let valid = false;
// let userNumber = 0;
// do {
//     userNumber = prompt(`Enter an odd number between 1 and 49.`)
//     if (userNumber % 2 === 0) {
//         console.log(`that's even, try an odd number.`)
//         continue;
//     }
//     if (!isNaN(userNumber)) {
//         console.log(`that\n's not a number.`);
//         continue;
//     } else
//         valid = true;
// } while(!valid)
//
//     console.log(`number to skip is ${userNumber}`);
//
// for (let i=1;i <= 50; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     if(i === parseInt(userNumber)) {
//         console.log(`a wild ${userNumber} has appeared.`)
//     }
//     console.log(`this is an odd number.`);
// }

console.log(`\n`);

let i = 2;
while (i < 65536) {
    console.log(i *= 2);
}

console.log(`\n`);

const maxInventory = 100;
const minInventory = 50;
let inventory = Math.floor(Math.random() * (maxInventory - minInventory + 1) + minInventory);

// p = document.createElement(`p`);
// wl = document.createElement(`ul`);
//
// openList(`I have ${inventory} cones to sell.`);

// console.log(`i have ${inventory} cones to sell.`);
// do {
//     const maxPerSale = 5;
//     const minPerSale = 1;
//     let sold = Math.floor(Math.random() * (maxPerSale-minPerSale) - minPerSale);
//     if(sold <= inventory) {
//         inventory -= sold;
//         console.log(`${sold} cone ${sold === 1 ? `` : `s`} sold...`);
//     }  while(inventory > 0);
//     console.log(`yay, sold them all!`);
// }