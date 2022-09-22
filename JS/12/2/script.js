// ============ TWELVETH LESSON ============

// ========= BOOLEAN =========

// ====== EX. 1 ======
// let isLegalAge = 20 > 18;

// console.log(isLegalAge);
// console.log(isLegalAge.toString());

// ========= NUMBER =========

// ====== EX. 1-2 ======
// let milkPrice = 2.243;

// if (Number.isInteger(milkPrice)) {
//   alert(`Nereikės centų. Pieno kaina: ${milkPrice.toFixed(2)}`);
// } else {
//   alert(`Reikės centų. Pieno kaina: ${milkPrice.toFixed(2)}`);
// }

// ====== EX. 3 ======
// function setPrice(event) {
//   event.preventDefault();
//   let h1Price = document.createElement("h1");
//   let gasPrice = document.getElementById('price').value;
//   let gasAmount = document.getElementById('amount').value;
//   let totalPrice = gasPrice * gasAmount;
//   h1Price.textContent = totalPrice;
//   document.body.append(h1Price)
// }

// document.querySelector('form').addEventListener('submit', setPrice)

// ========= STRING =========

// ====== EX. 1 ======
// function repeatName(event) {
//   event.preventDefault();
//   let numberOfRepeatedTimes = Number(
//     document.querySelector("input[type=number]").value
//   );
//   let name = document.querySelector("input[type=text]").value;

//   if (Number.isInteger(numberOfRepeatedTimes)) {
//     for (let i = 0; i < numberOfRepeatedTimes; i++) {
//       h1 = document.createElement("h1");
//       h1.append(name);
//       document.body.append(h1);
//     }
//   } else {
//     alert("number isn't an integer!");
//   }
// }

// document.querySelector("form").addEventListener("submit", repeatName);

// ====== EX. 2 ======
// function howLongIsName(event) {
//   event.preventDefault();
//   // WITH TRIM
//   // let fullNameLength = Number(document.querySelector('input[type=text]').value.trim().length);

//   // WITH REPLACEALL
//   let fullNameLength = Number(document.querySelector('input[type=text]').value.replaceAll(' ','').length);
//   alert(`Your name is ${fullNameLength} long`)
// }

// document.querySelector('form').addEventListener('submit', howLongIsName)

// ====== EX. 3-4 ======
function addNameAsH1(event) {
  event.preventDefault();
  let fullName = document.querySelector('input[type=text]').value.split(' ')
  // 3

  // let nameH1 = document.createElement('h1')
  // let surnameH1 = document.createElement('h1')
  // nameH1.innerText = fullName[0]
  // surnameH1.innerText = fullName[1]
  // document.body.append(nameH1)
  // document.body.append(surnameH1)

  //4
  
  for(let i = 0; i < fullName.length; i++) {
    let h1 = document.createElement('h1');
    h1.innerText = fullName[i];
    document.body.append(h1)
    console.log(h1)
  }
}

document.querySelector('form').addEventListener('submit', addNameAsH1)