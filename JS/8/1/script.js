let array = [
  { brand: "opel", model: "ascona", color: "red" },
  { brand: "ford", model: "mondeo", color: "#005588" },
  { brand: "honda", model: "civic", color: "#000000" },
  { brand: "kia", model: "ceed", color: "rgb(255,255,0)" }
];

for (let i = 0; i < array.length; i++) {
  
let body = document.body 
body.className = 'd-flex'
  let card = document.createElement('div')
  card.className = 'card flex-fill mx-2 my-1'
  
  let cardBody = document.createElement('div')
  cardBody.className = 'card-body'
  
  let cardTitle = document.createElement('h5')
  cardTitle.className = 'card-title'
  
  let cardText = document.createElement('p')
  console.log(card)
  
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)
  card.appendChild(cardBody)


card.style = `background-color: ${array[i].color}`

cardTitle.innerText = `${array[i].brand}`

cardText.innerText = `${array[i].model}`

body.appendChild(card)
console.log(card)
}