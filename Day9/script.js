/* ACTIVITY 1 :=> */
/* TASK 1:=> */
/*const text = document.querySelector("#childText");
text.innerText = "Text has changed by innerText property ..." */
// --------------------------------------------------------------------------------
/* Task 2 :=> */
/* const textClass = document.querySelector(".domClass");
textClass.style.fontSize = "4rem";
textClass.style.color = "white"
textClass.style.backgroundColor = "red" */

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/* ACTIVITY 2 :=> */
/* TASK 3:=> */

/* const body = document.body;
const div = document.createElement("div");
const h2 = document.createElement("h2");
h2.innerText = "This text has created by dom manipulation"
div.append(h2);
body.append(div); */


/* TASK 4 :=> */

/* const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "Fourth text append through  dom manipulation";
ul.append(li); */

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/* ACTIVITY 3 :=> */
/* TASK 5:=> */

/* const parentId = document.querySelector("#parentId");
parentId.remove(); */

/* TASK 6 :=> */
/* 
const ul = document.querySelector("ul");
const removeNode = ul.removeChild(ul.lastElementChild);
console.log('====================================');
console.log(removeNode.innerText);
console.log('===================================='); */

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/* ACTIVITY 4 :=> */
/* TASK 7:=> */
// const parentId = document.querySelector("#parentId");
/* console.log('====================================');
console.log(parentId.getAttribute("id")); //parentId

console.log(parentId.id); // parentId
console.log('====================================');  */

// parentId.id = "newAttr"
// parentId.setAttribute("id", "newAttr");

/* TASK 8 :=>  */
/* parentId.classList.add("newclass");

parentId.classList.remove("newclass")
if (parentId.classList.length === 0) {
    parentId.removeAttribute("class")
} */


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

/* ACTIVITY 5 :=> */
/* TASK 9:=> */
const text = document.querySelector("#childText");
text.style.border = "2px solid red"
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    text.innerText = "Text change to Sudipta..."
})
/* task 10 :=> */

text.addEventListener('mouseover', () => {
    text.style.border = "2px solid black"
})
text.addEventListener('mouseout', () => {
    text.style.border = "2px solid red"
})