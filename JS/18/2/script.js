// ============ EIGHTEENTH LESSON ============

// ========= PRACTICE WITH JS METHODS =========

// ====== EX.1 ======
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    this.age >= 18
      ? console.log(this.name + " is an adult")
      : console.log(this.name + " is still a minor");
  }
}

let person = new Person("Sunny", 15);
let person2 = new Person("ur mom", 41);

person.compareAge();
person2.compareAge();

// ====== EX.2 ======
const filterArray = (data) => data.filter((a) => typeof a === "number");

let array = [1, 5, "a", "g", "z", 6];

console.log(filterArray(array));

// ====== EX.3 ======
function duplicateString(data) {
	newData = data.split("").map(element => element.match(/[a-z]/i) ? element.repeat(2) : element).join("")
	return newData
}


console.log(duplicateString("Petras 123 ^^%"));

// ====== EX.4 ======
function checkIfStringIsPostalCode(data) {
	let boolean = /[0-9]{5}|[0-9]{3}[a-zA-Z]{2}/.test(data)
	return boolean
}

console.log(checkIfStringIsPostalCode("12345"))

// ====== EX.5 ======
function jazzify(data) {
  console.log(
    data.map((element) =>
      element.endsWith("7") ? element : element.concat("7")
    )
  );
}

jazzify(["G", "F", "C"]);
