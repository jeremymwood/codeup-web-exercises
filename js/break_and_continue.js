let userNumber = prompt(`Pick a number between 1 and 49.`);
// console.log(userNumber);

for (let i = 1; i < 50; i++) {
    let skipNumber = 27;
    console.log('Loop counter is: ' + i);
    if(i === skipNumber){
        console.log('skip number ' + skipNumber + `.`);
    }
    if(i === skipNumber +1){

    }
    continue;
    console.log('We have reached the stopping point: break!');
    break;
    console.log('You will never see this line.');
}

//Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:

// Number to skip is: 27

// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

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

// console.log(`\n`);
//
// let i = 2;
// while (i < 65536) {
//     console.log(i *= 2);
// }
//
// console.log(`\n`);
//
// const maxInventory = 100;
// const minInventory = 50;
// let inventory = Math.floor(Math.random() * (maxInventory - minInventory + 1) + minInventory);

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