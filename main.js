let display = document.getElementById("output");

/**
 * When a user clicks on a button, it should display in the output
 */

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i].textContent);
}
