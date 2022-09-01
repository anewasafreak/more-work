// ============ SECOND LESSON ============

// ====== EX. 1 ======
// const number = 0;

// if (number % 2 == 0) {
//   console.log(`${number} yra lyginis skaičius`);
// } else {
//   console.log(`${number} yra nelyginis skaičius`);
// }

// ====== EX. 2 ======
// let answer = prompt('Please enter something.');
// if (isNaN(answer)) {
//     alert(`${answer} is not a number.`)
// } else {
//     alert(`${answer}`)
// }

// ====== EX. 3 ======
let textInput = prompt('Search');

for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === textInput) {
        console.log(`Radom žodį ${wordsArray[i]}`)
    }
 }
