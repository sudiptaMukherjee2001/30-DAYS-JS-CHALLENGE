/* Activity 1 : => */
/* task 1 & 2 :=> */
/**
 * Represents an animal.
 * @class
 */
class Person {
    fname;
    lname;
    agee;
    constructor(name1, name2, age) {
        this.fname = name1;
        this.lname = name2;
        this.agee = age;
    }
    greeting() {
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years")
    }
    updateAge(num) {
        this.age = num;
    }
    static newGreeting() {
        console.log("this is static func");
    }
    get getterFunc() {
        return this.fname + " " + this.lname;
    }
    set setterFunc(name) {
        this.fname = name.newFirstname
        this.lname = name.newLastName;

    }
}
class Student extends Person {
    studentId = Math.floor(Math.random() * 2) + 1;
    static totalStudnetNum = 0;
    constructor(currectStudnt) {
        super();
        // this.studentId = Math.floor(Math.random() * 2) + 1;
        // this.currentStudentNum = currectStudnt;

        // Increment the static property each time a new instance is created
        Student.totalStudnetNum++;
        // console.log(`Total number of students: ${Student.totalStudnetNum}`);

    }
    getStudentId() {
        console.log(this.studentId);

    }
    /**
      @override    
      */
    greeting() {
        console.log("this is new greeting sms in student class==>" + this.studentId);
    }

}

const obj = new Person("Sudipta", "Mukherjee", 24);

const obj1 = new Student(1);
const obj2 = new Student(2);
const obj3 = new Student(3);
const obj4 = new Student(4);
const obj5 = new Student(5);
const obj6 = new Student(6);


/* obj.greeting();
console.log("previous age==>", obj.age);
obj.updateAge(28)
console.log("Updated age==>", obj.age); */

// ----------------------------------------------------------------------

/* Activity 2 : => task 3 & 4 */
/* console.log("studentId in student class==>", obj1.studentId);
obj1.greeting(); */


/* Activity 3 : => task 5 & 6 */
// Person.newGreeting();
// console.log(Student.totalStudnetNum);

/* Activity 4 : => task 6 & 7  :=> HOW TO USE GETTER AND SETTER FUNCTION*/
/* console.log(obj.getterFunc);
obj.setterFunc = { newFirstname: "raja", newLastName: "das" }
console.log(obj.getterFunc);
 */

/* Activity 5 :=> task 8 & 9 :=> how to use private fields */
class Account {
    #balance = 30000;

    depositeprice = 0;
    withdrawPrice = 0;

    deposite(depositeValue) {
        return this.#balance += depositeValue;

    }
    withDraw(withdrawMoneyValue) {

        return this.#balance -= withdrawMoneyValue;
    }

}
const obje = new Account;
const dept = obje.deposite(10000);
const withdrawl = obje.withDraw(20000)
console.log("Deposite===>", dept);
console.log("withDraw===>", withdrawl);


