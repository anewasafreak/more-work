// ============ FOURTEENTH LESSON ============

// ========= ARRAY SORTING =========

// ====== EX. 1-2 ======
let friendNames = [
  "Ethan",
  "Indigo",
  "Sunny",
  "Paulina",
  "Teresa",
  "Jogaile",
  "Gabija",
];

console.log(friendNames.sort());
console.log(friendNames.sort((a, b) => (b > a ? 1 : -1)));

// ====== EX.3 ======
let numberArray = [5, 10, 20, 11, 12, 1, 0, 14, 25];

console.log(numberArray.sort((a, b) => (b > a ? 1 : -1)));

// ====== EX.4 ======
let secondNumberArray = [10, 5, 20, 4];

secondNumberArray.sort((a, b) => (b > a ? 1 : -1));
console.log(secondNumberArray[0]);

// ========= ARRAY REDUCING =========

// ====== EX.1 ======
let favoriteNumberArray = [10, 5, 20, 4];

const initialValue = 0;

favoriteNumberArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

// ====== EX.2 ====== INCOMPLETE
// let cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

// console.log(cars.reduce((a,v) => v.length === 3 ? a + 1: a, 0))

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(cars.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0));

// ====== EX.3 ======
const numbers = [5, 10, 20, 4, 11, 13];

console.log(numbers.reduce((a, v) => (a > v ? a : v), 0));

// ========= MASSIF METHODS  =========

// ====== EX.1-3 ======
const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

people
  .filter((x) => x.age >= 18)
  .map((v) => v.name)
  .sort()
  .forEach((v) => console.log(v));

// ====== EX.4 ======
const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "milk", price: 25 },
];

function fn(data) {
  drinks.sort((a, b) => (b.price > a.price ? 1 : -1));
  console.log(`The cheapest: ${data[data.length-1].name}; the most expensive: ${data[0].name}`)
}

fn(drinks);
