`use strict`;

// while (/*condition*/) {
//     // body
// }

function multiplyI(start,factor){
    let i = start;
    while (i <= factor){
        console.log(i);
        i*=2;
    }
}
multiplyI(2,100000000);

// do {
//     //body
// } while(/*condition*/);

// sell all cones
// random number cones to sell between 50 and 100 before you start your loop
// Inside loop generate  random number between 1 and 5, amount bought by clients
// log cones sold to each person


// do {
// } while(/*condition*/);

let conesToSell = Math.floor(Math.random() * 50) + 50;
let customerNumber = 1;
console.log(`Starting cones: ${conesToSell}`);

do {
    let customerQty = Math.floor(Math.random() * 5) + 1;
    if(conesToSell >= customerQty) {
        // continue;
        console.log(`Customer #${customerNumber} ordered ${customerQty} cones.  Remaining cones: ${conesToSell}.`);
        conesToSell -= customerQty;
        customerNumber++;
    }
    if(conesToSell === 0) {
        console.log(`Customer #${customerNumber} ordered ${customerQty} cones.  Remaining cones: ${conesToSell}.\nYou sold all your cones!`);
        break;
    }
    // continue;
} while (conesToSell >= 0);



// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones