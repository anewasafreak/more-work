// ============ SIXTH LESSON ============

// ========= FORM BASICS =========

// ====== EX. 1-2 ======
// const form = document.querySelector('form')
// form.addEventListener('submit', alertName)
// form.addEventListener('submit', showAge)

// function alertName(event) {
//   event.preventDefault();
//   let name = document.querySelector('input[type=text]').value;
//   alert(name)
// }

// function showAge() {
//   let age = document.querySelector('input[type=number]').value;
//   let h1 = document.querySelector('h1');
//   h1.innerText = `Your age: ${age}`;
// }

// ====== EX. 3 ======
// const form = document.querySelector("form");
// form.addEventListener("submit", canDrive);

// function canDrive(event) {
//   event.preventDefault();
//   let name = document.querySelector("input[type=text]").value;
//   let age = document.querySelector("input[type=number]").value;
//   let h1 = document.querySelector("h1");
//   if (age >= 18) {
//     h1.innerText = `Can drive: ${name}`;
//   } else {
//     h1.innerText = `Will learn to drive: ${name}`;
//   }
// }

// ========= FORM PRACTICE =========

// ====== EX. 1 ======
// const form = document.querySelector("form");
// form.addEventListener("submit", auctionTicket);

// function auctionTicket(event) {
//   event.preventDefault();
//   let age = document.querySelector("input[type=number]").value;
//   let h1 = document.querySelector("h1");
//   if (age <= 16) {
//     h1.innerText = "3€"
//   } else if (age >= 60) {
//     h1.innerText = "4€"
//   } else {
//     h1.innerText = "6€"
//   }
// }

// ====== EX. 2 ======
const form = document.querySelector("form");
form.addEventListener('submit', canGoToMilitary)

function canGoToMilitary(event) {
  event.preventDefault();
}