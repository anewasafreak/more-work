// ============ SEVENTEENTH LESSON ============

// ========= OBJECT PRACTICE =========

// ====== EX.1 ======
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

function addPersonToList(event) {
  event.preventDefault();
  let fullName = document
    .getElementById("fullname")
    .value.trim()
    .split(" ")
    .map(
      (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );

  let name = fullName.shift();
  let surname = fullName
    .map(
      (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase().trim()
    )
    .toString()
    .replace(/,/g, " ");

  let newFullName = new Person(name, surname);

  let tr = document.createElement("tr");
  let nameTd = document.createElement("td");
  let surnameTd = document.createElement("td");

  nameTd.innerText = newFullName.name;
  surnameTd.innerText = newFullName.surname;
  tr.append(nameTd);
  tr.append(surnameTd);
  document.querySelector("table").append(tr);

  console.log(tr);
}

document.querySelector("form").addEventListener("submit", addPersonToList);

// ====== EX.2 ======
