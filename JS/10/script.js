// ============ TENTH LESSON ============

// ========= OBJECT EXERCISES =========

// ====== EX. 1 ======
// let car = { doors: 4, color: "red", brand: "opel" };

// ====== EX. 3 ======
// function createPerson(event) {
//   event.preventDefault();
//   let name = document.getElementById('name').value
//   let surname = document.getElementById('surname').value
//   person = {name, surname}
//   console.log(person)
// }

// document.querySelector('form').addEventListener('submit', createPerson)

function createPerson(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let isLegalAge = age >= 18 ? true : false;
  let person = { name, isLegalAge };
  console.log(person);
}

document.querySelector('form').addEventListener('submit', createPerson)