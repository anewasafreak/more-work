// ============ NINETEENTH LESSON ============

// ========= PRACTICE WITH COOKIES AND LOCALSTORAGE =========

// ====== EX.1 ======
/* function saveName(e) {
  e.preventDefault();
  let person = `name= ${document.getElementById("name").value}`;
  document.cookie = person;
}

function resetName(e) {
  e.preventDefault()
  document.cookie = "name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  console.log('works')
}

let decodedCookie = decodeURIComponent(document.cookie);
console.log(decodedCookie);
if (decodedCookie.includes("name")) {
  let newDecodedCookie = decodedCookie.split("=")
  console.log(newDecodedCookie[1]);
  let h1 = document.createElement("h1");
  h1.innerText = newDecodedCookie[1];
  document.body.append(h1)
  document.getElementById("reset").style.display = "block"
  document.getElementById("name").style.display = "none"
  document.getElementById("submit").style.display = "none"
} else {
  document.getElementById("reset").style.display = "none"
  console.log("also works");

}

document.querySelector("form").addEventListener("submit", saveName);
document.getElementById("reset").addEventListener("click", resetName); */

// ====== EX.2 ======
/* function getInfo(e) {
  e.preventDefault();

  function Person() {
    this.name = document.getElementById("name").value;
    this.surname = document.getElementById("surname").value;
    this.description = document.querySelector("textarea").value;
    this.pfp = document.getElementById("pfp").value;
  }

  let person = new Person();
  let personString = JSON.stringify(person);
  localStorage.setItem("person", personString);
}

function loadInfo() {
  if (localStorage.length > 0) {
    document.querySelector("form").style.display = "none";
    let localStoragePerson = JSON.parse(localStorage.getItem("person"));
    createCard(localStoragePerson);
  }
}

function createCard(data) {
  let card = document.createElement("div");
  card.id = "card";

  let pfp = document.createElement("img");
  pfp.src = data.pfp;
  pfp.style = "max-width: 25%"

  let fullName = document.createElement("h1")
  fullName.innerText = data.name;
  fullName.innerText += " " + data.surname;

  let description = document.createElement("p");
  description.innerText = data.description

  card.append(pfp);
  card.append(fullName)
  card.append(description)
  document.body.append(card);
}

loadInfo();

document.querySelector("form").addEventListener("submit", getInfo); */

// ====== EX.3 ======
let users = [];

function loadTable() {
  let localStorageUsers = JSON.parse(localStorage.getItem("users"));

  if (localStorage.length > 0) {
    for (let i = 0; i < localStorageUsers.length; i++) {
      let tr = document.createElement("tr");
      let nameTd = document.createElement("td");
      let surnameTd = document.createElement("td");
      nameTd.innerText = localStorageUsers[i].name;
      surnameTd.innerText = localStorageUsers[i].surname;
      tr.append(nameTd);
      tr.append(surnameTd);
      document.querySelector("table").append(tr);
    }

    console.log(localStorageUsers);
  }
}

loadTable();

function addToTable(name, surname) {
  let localStorageUsers = JSON.parse(localStorage.getItem("users"));

  let tr = document.createElement("tr");
  let nameTd = document.createElement("td");
  let surnameTd = document.createElement("td");
  nameTd.innerText = name;
  surnameTd.innerText = surname;
  tr.append(nameTd);
  tr.append(surnameTd);
  document.querySelector("table").append(tr);
}

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

function addPersonToList(event) {
  event.preventDefault();

  let fullNameArray = document
    .getElementById("fullname")
    .value.trim()
    .split(" ")
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

  let name = fullNameArray.shift();

  let surname = fullNameArray
    .map(
      (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase().trim()
    )
    .filter((text) => {
      return text !== "";
    })
    .toString()
    .replace(/,/g, " ");

  let fullName = {
    name: name,
    surname: surname,
  };

  if (localStorage > 0) {
    users.push(JSON.parse(localStorage.getItem("users")));
  }

  users.push(fullName);

  localStorage.setItem("users", JSON.stringify(users));

  addToTable(name, surname);
}

document.querySelector("form").addEventListener("submit", addPersonToList);
