`use strict`;

let fruits = [`apple`,`banana`,`tomato`,`grape`];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits.length);
// fruits[2] = 10;
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === `grape`) {
        break;
    }
    console.log(fruits[i])
}

// i | fruits.length | i < fruits.length | fruits[i]
// 0 | 4             | true              |apple
// 1 | 4             | true              |banana
// 2 | 4             | true              |tomato
// 3 | 4             | true              |grape
// 4 | 4             | false             |

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     *
     */

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();