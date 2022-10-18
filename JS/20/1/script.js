/* ------------------------------ TASK 7 -----------------------------------

Turimas "opel" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą

ir grąžins visus jo "key" masyve.

-------------------------------------------------------------------------- */

const audi = {
  make: "opel",

  model: "astra",

  year: 2005,

  color: "white",
};

function showObjectKeys(object) {
  objectKeys = Object.keys(object);
  return objectKeys
}

console.log(showObjectKeys(audi))