let display = document.getElementById("output");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let value = button.textContent;
  button.addEventListener("click", () => {
    if (value == "AC") {
      display.textContent = "";
    } else if (value == "DEL") {
      display.textContent = display.textContent.slice(0, -1);
    } else if (value == "=") {
      display.textContent = eval(display.textContent);
    } else {
      display.textContent += value;
    }
  });
}
