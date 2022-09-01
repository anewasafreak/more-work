// ============ FOURTH LESSON ============

// ========= WHILE / DO WHILE =========

// ====== EX. 1 ======
// let name = prompt('Please enter your name');
// let i = 0;

// while (i<3) {
//     console.log(name);
//     i++;
// }

// ====== EX. 2 ======
let combo = "";
let name = prompt("Please enter your name");
let times = 0;

do {
  combo += name;
  console.log(`times=${times}; combo="${combo}"`);
  times++;
} while (times < 4);

// ========= MATH OBJECT =========

// ====== EX. 1 ======
// let math = Math.cos(0);
// console.log(math)

// ====== EX. 2 ======
// let math = Math.floor(Math.random() * 5) + 1;
// console.log(math)

// ====== EX. 3 ======
// let math = Math.floor(Math.random() * 7) + 5;
// console.log(math)

// ====== EX. 4 ======
// const math = Math.floor(Math.random() * 5) + 1;

// if (math === 1) {
//     alert('You won the lottery!');
// } else {
//     alert("You didn't win the lottery, try again.");
// }

// console.log (math)

// ========= DOM MANIPULATION BASICS =========

// ====== EX. 1 ======
// const body = document.body;
// const h2 = document.createElement('h2');
// h2.innerText = 'Kajus';
// body.append(h2);
 
// ====== EX. 2 ======
// let nameID = document.getElementById('name');
// nameID.innerText = 'Kajus';

// ====== EX. 3 ======
// document.querySelector('li:last-child').innerText = 'Sūris'

// ========= COMPLEX DOM SELECTORS =========

// ====== EX. 1 ======
// document.querySelector('p.bluetext span').textContent = 'blue'

// ====== EX. 2 ======
// let firstElement = document.querySelector('ol li:first-child');
// let secondElement = document.querySelector('ol li:nth-child(2)');

// const firstElementText = secondElement.innerText;
// const secondElementText = firstElement.innerText;

// firstElement.textContent = firstElementText;
// secondElement.textContent = secondElementText;