let display = document.querySelector(".display");
let calculateButton = document.querySelector("#equal");
let clearButton = document.querySelector("#C");
let previousButton = document.querySelector("#step-up");
let nextButton = document.querySelector("#step-down");
let closeButton = document.querySelector("#off");
let values = [];
let i = 0;
calculateButton.addEventListener("click", resultDisplay);
clearButton.addEventListener("click", colorChange);
previousButton.addEventListener("click", displayPrevious);
nextButton.addEventListener("click", displayNext);
closeButton.addEventListener("click", closeTab);

function resultDisplay() {
  if (display.value === "") {
    display.style.color = "Red";
    display.value = "Please enter values";
  } else if (display.value === "Infinity") {
    display.style.color = "Red";
    display.value = "Not Defined";
  } else {
    let result = eval(display.value).toFixed(4);
    display.value = result;
    values[i] = result;
    console.log(values[i]);
    console.log(values);
    i++;
  }
}

function colorChange() {
  display.style.color = "white";
}

function displayPrevious() {
  if (i > 0) {
    i = i - 2;
    display.value = values[i];
  } else {
    display.value = "No more values";
  }
}
function displayNext() {
  if (i < values.length) {
    display.value = values[i];
    i = i + 2;
  } else {
    display.value = values[values.length - 1];
  }
}

function closeTab() {
  window.close();
}
