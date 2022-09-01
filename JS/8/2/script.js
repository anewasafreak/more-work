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

function giveName(event) {
let name = event.target.value;
document.body.append(name + ', ')
}

document.querySelector('input[type=text]').addEventListener('blur', giveName)

// ====== EX. 4 ======
