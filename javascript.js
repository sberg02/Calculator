//Global variables used in calculations
let num1;
let num2;
let operator;

//Functions for each operator
function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}
//Operate function that calls operator functions
function operate (num1, operator, num2) {
    if (operator === '+') {
        add(num1, num2);
    }
    else if (operator === '-') {
        subtract(num1, num2);
    }
    else if (operator === '*') {
        multiply(num1, num2);
    }
    else if (operator === '/') {
        divide(num1, num2);
    }
    else {
        return
    }
}
//Button that returns array of all the buttons
const screenSelect = document.querySelector('.screen');
const btnSelectAll = document.querySelectorAll('button');
btnSelectAll.forEach(button => {
    button.addEventListener('click', () => {
});
});

const clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', () => {
    screenSelect.innerHTML = 0;
}); 


const equalsBtn = document.querySelector('#equals-button');
equalsBtn.addEventListener('click', () => {
    operate(num1, operator, num2);
}); 