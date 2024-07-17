/* Activity 1 */
/* Task 1 :=>  */
/* NumberChecking(12);
function NumberChecking(num) {
    if (num % 2 === 0) {
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
    }
} */


//--------------------------------------------------
/* Task 2 :=>  */

/* function SquareOfANum(num) {
    return num * num;
}

const ans = SquareOfANum(2)
console.log(ans); */

//--------------------------------------------------

/* Activity 2 :=> Function Expression */
//Task 3 :=>

// const MaxNum = function (num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }

// const res = MaxNum(5, 3);
// console.log(res);

//--------------------------------------------------

// Task 4 :=>

/* const ConcatTwoString = function (str1, str2) {
    return str1 + " " + str2;
}
const res = ConcatTwoString("Sudipta", "Mukherjee");
console.log(res); */

// -----------------------------------------------------

/* Activity 3 :=> */

// Task 5 :=>

/* const SumOfTwoNum = (num1, num2) => {
    return num1 + num2;

}
const res = SumOfTwoNum(2, 2);
console.log(res); */

// ---------------------------------------------------------

// Task 6 :=>
/* const isCharPresent = (str) => {
    return str.includes("S");
}

const res = isCharPresent("Sudipta");
console.log(res); */

// -------------------------------------------------------------

/* Activity 4 :=> */

//Task7:=>

/* const prod = (prod1, prod2 = 5) => {
    return prod1 * prod2;

}

const res = prod(2);
console.log(res); */

//----------------------------------------------------------------

// Task 8:=>
/*
const greeting = (name, age = 22) => {
    return `${name} is eligible for voting because your age is  ${age} which is 18+`
}
const res = greeting("Sudipta");
console.log(res); */

// ------------------------------------------------------------------

/* Activity 5 :=> */

//Task 9 :=>

/* const CallNTime = (func, num) => {
    for (let i = 1; i <= num; i++) {
        func();
    }
}

//CallNTime(greeting, 5);// we can not access the greeting func before greeting function declaration. because hoisting is not present in arrow function

const greeting = () => {
    console.log("This is greeting Function");
}
CallNTime(greeting, 5);/ /We did not get error here because we first declare the greeting fucntion and then use it.
*/

// ----------------------------------------------------------------------

/* Task 10 :=>  */

const newFunc = (func1, func2, val) => {
    const result = func1(val);
    console.log(result, "this is result");//4
    const result1 = func2(result);
    console.log(result1, "this is resultds");
    return result1;
}

const add = (value) => {
    return 2 * value;

}
const sub = (value) => {
    console.log("inside sub func");
    return 3 * value;
}
const res = newFunc(add, sub, 2);
console.log("res", res);