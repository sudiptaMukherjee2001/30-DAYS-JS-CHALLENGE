/* Activity 1 :=> */
/* Task 1 :=> */
/* const name = "Sudipta";
const age = 22;
console.log(`My name is ${name} and my age is ${age}`); */
// -----------------------------------------------------------
/* Task 2 :=> */
/* const name = "Sudipta";
const age = 22;
const uniName = "jain university";
console.log(`My name is ${name}. I am ${age} years old.\nCurrently I joined ${uniName} for my higherstudy`); */
// --------------------------------------------------------------

/* Activity 2 :=> */
/* Task 3 :=> */
/* const myArr = ["Sudipta", 22, "6/10/2001", "Jain university",];
const [, , , uni] = myArr;
const [firstElement, secondElement] = myArr;
console.log(firstElement, secondElement); */
// ------------------------------------------------------------------

/* Task 4 :=> */

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
}

const { title, author } = bookObj;
console.log(title, "and", author); */
// ------------------------------------------------------------------------


/* Activity 3 :=> */
/* Task 5 :=> */

/* const originalArray = [1, 2, 3, 4, 5, 6];
const newArr = [...originalArray, 7, 8, 9, 10];
console.log(originalArray);
console.log(newArr); */

// --------------------------------------------------------------------------

/* Task 6 :=> */
/* const sum = (...ags) => {
    return ags.reduce((pervVlaue, currentValue) => {
        return (
            pervVlaue = pervVlaue + currentValue
        )
    }
        , 0)

}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6)); */
// --------------------------------------------------------------------------


/* Activity 4 :=> */
/* Task 7 :=> */

/* const newFunc = (arg1, arg2 = 1) => {
    return arg1 * arg2;
}
console.log("With second parameter", newFunc(2, 3));
console.log("Without second parameter", newFunc(9)); */

// -----------------------------------------------------------------------------
/* Activity 5 :=> */
/* Task 8 :=> */
/* ENHANCED OBEJCT LITERALS  */

/* Enhanced object literals make object definitions more concise and expressive. They reduce boilerplate code and improve readability by allowing shorthand property names, method definitions, and computed property names. */

const name = "Sudipta";
const age = 22;
const dynamicKey = "dob";
const myObj = {
    name,
    age,
    [dynamicKey]: "6/10/2001", // here dynamicKey is a computed property name.
    sum() {
        console.log("this is sum function");
    }
}
console.log(myObj);



