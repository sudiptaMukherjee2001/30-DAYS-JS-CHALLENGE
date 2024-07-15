/* Activity 1 :=>*/
/* let number = 0;
if (number > 0) {
    console.log("The number is positive");
}
else {
    console.log("The number is negative or zero");
} */
// -----------------------------------------------------

/* let myAge = 19;
if (myAge >= 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
} */

// -----------------------------------------------------

/* Activity 2 :=>*/


function findLargeNumber(num1, num2, num3) {
    if (num1 < num2 || num1 < num3) {
        if (num2 < num3) {
            return num3;
        }
        else {
            return num2;
        }
    }
    else {
        return num1;
    }
}
const largeNumber = findLargeNumber(31, 40, 90);

console.log(`${largeNumber} is large number`);

// -----------------------------------------------------

/* Activity 3:=> */

/* const dayCount = 2;

switch (dayCount) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday ");
        break;
    case 3:
        console.log("Today is Wednesday ");
        break;
    case 4:
        console.log("Today is Thursday ");
        break;
    case 5:
        console.log("Today is Friday ");
        break;
    case 6:
        console.log("Today is Saturday ");
        break;
    case 7:
        console.log("Today is Sunday ");
        break;
    default:
        console.log("Invalid day");
}
 */
// -----------------------------------------------------
/* let score = 91;
let grade;

switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`You got a ${grade}!`); */
// -----------------------------------------------------

/* Activity 4:=> */
/*
const number = 12;

(number % 2) === 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`); */

// -----------------------------------------------------

/* Activity 5 :=> */

/* function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let year = 2000;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
} */




