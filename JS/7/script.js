// ============ SEVENTH LESSON ============

// ========= FORM EXERCSISES =========

// ====== EX. 1 ======

// let form = document.querySelector('form')
// form.addEventListener('submit', calculatePayout)

// function calculatePayout(event) {
//     event.preventDefault();
//     const yearsWorked = document.querySelector('input[type=number]').value;
//     let payout = 50;
//     if (yearsWorked >= 10) {
//         payout += 50
//     };
//     if (yearsWorked >= 20) {
//         payout += 100
//     };
//     console.log(payout)
//     document.querySelector('h1').innerText = `Jūsų bonusas: ${payout} eurų`;
// }

// ====== EX. 2 ======

// let form = document.querySelector('form')
// form.addEventListener('submit', calculateYear)

// function calculateYear(event) {
//     event.preventDefault();
//     let h1 = document.querySelector('h1');
//     const year = document.querySelector('input[type=number]').value;
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         h1.innerText = "Keliamieji metai"
//     } else {
//         h1.innerText = "Nekeliamieji metai"
//     }
// }

// ====== EX. 3 ======

// let form = document.querySelector('form')
// form.addEventListener('submit', calculateTemperature)

// function calculateTemperature(event) {
//     event.preventDefault();
//     const celsius = document.querySelector('input[type=number]').value;
//     let h1 = document.querySelector('h1');
//     h1.innerText = `${(celsius * 9/5) + 32}`
// }

// ====== EX. 4 ======

// let form = document.querySelector('form')
// form.addEventListener('submit', confirmSignUp)

// function confirmSignUp(event) {
//         event.preventDefault();
//         let checkbox = document.querySelector('input[type=checkbox]').checked;
//         let email = document.querySelector('input[type=email]').value;
//         if (checkbox === false) {
//             alert('Registracija nesėkminga')
//         } else {
//             alert(`El.paštas ${email} sėkmingai užregistruotas`)
//         }
// }

// ====== EX. 5 ======

// let form = document.querySelector('form')
// form.addEventListener('submit', repeatName)

// function repeatName(event) {
//   event.preventDefault();
//   const name = document.querySelector("input[type=text]").value;
//   const number = Number(document.querySelector('input[type=number]').value);
//   let ul = document.querySelector('ul');
//   ul.innerHTML = '';

//   for (let i = 0; i < number; i++) {
//     const li = document.createElement('li');
//     li.innerText = name;
//     ul.append(li);
//   }
// }

// ====== EX. 6 ======

document.querySelector("form").addEventListener("submit", createTriangle);

function createTriangle(event) {
  event.preventDefault();
  let combo = "";
  let triangle = Number(document.querySelector("input[type=number]").value);
  let times = 0;
  do {
    combo += "*";
    let h1 = document.querySelector("h1");
    let br = document.createElement('br')
    h1.append(combo);
    h1.appendChild(br)
    times++;
  } while (times < triangle);
}
