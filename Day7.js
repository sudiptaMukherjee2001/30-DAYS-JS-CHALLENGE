// --------------------------------------------------------
/* Day 7 Object  */
// --------------------------------------------------------

/* const bookObj = {
    title: "Bomkesh bakshi",
    author: "Sharadindu Bandyopadhyay",
    price: 200,
    pages: 200,
    publisher: "Ananda Publishers",
    authorDetails: function () {
        return `${this.author} is a author of ${this.title} which is a famous bengali detactive character ...`

    },
    UpdateTitle: function (params) {
        this.title = params;
    }
} */
/* Activity 1 :=> */

/* Task 1 :=> */
// console.log("Book object==>", bookObj);

// --------------------------------------------------------

/* Task 2 :=> */
// Using Dot Notation :=>
//console.log("Book title==>", bookObj.title);

// Using Bracket Notation :=>
//console.log("Author name==>", bookObj["author"]);

// ----------------------------------------------------------

/* Activity 2 :=> */
/* Task 3 :=> */
// console.log(bookObj.authorDetails());
// ----------------------------------------------------------

/* Task 4 :=> */
// const newTitle = "Bomkesh-bakshi-book";
// bookObj.UpdateTitle(newTitle);
// console.log("Book title==>", bookObj.title);

// --------------------------------------------------------------

/* Activity 3 :=> */

// const libraby = {
//     name: "Saintthia town library",
//     books: [
//         {
//             title: "Bomkesh bakshi",
//             author: "Sharadindu Bandyopadhyay",
//             price: 200,
//             pages: 200,

//         },
//         {
//             title: "Feluda",
//             author: "Satyajit Ray",
//             price: 200,
//             pages: 200,
//         },
//     ]
// }
// /* Task 5 :=> */
// console.log("Library==>", libraby);
// --------------------------------------------------------------
/* Task 6 */
// console.log(` Name of the libraby is => ${libraby.name}`);

// libraby.books.map((book) => console.log(`Book name is =>${book.title}`));
// --------------------------------------------------------------

/* Activity 5 :=> */
/* Task 8 :=> */
const libraby = {
    name: "Saintthia town library",
    keys: "32",
    books: [
        {
            title: "Bomkesh bakshi",
            author: "Sharadindu Bandyopadhyay",
            price: 200,
            pages: 200,

        },
        {
            title: "Feluda",
            author: "Satyajit Ray",
            price: 200,
            pages: 200,
        },
    ]
}
// Iterating over the top-level properties of the library object
/* for (key in libraby.books) {
    const title = libraby.books[key].title;
    console.log(title);
    // if (key === 'keys') {
    //     console.log(libraby.keys);
    // }
} */
/* Task 9:=> */
const key = Object.keys(libraby);
const value = Object.values(libraby);
console.log("Key==>", key);
console.log("value==>", value);


