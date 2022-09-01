// ============ FIFTH LESSON ============

// ========= FUNCTIONS =========

// ====== EX. 2 ======
// function checkAge(age) {
//     age >= 18 ? console.log(true) : confirm('do your parents allow you?');
// }

// checkAge(16)

// ====== EX. 3 ======
// function min(a, b) {
//     if (a>b) {
//         return console.log(b);
//     } else {
//         return console.log(a)
//     }
// }

// min(4, 15)



// let tempArray = [1,2,3,444,545,545,4,545345,647567,567,567,456,3445,345,345,3453,45345,45,456,456,456,23423,45,6467,64,47634,5345,345,345,34534,57,64647,345,3453,45345,3534,5364,5754,5443,53453,452354,325,45,45745,6345,345,345,345]
//
// function toCelsius(name) {
//     console.log(name)
// }
// for (let i =0; i < tempArray.length; i++) {
//     let result = toCelsius(tempArray[i])
//     console.log(result)
// }


// toCelsius('Vytenis')
// toCelsius('Rokas')
let i = 0;

let myBtn = document.querySelector('input[type=button]')
function btnClick() {
    let myName = document.getElementById('name').value;
    const body = document.body;
    const br = document.createElement('br')
    body.append(br)
    i++;
    body.append(`${myName} x${i}`)
}

myBtn.addEventListener('click', btnClick)