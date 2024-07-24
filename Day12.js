/* ERROR HANDELING */
/* Activity 1 :=> */
/* Task 1 :=> */
/* const func = (num1) => {

    if (num1 > 0) {
        return num1;
    }
    else {
        throw new Error("Error has occured due to mismatch type of data");
    }

}
try {
    const res = func("dsf")
    console.log(res);

} catch (error) {
    console.log("Error is ==>", error.message);
} */

/* Task 2 :=> */
/* const divison = (num1, num2) => {

    if (num2 > 0) {
        return num1 / num2;
    }
    else {
        throw new Error("Please give denominator value greater than zero");
    }
}
try {
    console.log(divison(4, 0));
} catch (er) {
    console.log(er.message);
} */

/* -----------------------------------------------
-------------------------------------------------- */

/* Activity 2 :=> */
/* Task 3 :=> */
/* const func = () => {
    try {
        console.log("Inside try block");
        throw new Error("Inside catch block");
    }
    catch (er) {
        console.log(er.message);
    }
    finally {
        console.log("Inside finally block");
    }
}
func(); */
/* -----------------------------------------------
-------------------------------------------------- */
/* Activity 3 :=> */
/* Task 4 :=> */
/* Task 5  */
/* both are not done i have to complete custom error topic from hitesh sir */

/* Activity 4 :=> */
/* Task 6 */
/* const newPromise = new Promise((resolve, reject) => {
    const isresolved = Math.random() > 0.5;
    console.log(Math.random());
    console.log(isresolved);
    setTimeout(() => {
        if (isresolved) {
            resolve("Promise is resolved !!!");
        }
        else {
            reject("promise has been rejeted !!!")
        }
    }, 2000);


})

newPromise.then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    })
 */

/* Task 7 :=> */
/* const newPromise = new Promise((resolve, reject) => {

    const isresolved = Math.random() > 0.5;
    console.log(Math.random());
    console.log(isresolved);
    setTimeout(() => {
        if (isresolved) {
            resolve("Promise is resolved !!!");
        }
        else {
            reject("promise has been rejeted !!!")
        }
    }, 2000);


})

const func = async () => {
    try {
        const res = await newPromise;
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
func(); */

/* Activity 5 :=> */
/* Task 8 :=> */
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com");
        const data = await response.json();
        console.log(data);


    } catch (error) {
        console.log("url is not proper==>", error);
    }
}
fetchData()