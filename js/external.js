"use strict";

// console.log('Hello from JavaScript!');
//
// alert(`Welcome to my website!`);
//
// let favColor = (prompt(`What is your favorite color?`));
//
// alert(`Great, ${favColor} is my favorite color too!`)

let littleMermaid = (prompt(`How many days did you rent The Little Mermaid?`));
let brotherBear = (prompt(`How many days did you rent Brother Bear?`));
let hercules = (prompt(`How many days did you rent Hercules?`));
let pricePerDay = (prompt(`What is the cost per day to rent a movie?`));
let totalCost = (littleMermaid + brotherBear +hercules) * pricePerDay;

alert(`Great, you rented The Little Mermaid for ${littleMermaid} days, Brother Bear for ${brotherBear} days and Hercules for ${hercules} days.  At a price per day of $ ${pricePerDay} per day, your total cost is $ ${totalCost}.`);



// console.log(`The total cost for movie rentals is $` +  ${totalCost} + `dollars.');