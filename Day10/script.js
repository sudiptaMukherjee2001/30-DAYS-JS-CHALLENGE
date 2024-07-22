/* ACTIVITY 1 :=> BASIC EVENT HANDLING */
/* TASK 1:=> */
/* const text = document.querySelector("#childText");
text.style.border = "2px solid red"
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    text.innerText = "Text change to Sudipta..."
})
 */

/* TASK 2:=>*/
/* const img = document.querySelector("img");
const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("dblclick", (res) => {
    console.log(res);
    if (img.style.visibility === "hidden") {
        img.style.visibility = "visible"
    }
    else {
        img.style.visibility = "hidden"
    }
}) */

/* -----------------------------------------------------------
   -----------------------------------------------------------
*/

/* ACTIVITY 2 :=> MOUSE EVENTS */
/* 
const mouseEvent = document.querySelector("#mouseEvent");
mouseEvent.style.border = "2px solid yellow";
mouseEvent.style.width = "40vw";
mouseEvent.style.height = "40vh"; */

/* TASK 3:=> */
/* mouseEvent.addEventListener("mouseover", () => {
    mouseEvent.style.backgroundColor = "red"
}) */
/* TASK 4:=> */
/* mouseEvent.addEventListener("mouseout", () => {
    mouseEvent.style.backgroundColor = "blue"

}) */

/* -----------------------------------------------------------
   -----------------------------------------------------------
*/

/* ACTIVITY 3 :=> KEYBOARD EVENTS */

/* Task 5 :=> */
/* const input = document.querySelector("#myInput");
input.addEventListener("keydown", (res) => {
    console.log(`${res.key} is pressed`);
}) */

/* Task 6 :=> */
/* const input = document.querySelector("#myInput");
const p = document.querySelector("p");
input.addEventListener("keyup", (res) => {
    console.log (res.target.value)
    p.textContent = res.target.value;
}) */

/* -----------------------------------------------------------
   -----------------------------------------------------------
*/
/* ACTIVITY 4 :=> KEYBOARD EVENTS */

/* Task 7 :=> */
/* const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData.get("namee"));
}) */

/* TASK 8 :=> */
/*
 const p = document.querySelector("p");
function myFunction() {
    let x = document.getElementById("mySelect").value;
    p.textContent = x;
}
 */
/*
   --------------------------------------------------------------
   -----------------------------------------------------------
*/
/* ACTIVITY 5 :=> */
// TASK 9 :=>
/* document.querySelector("ul").addEventListener("click", (res) => {
    console.log("click", res.target.textContent);
}) */

/* Task 10:=> */
const div = document.querySelector("#parentDiv");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "new para";
    div.append(paragraph);
})
div.addEventListener("click", (res) => {
    if (res.target.nodeName === "P") {
        console.log("click", res.target.textContent);

    }

})