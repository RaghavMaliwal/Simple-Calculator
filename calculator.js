let display = document.querySelector(".display");

let calculateButton = document.querySelector("#equal");
let clearButton = document.querySelector("#C");
let blackModeButton = document.querySelector("#step-up");


calculateButton.addEventListener("click", resultDisplay);
clearButton.addEventListener("click", colorChange);
blackModeButton.addEventListener("click", toggle);

function resultDisplay() {
    if(display.value === ""){
        display.style.color="Red";
        display.value = "Please enter values";
        

    } 
    else if(display.value === "Infinity"){
        display.style.color="Red";
        display.value = "Not Defined";
        
    }
    else {
        let result = eval(display.value);
        display.value = result;
    }  
}


function colorChange() {
    display.style.color="white";
}

