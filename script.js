const display =document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}
function Delete(){
    display.value = display.value.slice(0, -1)
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function appendRoot(){
        display.value = Math.sqrt(display.value);
}