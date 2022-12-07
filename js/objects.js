(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: `Jeremy` ,
        lastName: `Wood`
    };

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = `Hello from ${person.firstName} ${person.lastName}.`;

    // person.sayHello();
    console.log(person.sayHello);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    let discountPercentage = 12;
    let discountMin = 200;
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discount(shoppers){
        if (shoppers.amount >= discountMin){
            console.log(`${shoppers.name}'s bill is ${shoppers.amount}.\n${shoppers.name}'s discount is ${discountPercentage}%.\n${shoppers.name}'s discounted bill is ${shoppers.amount-((discountPercentage/100) * shoppers.amount)}`);
        }  else {
            console.log(`${shoppers.name}'s bill is ${shoppers.amount}.\n${shoppers.name} has NO discount.\n${shoppers.name}'s bill remains ${shoppers.amount}`);
        }

    }

    shoppers.forEach(discount);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title:`The Catcher in the Rye`, author:{firstName: `J.D.`, lastName:`Salinger`}},
        {title: `The Gulag Archipelago`, author:{firstName: `Aleksandr`,lastName: `Solzhenitsyn`}},
        {title: `The Incal`, author: {firstName: `Alejandro`, lastName: `Jodorowsk`}},
        {title: `The Book of the Law`, author: {firstName: `Aleister`, lastName: `Crowley`}}, {title: `Invisible Cities`, author: {firstName: `Italo`, lastName: `Calvino`}}
    ]

    function bookList(books){
        console.log(`${books.author.firstName} ${books.author.lastName}\n${books.title}`);
    }
    books.forEach(bookList);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log(`\n`)


    // function bookList(books){
    //     console.log(`Book #${books[{}]}:\n${books.author.firstName} ${books.author.lastName}\n${books.title}`);
    // }
    // books.forEach(bookList);

    for(const book of books){
        console.log(`
Book # ${books.indexOf(book) + 1}
Title: ${book.title}
Author: ${book.author.firstName} ${book.author.lastName}`);
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, fName, lName){
        let book = {
            title: title,
            author: {
                firstName: fName,
                lastName: lName
            }
        };
        book.showBookInfo = function (){
            console.log(`
Book # ${index + 1}
Title: ${this.title}
Author: ${this.author.firstName} ${this.author.lastName}\`);
    }`)
        };
        return book
    }
    books.push(createBook(`Dune`, `Frank`, `Herbert`));
    console.log(books);

    function showBookInfo2(book){

    }

    let index = 1;
    for (const book of books){
        book.showBookInfo2(books);
        index++;
    }


})();