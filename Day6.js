/* Activity 1 :=>*/

/* Task 1 :=> */
/* const myarr = [1, 2, 3, 4, 5];
console.log(myarr); */
// --------------------------------------------

/* Task 2 :=> */
/* const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const firstEle = myarr[0];
const lastEle = myarr[myarr.length - 1];
console.log("First element", firstEle);
console.log("Second element", lastEle); */
// --------------------------------------------

/* Activity 2 :=> */
/* Task 3 :=> */
// const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Task 3 :=> */
// myarr.push(10);
// console.log("Push method ==>", myarr);

/* Task 4 :=> */
// myarr.pop();
// console.log("Pop method ==>", myarr);

/* Task 5:=> */
// myarr.shift();
// console.log(myarr);

/* Task 6:=> */
/* myarr.unshift("Raju");
console.log(myarr); */
// --------------------------------------------

/* Activity 3:=> */
/* Task 7:=> */
/* const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = myarr.map((item) => {
    return (
        item * item
    )
})
console.log(newArr); */
// --------------------------------------------------

/* Task 8:=> */
/* const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filterdArr = myArr.filter((item) => {
    return (
        item % 2 === 0
    )
})
console.log(filterdArr);
 */
// ------------------------------------------------------

/* Task 9 :=> */

/* const myArr = [1, 2, 3, 4];
const sum = myArr.reduce((prevValue, currentVlaue) => {

    console.log("Previous value==>", prevValue);
    console.log("Current vlaue==>", currentVlaue);
    //  1+1=2 // prev+current; prev=2
    return prevValue = prevValue + currentVlaue;


}, 0)

console.log("Sum of all number==>", sum); */
// ------------------------------------------------------

/* Activity 4:=> */
/* Task 10:=> */

/* const myArr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i <= myArr.length - 1; i++) {
    console.log(myArr[i]);
} */
// ---------------------------------------------------------

/* Task 11:=> */
/* const myArr = [1, 2, 3, 4, 5, 6];
myArr.forEach((value, ind) => {
    console.log(`Value is ${value} and vlaue index will be ${ind}`);
}) */

// ------------------------------------------------------------

/* Activity 5:=> */
const twoDArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
/* Task 12:=> */
console.log("Whole 2d array", twoDArr);
/* Task 13 :=> */
console.log("Whole 2d array", twoDArr[0][2]);
console.log("Whole 2d array", twoDArr[1][1]);//5
twoDArr[1][1] = 10
console.log("Whole 2d array", twoDArr);
console.log("Whole 2d array", twoDArr[1][1]);//10





