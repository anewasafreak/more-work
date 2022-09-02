// ============ EIGHTH LESSON ============

// ========= FINAL FORM PRACTICE =========

// ====== EX. 1 ======
// function drawL(n) {
//   const size = Number(n.target.value);
//   let letterL = "";

//   let outputL = document.getElementById('L-output');

//   for (let i = 0; i < size - 1; i++) {
//     letterL += "L<br>";
//   }
//   for (let i = 0; i < size; i++) {
//     letterL += "L";
//   }

//   outputL.innerHTML = letterL;
// }

// ====== EX. 2 ======
// document.getElementById("C-input").addEventListener("input", drawC);

// function drawC(n) {
//     const size = Number(n.target.value);
//     let letterC = "";

//     let outputC = document.getElementById('C-output');

//     for (let i = 0; i < size - 1; i++) {
//         letterC += "C";
//       }
//     for (let i = 0; i < size; i++) {
//       letterC += "C<br>";
//     }
//     for (let i = 0; i < size; i++) {
//       letterC += "C";
//     }

//     outputC.innerHTML = letterC;
//   }

//   document.getElementById("C-input").addEventListener("input", drawC);

// ====== EX. 3 ======

// function giveName(event) {
// let name = event.target.value;
// document.body.append(name + ', ')
// }

// document.querySelector('input[type=text]').addEventListener('blur', giveName)

// ====== EX. 4 ======
// function compareNumbers(event) {
//   event.preventDefault();
//   let firstNumber = document.getElementById('n1').value
//   let secondNumber = document.getElementById('n2').value
//   if(Math.abs(100 - firstNumber) < Math.abs(100 - secondNumber)) {
//     alert(firstNumber)
//   } else {
//     alert(secondNumber)
//   }
// }

// document.querySelector('form').addEventListener('submit', compareNumbers)

// ====== EX. 5 ======
let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);
let counter = 0;

function guessNumber(event) {
  event.preventDefault();
  counter++
  guessedNumber = Number(document.querySelector("input[type=number]").value);
  if (guessedNumber === randomNumber) {
    alert(`You guesssed the number out of the ${counter} time!`);
  } else {
    alert("You didn't guess the number, try again!");
  }
}

document.querySelector("form").addEventListener("submit", guessNumber);
