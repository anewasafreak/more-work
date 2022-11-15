// ============ NINTH LESSON ============

// ========= MANIPULATING DOM STYLE =========

// ====== EX. 1 ======
document.querySelector('h1').addEventListener('click', changeNamePosition)

function changeNamePosition(n) {
    n.target.style = 'font-size: 4em; text-align:center; color:red; margin:44vh'
}

// ====== EX. 2-3 ======
let before = document.querySelector('button').style = "position:absolute; top: 0; left:0";
// let OGposition = true

// document.querySelector('button').addEventListener('click', changePosition)

// let corner = 0
// const cornerStyles = ['position:absolute; top:0; right:0;', 'position:absolute; bottom:0; right:0;', 'position:absolute; bottom:0; left:0;', 'position:absolute; top:0; left:0;']

// function changePosition(event) {
// // event.target.style = OGposition ? 'position:absolute; bottom:0; right:0' : "position:absolute; top: 0; left:0"
// // OGposition = !OGposition
// if (corner < cornerStyles.length) {
//     event.target.style = cornerStyles[corner]
//     corner++
// }
// if (corner === cornerStyles.length) {
//     corner = 0
// }

// }

// ====== EX. 4 ======
// function changeBackground(event) {
// document.body.style = event.target.value.length > 2 ? 'background-color:green' : 'background-color:red';
// }

// document.querySelector('input[type=text]').addEventListener('input', changeBackground)

// ====== EX. 5-6 ======
let backgroundColors = ["red", "green", "blue", "yellow"];

function changeBackground() {
    let randomNumber = Math.floor(Math.random() * (255 + 1));
  document.body.style.backgroundColor =
    // `${backgroundColors[Math.floor(Math.random() * (3 + 1))]}`;
    `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`
    
}

document.querySelector('button').addEventListener('click', changeBackground)