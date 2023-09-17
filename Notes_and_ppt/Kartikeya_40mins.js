// Understanding Synchronous JS Basics (DOM Manipulation basics) - Author Kartikeya Saini

// Logging inforamtion to console
console.log("hello world!");
console.error("Some error occured!");

// Log information on screen
document.write("I will be written on screen");

// variables
// let const var

let a = 10;
// let a = 20; // error

const c = 10;
// c = 10; // error

var b = 20;
function abc() {
  console.log(b); // undefined
  var b = 10; // Expressed as var b; b = 10;
}

function xyz() {
  console.log(d); // error
  let d = 10;
}

function pqr() {
  console.log(a, b, c); // error, error, undefined
  const a = 10;
  let b = 20;
  var c = 30;
}

// Don't forget to call the functions :)

/* Hoisting is a JavaScript behavior where variable and function declarations
are moved to the top of their containing scope during the compilation phase, before the code is
executed. This means that you can use variables and functions before they are declared in your code.
However, only the declarations are hoisted, not the initializations or assignments.  Explained in line 19 */

// alerts and prompts

alert("Somwthing went wrong");
let statuslog = confirm("You wanna proceed?");
console.log(statuslog);

let age = prompt("Enter your age!");
console.log(age);

// For loop
for (let i = 0; i < age; i++) {
  document.write(i); // prints on screen
}

// while loop
while (age >= 0) {
  document.write(age + " ");
  age--;
}

// For Each loop
array.forEach((element) => {
  console.log(element);
});

// map
array.map((element, index) => {
  console.log(element, index);
});

// Conditional statements (Just like any other programming language!)
// if( 2 > 1){
//     console.log("2 is greater");
// }
// else if{

// }
// else{

// }

// DOM Manipulation

// Get information by ID
const headingVar = document.getElementById("heading");
const ele = document.querySelector("#heading"); // to get single element
const arr = document.querySelectorAll(".heading"); // to get all the elements
// console.log(headingVar);

headingVar.innerText = "Changed from Js";

for (let i = 0; i < arr.length; i++) {
  arr[i].innerText = "Changed from JS " + i;
}

// Creating element
const containerVar = document.getElementById("container");
const child = document.createElement("p");
child.innerText = "I am a child paragraph";

// Appending the child in a container
containerVar.appendChild(child);

// Adding HTML Code inside a html element
const containerVar2 = document.getElementById("container");
containerVar2.innerHTML =
  "<p> I am a child paragraph </p> <br> <p>See I am the second paragraph and you could write more!</p>"; // Adding html code inside a html element.

// Changing styles
const headingVar = document.getElementById("heading");
headingVar.style.color = "red"; // Changes text color.
headingVar.style.backgroundColor = "blue"; // Changes bg color.

// Understanding events
const triggerVar = document.getElementById("trigger");
const targetVar = document.getElementById("target");

triggerVar.addEventListener("click", () => {
  // Events could be be hover, change, etc
  targetVar.style.color = "red"; // Changes text color when clicked on trigger.
});

// Handling classlists (i.e adding, removing and toggling)
const summary = document.getElementById("summary");
const details = document.getElementById("details");

summary.addEventListener("click", () => {
  details.classList.toggle("none");
  // details.classList.add("none"); // to add class
  // details.classList.remove("none"); // to remove class
});
