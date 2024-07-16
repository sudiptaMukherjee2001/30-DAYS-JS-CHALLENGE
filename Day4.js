/* Activity 1 :=> */
//Task 1:=>
/* for (let i = 1; i <= 10; i++) {
    console.log(i);

} */
// ----------------------------------------------

//Task 2:=>
/* for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${i * 5}`);

}  */
// ----------------------------------------------

/* Activity 2 :=> */

//Task 3:=>

/*
function sum(n) {
    let total = 0;
    let i = 1;
    while (i <= n) {
        total += i;
        i++;

    }
    return total;

}

let result = sum(10);
console.log(result); */

// ----------------------------------------------

//Task 4:=>
/* let n = 10
while (n > 0) {
    console.log(n);
    n--;
} */

//-----------------------------------------------

/* Activity 3 :=>*/

//Task 5 :=>
/* let n = 1
do {
    console.log(n);
    n++;

} while (n <= 5);
 */

// -----------------------------------------------

//Task 6 :=>
/*  Dry run
n! 
5! = 5*4*3*2*1 = 120 
5!= n=5 *  fact(1) =5
n-- n=4 * fact(5)=20  
n-- n=3 * fact(20)=60  
n-- n=2 * fact(60)=120 
n-- n=1 * fact(120)=120  */

/* 
let n = 5;
let fact = 1;

do {

    fact = n * fact;
    n--;


} while (n > 0);
console.log(`factorial is ${fact}`); */

// -----------------------------------------------

/* Activity 4 :=> */

//Task 7 :=>

/* let row = 5;
for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
        star = star + " *";
    }
    console.log(star);

} */


/* Activity 5 :=> */
//Task 8 :=>


/* for (let i = 1; i <= 10; i++) {
    if (i === 5) { continue };
    console.log(i);

}
 */
//Task 9 :=>

for (let i = 1; i <= 10; i++) {
    if (i === 7) { break };
    console.log(i);

}




