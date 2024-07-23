/* PROMISES */
// -----------------------------------------------------
/* ACTIVITY 1 :=> */
/* TASK 1 :=> */
/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise has been resolved");
    }, 2000);
});
promise
    .then((res) => {
        console.log(res);//
    }) */

/* TASK 2 :=>  */
/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise has been rejected");
    }, 2000)
})

promise.catch((res) => {
    console.log(res);
}) */

// ----------------------------------------------------
// ----------------------------------------------------

/* ACTIVITY 2 :=> */
/* TASK 3 :=> */
/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise has been resolved");
    }, 2000)
})
promise.then((res) => {
    console.log("first then");
    return res;
})
    .then((res) => {
        console.log("second then");
        console.log(res);
    }) */
// ----------------------------------------------------------
// ----------------------------------------------------------

/* ACTIVITY 3 :=> */
/* TASK 4:=> */
/* const createPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise has been resolved!");
        }, 2000);
    });
};
const myFunc = async () => {
    try {
        const result = await createPromise();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
};
myFunc();
console.log("This will print before promise resolve"); */

/* TASK 5:=> */
/* const createPromise = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            rejected("Promise has been rejected!");
        }, 2000);
    });
};
const func = async () => {
    try {
        const result = await createPromise();
        console.log(result);
    }
    catch (er) {
        console.log("rejete==>", er);
    }
}
func();
 */
// -------------------------------------------------
// -------------------------------------------------

/* ACTIVITY 4 :=> */
/* TASK 6:=> */
/* const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        console.log(result);
        return result;
    })
    .catch(error => {
        console.error('Error:', error);
    }); */

/* TASK 7 :=> */

/* const url = 'https://jsonplaceholder.typicode.com/users';

const fetechedData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // throw new Error('Network response was not ok');
            console.log('====================================');
            console.log("'Network response was not ok");
            console.log('====================================');
        }
        const result = await response.json();
        console.log(result);
    }
    catch (error) {
        console.log('====================================');
        console.log("data is not fetched===>", error);
        console.log('====================================');
    }
}

fetechedData() */

/* ACTIVITY 5 :=> */
/* TASK 8:=> */
/* const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, 42, "foo"]
}).catch((error) => {
    console.error(error);
}); */

/* TASK 9 :=> */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value); // "ONE"
}).catch((error) => {
    console.error(error);
});



