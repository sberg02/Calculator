//Global variables used in calculations
let num1 = [];
let num2 = [];
let operator;
let num1Joined;
let num2Joined;
let result;

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
    let parsed1 = parseInt(num1);
    let parsed2 = parseInt(num2);
    if (operator === '+') {
        return add(parsed1, parsed2);
    }
    else if (operator === '-') {
        return subtract(parsed1, parsed2);
    }
    else if (operator === '*') {
        return multiply(parsed1, parsed2);
    }
    else if (operator === '/') {
        return divide(parsed1, parsed2);
    }
    else {
        return 0;
    }
}
//Button that returns array of all the buttons
const screenSelect = document.querySelector('.screen');
const btnSelectAll = document.querySelectorAll('button');
const operatorBtn = document.querySelectorAll('.op-btn');
btnSelectAll.forEach(button => {
    button.addEventListener('click', (e) => {
        let selectNum1 = e.target.textContent;
        num1.push(selectNum1);
        num1Joined = num1.join('');
        screenSelect.textContent = num1Joined;
        console.log(num1Joined);
});
});
//Stores 
operatorBtn.forEach(button => {
    button.addEventListener('click', (e) => {
    operator = e.target.textContent;
    screenSelect.textContent = operator;
    console.log(operator);
    });
});
//I think the best route is to store the clicks in the array then use join
//to mash them into one number. Then you have one array. End array collection 
//when you hit an operator? Collect second array and join. Then run operate when = is pushed.
const clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', () => {
    num1 = [];
    num2 = [];
    screenSelect.textContent = '';
}); 


const equalsBtn = document.querySelector('#equals-button');
equalsBtn.addEventListener('click', () => {
    result = operate(num1Joined, operator, num2Joined);
    screenSelect.textContent = result;
}); 


/*            if (button == operatorBtn) {
                screenSelect.innerHTML = '';
                operator = operatorBtn.textContent;
                console.log(operator);
                const selectNum2 = e.target.textContent;
                num2.push(selectNum2);
                let num2Joined = num2.join('');
                screenSelect.textContent = num2Joined;
                console.log(num2Joined);
            } */