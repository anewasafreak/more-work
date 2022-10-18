/* ------------------------------ TASK 5 -----------------------------------

Turimas "users" masyvas.

Parašykite funckijas, kurios atlikas nurodytas užduotis

1. funkcija "filterCatOwers" - kaip argumentą priims masyvą ir duoto masyvo

atveju grąžins "users", kurie turi augintin5.

2. funkcija "filterChilds" - kaip argumentą priims masyvą ir duoto masyvo

atveju grąžins masyvą su "users", kurie yra nepilnamečiai.

-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasCat: true },

  { id: "2", name: "Ann Smith", age: 24, hasCat: false },

  { id: "3", name: "Tom Jones", age: 31, hasCat: true },

  { id: "4", name: "Rose Peterson", age: 17, hasCat: false },

  { id: "5", name: "Alex John", age: 25, hasCat: true },

  { id: "6", name: "Ronald Jones", age: 63, hasCat: true },

  { id: "7", name: "Elton Smith", age: 16, hasCat: true },

  { id: "8", name: "Simon Peterson", age: 30, hasCat: false },

  { id: "9", name: "Daniel Cane", age: 51, hasCat: true },
];

function filterCatOwers(massif) {
  let catUsers = massif.filter((object) => object.hasCat === true);
  return catUsers;
}

console.log(filterCatOwers(users));

function filterMinors(massif) {
  let minors = massif.filter((object) => object.age < 18);
  return minors;
}

console.log(filterMinors(users));

function bigFilter(massif) {
  let filteredMassif = massif
    .filter((object) => object.hasCat === true)
    .filter((object) => object.age < 18);
    return filteredMassif
}

console.log(bigFilter(users))