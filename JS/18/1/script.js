// let person = {
//   name: "Rokas",
//   city: "Vilnius",
//   age: 25,
//   car: "volvo",
// };

// let objectString = JSON.stringify(person) //pavercia person i stringa, nes setItem negali skaityti array/object .)
// // console.log(objectString)

// // let normalObject = JSON.parse(objectString) //atvercia i objekta!
// // console.log(normalObject)

// localStorage.setItem('myObject', objectString) //uzdeda local storage nauja objekta vardu "myObject" su objectString (person objekto stringas) parametrais

// let objectFromLocalStorage = localStorage.getItem('myObject') //pasiima local storage objekta .0
// let personConvertedObject = JSON.parse(objectFromLocalStorage) // convertina local storage paimta stringa i objekta

// console.log(personConvertedObject)

// let objectKeys = Object.keys(person) //object keys paima objekto parametrus (turėtų console logint array su "name", "city", "age", "car")

// for(let i = 0; i < objectKeys.length; i++) {
//     let key = objectKeys[i]; //paima objekto parametrus, kiekvieną atskirai
//     console.log(person[key]) //console logina person parametrus kurie yra nustatyti su viršutiniu kintamuoju. paėmus person parametrą console logina parametro reikšmę
// }

// console.log(Object.keys(person));

//ĮKOPIJUOTAS KODAS

// 1. Sukurti 3 inputus vardas, pavarde, amzius ir mygtuka save DONE

// 2. Susikurti objekta, kuriame bus name, lastname ir age DONE

// 2. uzpildzius inputus,spausti save ir sudeti reiksmes i objekta ir nustatyti keys name,lastname,age i atitinkamas vertes is inputu DONE

// 3. ir issaugoti i localStorage (nepamirstam JSON stringify) DONE

// 4. Papildomai mygtukai reset, show all saved1

let index = 0;

function addPerson(event) {
  event.preventDefault();

  if (!index === Number(localStorage.index)) {
    index = localStorage.index;
  }

  function Person() {
    this.name = document.getElementById("name").value;
    this.surname = document.getElementById("surname").value;
    this.age = Number(document.getElementById("age").value);
  }

  let person = new Person();

  let personString = JSON.stringify(person);

  localStorage.setItem(`person${index}`, personString);

  localStorage.setItem("index", index);
  index++;
}

document.querySelector("form").addEventListener("submit", addPerson);

document
  .getElementById("reset")
  .addEventListener("click", () => localStorage.clear());

function showSavedElements() {
  let shownArray = JSON.parse(localStorage)
  for (let i = 0; i < localStorage.length; i++) {}
  let name = document.createElement("p");
  name.innerText = `name: ${localStorage.person[i]}`;
}

console.log(localStorage.index)

let shownArray = JSON.parse(localStorage)

console.log(shownArray)