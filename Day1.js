/* VARIABLE DECLARATION */
//------------------------------------------
var num = 23;
console.log("Number is printed via var", num);
//------------------------------------------
let name = "Sudipta"
console.log("Name is printed via let", name);
//------------------------------------------
const isMobile = false;
console.log("Mobile is printed via const", typeof (isMobile));
//------------------------------------------
const myarr = ["Sudipta", 23, "Male"];
console.log("this is array", Array.isArray(myarr));
console.log("this is obj", typeof (myarr));
//------------------------------------------
const myObj = {
    name: "Sudipta",
    age: 23,
    gender: "Male"
};
console.log("this is obj", typeof (myObj));
//------------------------------------------

let myname = ["Raj", "viaks"];
console.log("my name 1==>" + typeof myname);
myname = "Srinu";
console.log("my name 2==>" + typeof myname);

//------------------------------------------
const address = ["Bamdevpally", "rajarhat"];
// address = ["bam", "dev"]; not valid
// address[0] = "bam" In this way we can modified the vlaues ..
console.log("address is", address);
