// ============ FOURTH LESSON ============

// ====== EASY ======

// let firstNumber = prompt('Enter your first number')
// let secondNumber = prompt('Enter your second number')

// alert(+firstNumber + +secondNumber)

// ====== MEDIUM/HARD ======

let myBtn = document.querySelector('input[type=button]')

function calculate() {
    let name = prompt('Enter your name')
    let firstNumber = prompt('Enter your first number')
    let operation = prompt('Enter the mathematical operation')
    let secondNumber = prompt('Enter your second number')
    
    const body = document.body;
    const h3 = document.createElement('h3');
    body.append(h3)
    h3.innerText = `${name}: ${firstNumber} ${operation} ${secondNumber}  = ${eval(firstNumber + operation + secondNumber)}`
}

myBtn.addEventListener('click', calculate)