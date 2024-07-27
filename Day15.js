/* CLOSURE */
/* Activity 1 */
/* Task 1 :=> */
/* const outerFunction = () => {
    const outerVariable = "This is outer variable";
    function innerFuntion() {
        console.log("this==>", outerVariable);
    }
    innerFuntion();
}
outerFunction(); */

/* Task 2 :=> */
/* function outerfunc() {
    let count = 0;
    function incrementCounter() {
        console.log("count", count);
        count++;
        return count;
    }
    return incrementCounter;
}
const innerFuncRef = outerfunc();
innerFuncRef();
innerFuncRef();
innerFuncRef();
innerFuncRef(); */
/* Activity 2:=> */
/* Task 3 :=> */
/* function genarateId() {
    let id = Math.floor(Math.random() * 6);

    function trackId() {
        console.log("unique id", id);
        id++;
        return id;
    }
    return trackId;
    // trackId();

} */
/*
 After generateId finishes execution, if there are no references to its local variables (id), and hence they are no longer accessible. but in the above code i returned the reference of trackId func and trackId func has the access of local variable of outer function .. so incremented value  of id will not be lost.. but if we call the trackId function immediately then i won't get the incremented value..
 */
// genarateId(); // 3
// genarateId(); //1
/* const uniqueId = genarateId();
uniqueId();//3
uniqueId();//4 */

/* Task 4 :=> */

/* function outerfunc() {
    const name = "Sudipta";
    function greeting() {
        console.log(name, "<==this is a user name");
    }
    greeting();
}
outerfunc(); */

/* Activity 3 ==> closure in loops */

/* task 5==> */
/* const functionsArray = [];

for (var i = 0; i < 5; i++) {
    functionsArray.push(
        (function (index) {
            return function () {
                console.log("this is index==>", index);
            }
        })(i)
    );
}
functionsArray.forEach(func => {
    func();
});
 */
/* Activity 4 :=> */
// task 6 :=>
function module() {
    const arr = [1, 2, 3, 4, 5, 6];
    return {

        listAllEle: () => {
            // arr.map((ele) => console.log(ele));
            return arr.map((ele) => { return ele });
        },
        addItem: () => {
            const newlength = arr.push(23);
            return newlength;
        },
        removeItem: () => {
            // arr.pop()
            return arr.pop()
        }
    }
}
const func = module();

console.log("list all element", func.listAllEle());
console.log("new lenth by adding new element", func.addItem());
console.log("list all elememt after adding new ele", func.listAllEle());
console.log("Remove the last element", func.removeItem());
