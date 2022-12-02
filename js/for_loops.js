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