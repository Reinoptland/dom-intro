// sanity check:
// console.log("HALLO FROM JS");

// element selecteren
const header = document.getElementById("bigTitle");
// elements are like objects
// properties:
console.log("INNERTEXT:", header.textContent);
console.log("ID", header.id);
console.log("Color", header.className);

// giving properties another value
header.textContent = "YOU GOT HACKED";

// calling methods on elements
// header.remove();

// creating new elements from scratch
const newText = document.createElement("p");
newText.textContent = "I AM A NEW PARAGRAPH!";
// and appending them
document.body.appendChild(newText);
console.log(newText);

// Responding to events
// - Select the button
// 1. Add id to the button (html)
// 2. select the button
const button = document.getElementById("best-button");
// console.log(button);

// - Listen to click events on the button
// - Handle the click event (pass a function as event handler)
button.addEventListener("click", (event) => {
  console.log("HANDLE IT!", event);
  const header = document.getElementById("bigTitle");
  console.log(header);
  header.innerText = "JavaScript rules everything around me";
});
