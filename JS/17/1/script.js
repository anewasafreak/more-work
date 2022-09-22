/* --------------------------------------------------------------------------

Sukurkite konstruktoriaus funkciją iur klase "Person" (naudokite ES5), kuri sukuria objektus su 3 metodais:

name() - priima varda ir ji grazina: 'mano vardas: irasytas_vardas'. DONE

nameLastname() - priima varda tarkim 'Rokas' ir pavarde tarkim 'Rokevicius' ir grazina: 'Rokas Rokevicius' (abu pasiduoda atskirai).

age() - priima amziu ir grazina: 'mano amzius: irasytas_amzius';

------------------------------------------------------------------------------------ */

// function Person(name, surname, age) {
//   this.name = function () {
//     return "my name is: " + name;
//   };

//   this.nameLastName = function () {
//     return name + " " + surname;
//   };

//   this.age = function () {
//     return "my age is: " + age;
//   };
// }

// let Kai = new Person("Kai", "Jakers", 16);

// console.log(Kai.name());
// console.log(Kai.nameLastName());
// console.log(Kai.age());

class PersonName {
  constructor(name, surname, age) {
    this.name = name;

    this.surname = surname;

    this.age = age;
  }
  firstName() {
    return "my name is: " + this.name;
  }

  nameLastName() {
    return this.name + " " + this.surname;
  }

  personAge(n) {
    return "my age is: " + Number(this.age * n);
  }
}
let Sunny = new PersonName("Sunny", "balls", 15);

console.log(Sunny.firstName());
console.log(Sunny.nameLastName());
console.log(Sunny.personAge(1));
console.log(Sunny)