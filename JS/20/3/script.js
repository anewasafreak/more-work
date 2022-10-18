/* ------------------------------ TASK 5 -----------------------------------

Turimas "users" masyvas.

Parašykite funckijas, kurios atlikas nurodytas užduotis

1. funkcija "filterCatOwers" - kaip argumentą priims masyvą ir duoto masyvo

atveju grąžins "users", kurie turi augintin5.

2. funkcija "filterChilds" - kaip argumentą priims masyvą ir duoto masyvo

atveju grąžins masyvą su "users", kurie yra nepilnamečiai.

-------------------------------------------------------------------------- */
// ES5 FUNCTION

function Everything(object, file, url) {
  this.object = object;
  this.file = file;
  this.url = url;

  this.showObjectKeys = function () {
    console.log(Object.keys(this.object));
  };

  this.file = function () {
    fetch(this.file)
      .then((x) => x.json())
      .then((data) => console.log(data));
  };

  // this.showFileKeys = fetch(this.file)
  //   .then((x) => x.json())
  //   .then((data) => console.log(Object.keys(data)));

  this.url = fetch(this.url)
    .then((x) => x.json())
    .then((data) => console.log(data));

  // this.showUrlKeys = fetch(this.url)
  //   .then((x) => x.json())
  //   .then((data) => console.log(Object.keys(data)));
}

let manyObjects = new Everything(
  {
    make: "opel",

    model: "astra",

    year: 2005,

    color: "white",
  },
  "cars.json",
  "https://api.publicapis.org/entries"
);

//ES6 CLASS

class EverythingAtOnce {
  constructor(object, file, url) {
    this.object = object;
    this.file = file;
    this.url = url;
  }

  showObjectKeys() {
    console.log(Object.keys(this.object));
  }

  showFile() {
    fetch(this.file)
      .then((x) => x.json())
      .then((data) => console.log(data));
  }

  showUrl() {
    fetch(this.url)
      .then((x) => x.json())
      .then((data) => console.log(data));
  }
}

let manyMoreObjects = new EverythingAtOnce(
  {
    make: "opel",

    model: "astra",

    year: 2005,

    color: "white",
  },
  "cars.json",
  "https://api.publicapis.org/entries"
);
