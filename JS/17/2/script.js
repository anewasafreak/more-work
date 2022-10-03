// ============ SEVENTEENTH LESSON ============

// ========= OBJECT PRACTICE =========

// ====== EX.1 ======
// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// function addPersonToList(event) {
//   event.preventDefault();
//   let fullName = document
//     .getElementById("fullname")
//     .value.trim()
//     .split(" ")
//     .map(
//       (text) =>
//         text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
//     );

//   let name = fullName.shift();
//   let surname = fullName
//     .map(
//       (text) =>
//         text.charAt(0).toUpperCase() + text.slice(1).toLowerCase().trim()
//     )
//     .toString()
//     .replace(/,/g, " ");

//   let newFullName = new Person(name, surname);

//   let tr = document.createElement("tr");
//   let nameTd = document.createElement("td");
//   let surnameTd = document.createElement("td");

//   nameTd.innerText = newFullName.name;
//   surnameTd.innerText = newFullName.surname;
//   tr.append(nameTd);
//   tr.append(surnameTd);
//   document.querySelector("table").append(tr);

//   console.log(tr);
// }

// document.querySelector("form").addEventListener("submit", addPersonToList);

// ====== EX.2 ======
function Car(carBrand, model, mileage, price, image) {
  this.carBrand = carBrand;
  this.model = model;
  this.mileage = mileage;
  this.price = function () {
    alert(`the price is ${price}`)
  };
  this.image = image;
}

function addCar(event) {
  event.preventDefault();
  let car = new Car(
    document.getElementById("car-brand").value,
    document.getElementById("model").value,
    document.getElementById("mileage").value,
    document.getElementById("price").value,
    document.getElementById("image").value
  );

  let card = document.createElement("div");
  card.className = "card"

  let image = document.createElement("img");
  image.src = car.image;
  card.append(image);

  let carBrand = document.createElement("span");
  carBrand.innerText = car.carBrand;
  card.append(carBrand)

  let model = document.createElement("span");
  model.innerText = car.model;
  card.append(model)

  card.addEventListener("click", car.price)

  document.getElementById("wrapper").append(card);

  console.log(car)
}

document.querySelector("form").addEventListener("submit", addCar);

// ====== EX.3 ======
 let array = [1, 3, 3, 5, 5, 5]

 console.log(array)

 function arrayFilter(data) {
  let newArray = [...new Set(data)];
  console.log(newArray)
 }

 arrayFilter(array)