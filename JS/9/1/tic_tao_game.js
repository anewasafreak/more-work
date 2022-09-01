const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let cells = document.getElementsByClassName('cell');
let player_O = false;

function changeCell() {
  if(player_O = false) {

  }
}

function balls(data) {
  console.log(data.target.value)
}


function addSymbol (data) {
  for (let i = 0; i < data.length; i++) {
    data[i].addEventListener('click', balls)
  }
}

addSymbol(cells)

//Pradinis palanas:
//1. Padaryti, kad paspaudus ant laukelio įdėtu X arba O
//2. Kai įdedamas X ar O tikrinti ar yra laimėtojas. WINNING_COMBINATIONS yra sąrašas kombinacijų, kurios jei atitinka laimėjo (pagalvokit kaip jis gali veikti :) taip, aš irgi užtrukau kol supratau)
//3 Kai kažkas, tai pranešti laimėtoją

//Dar padaryti, kai bus pdaryta viskas:
//lygiosios
//pradėti iš naujo
//sekti rezultatus, kas kiek kartų laimėjo (jei dar nebūsum praėję, papasakoti apie local storage, session storage)