// ============ FIFTH LESSON ============

// ========= FUNCTIONS =========

// ====== EX. 1 ======
// function alertName(name) {
//   alert(name);
// }

// alertName("Kai");

// ====== EX. 2 ======
// function randomNumber() {
//   let math = Math.floor(Math.random() * 5) + 1;
//   console.log(math);
// }

// randomNumber();

// ====== EX. 3 ======
// function defineNameLength(name, surname) {
//   console.log(name.length + surname.length);
// }

// defineNameLength("Kai", "Jakers");

// ====== EX. 4 ======
// function findLetterNumber(i) {
//   let lettersArray = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   console.log(lettersArray[i]);
// }

// findLetterNumber(21);

// ====== EX. 4 ======
// function mathCalc(n1, n2, operator) {
//   switch (operator) {
//     case "multi":
//       operator = "*";
//       break;
//     case "div":
//       operator = "/";
//       break;
//     case "sub":
//       operator = "-";
//       break;
//     case "add":
//       operator = "+";
//   }

//   console.log(eval(n1 + operator + n2));
// }

// mathCalc(2, 3, "add");

// ====== EX. 5 ======
// function generateRandomNumber() {
//     let math = Math.floor(Math.random() * 10) + 1;
//     return math;
// }

// function squareNum(n) {
//     let number = n*n;
//     return number;
// }

// console.log(squareNum(generateRandomNumber()))

// ========= EVENTS =========

// ====== EX. 1-2-3 ======
// let alertBtn = document.querySelector("button");

// function nameAlert() {
//   alert("Kajus");
//   const body = document.body;
//   const br = document.createElement("br");
//   body.append(br);
//   body.append("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ducimus possimus in eligendi omnis sint.")
// }

// alertBtn.addEventListener("click", nameAlert);

// ====== EX. 4 ======
// let btnClick = document.querySelector("button");
// let i = 0;

// function countClicks() {
//   i++;
//   let h1 = document.querySelector("h1");
//   h1.innerText = `${i}`;
// }

// btnClick.addEventListener("click", countClicks);

// ====== EX. 5 ======
// let denyCopy = document.querySelector("p");

// function stopCopy() {
//   alert("Cannot copy")
// }

// denyCopy.addEventListener("copy", stopCopy);

// ====== EX. 6 ======
// let btnClick = document.querySelector("button");
// btnClick.addEventListener("click", generateSecondRandomNumber);

// function generateSecondRandomNumber() {
//     let math = Math.floor(Math.random() * 100) + 1;
//     document.querySelector('h1').innerText = `${math}`
// }

// ====== EX. 7 - incomplete ======
// let firstButton = document.querySelector("button:nth-child(2)");

// firstButton.addEventListener("click", ofLegalAge);
// document.querySelector("button:last-child").addEventListener("click", underage);

// function underage() {
//   alert("Underage - we don't have anything for you.");
// }

// function ofLegalAge() {
//   let h1 = document.createElement("h1");
//   document.body.appendChild(h1);
//   h1.innerText("Beer");
// }

// ====== EX. 8 ======
// let math = Math.floor(Math.random() * 3) + 1;

// console.log(math)

// let firstButton = document.getElementById('1');
// firstButton.addEventListener("click", guessTheNumberOne);

// function guessTheNumberOne() {
//   if (math === 1) {
//     alert('yay')
//   } else {
//     alert('nay')
//   }
// }

// let secondButton = document.getElementById('2');
// secondButton.addEventListener("click", guessTheNumberTwo);

// function guessTheNumberTwo() {
//   if (math === 2) {
//     alert('yay')
//   } else {
//     alert('nay')
//   }
// }

// let thirdButton = document.getElementById('3');
// thirdButton.addEventListener("click", guessTheNumberThree);

// function guessTheNumberThree() {
//   if (math === 3) {
//     alert('yay')
//   } else {
//     alert('nay')
//   }
// }

// ====== EX. 9 ======
// let button = document.querySelector('input');
// let p = document.querySelector('p');
// button.addEventListener('click', changeText);

// function changeText() {
//   p.innerText = "You're not listening to me!"
// }

// ====== EX. 10 ======
let h1 = document.querySelector('h1');
h1.addEventListener('mousemove', changeText)

function changeText() {
  h1.innerText = "Why won't you ever listen to me?"
}