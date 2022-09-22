// ============ THIRTEENTH LESSON ============

// ========= CALLBACK FUNCTIONS =========

// ====== EX. 1 ======
function alertName(name) {
  alert(name);
}

function consoleName(name) {
  console.log(name);
}

function coreFunction(name, callback) {
    let capitalizedName = name[0].toUpperCase() + name.substring(1).toLowerCase()
    callback(capitalizedName)
}

coreFunction('kAI', consoleName)

// ========= ARRAY METHODS =========

// ====== EX. 1-2 ======
const cars = ["BMW", "VW", "Audi"]

cars.forEach((element, index) => console.log(index + ": " + element))

// ====== EX. 3 ======
let friendNames = ["EtHAn", "iNdigO", "sUnNy", "PAULiNa", "TEreSA", "JogAile", "gabIJa"]

let map1 = friendNames.map((n) => n[0].toUpperCase() + n.substring(1).toLowerCase())

consoleName(map1)

// ====== EX. 4 ======
let randomAges = [12, 13, 64, 18, 69, 42, 24]
console.log(randomAges)

let filteredRandomAges = randomAges.filter(value => value >= 18);

console.log(filteredRandomAges)

// ====== EX. 5-7 ======
let lithuanianCities = ["Vilnius", "Kaunas", "Klaipėda", "Panevėžys", "Šiauliai"]

console.log(lithuanianCities.find(v => v[0] === "K"))

console.log(lithuanianCities.some(v => v[0] === v[0].toLowerCase()))

console.log(lithuanianCities.every(v => v[0] === v[0].toUpperCase()))