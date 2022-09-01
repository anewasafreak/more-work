// ============ FOURTH LESSON ============

// console.log('hello world!')

// let customClassElements = document.getElementsByClassName('custom-class');

// console.log(customClassElements[3])

// for (let i=0; i < customClassElements.length; i++) {
//   console.log(customClassElements[i])
// }

// kai imi pagal klasę gauni ne elementą o elemntus!

// customClassElements[3].style.backgroundColor = 'green'

// let customIdElement = document.getElementById('custom-id');

// console.log(customIdElement);

// customIdElement.style.backgroundColor = '#E5BE9E'

//pagal ID ima tik viena elementa

let customClassElements = document.querySelectorAll(".custom-class");

console.log(customClassElements);

let customIdElement = document.querySelector("#custom-id");

console.log(customIdElement);
customIdElement.style.backgroundColor = "blue";
customIdElement.style.padding = "10px";
customIdElement.textContent = "new text";

customClassElements[3].innerHTML = '<h1>new text with h1</h1>'