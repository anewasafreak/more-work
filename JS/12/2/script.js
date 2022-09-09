// ============ TWELVETH LESSON ============

// ========= BOOLEAN =========

// ====== EX. 1 ======
let isLegalAge = 20 > 18;

console.log(isLegalAge);
console.log(isLegalAge.toString());

// ========= NUMBER =========

// ====== EX. 1-2 ======
let milkPrice = 2.243;

if (Number.isInteger(milkPrice)) {
  alert(`Nereikės centų. Pieno kaina: ${milkPrice.toFixed(2)}`);
} else {
  // alert(`Reikės centų. Pieno kaina: ${milkPrice.toFixed(2)}`);
}

// ====== EX. 3 ======
function setPrice(event) {
  event.preventDefault();
  let h1Price = document.createElement("h1");
  let gasPrice = document.getElementById('price').value;
  let gasAmount = document.getElementById('amount').value;
  let totalPrice = gasPrice * gasAmount;
  h1Price.textContent = totalPrice;
  document.body.append(h1Price)
}

document.querySelector('form').addEventListener('submit', setPrice)