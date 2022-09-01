// ============ THIRD LESSON ============

// ========= SWITCH =========

// ====== EX. 1 ======
let car = 'Audi';
switch(car) {
  case 'VW':
  case 'Audi':
  case 'Bentley':
  case 'Bugatti':
  case 'Lamborghini':
  case 'Porsche':
    console.log("VW group");
    break;
  case 'BMW':
  case 'Mini':
  case 'Rolls-Royce':
    console.log('BMW group');
    break;
  default:
    console.log("Neither groups")
};

// ====== EX. 2 ======
let userInput = "obuolys";

switch (userInput) {
  case "obuolys":
  case "bananas":
  case "kriause":
  case "granatas":
  case "melionas":
    console.log(`${userInput} yra vaisius`);
    break;
  case "agurkas":
  case "pomidoras":
  case "bulve":
  case "brokolis":
  case "morka":
    console.log(`${userInput} yra darzove`);
    break;
  default:
    console.log(`neatpazintas maistas`);
}

// ====== EX. 3 ======
let weekDay = 0;

switch (weekDay) {
  case 0:
    weekDay = "Pirmadienis";
    break;
  case 1:
    weekDay = "Antradienis";
    break;
  case 2:
    weekDay = "Trečiadienis";
    break;
  case 3:
    weekDay = "Ketvirtadienis";
    break;
  case 4:
    weekDay = "Penktadienis";
    break;
  case 5:
    weekDay = "Šeštadienis";
    break;
  case 6:
    weekDay = "Sekmadienis";
    break;
}

console.log(weekDay);

// ========= TERNARY OPERATOR =========

// ====== EX. 1 ======
let nameInput = 'Ieva';

nameInput.length < 5 ? console.log('Short Name'):console.log('Long Name');

// ====== EX. 2-3 ======
const clientAge = 16;
const legalAge = 18;

clientAge < 0 || clientAge > 120 ? console.log('Invalid Age') : clientAge >= legalAge ? console.log("Can Drive") : console.log("Can't Drive");

// ====== EX. 4 ======
let phone = 'iPhone'
let isIphoneUser = phone === 'iPhone'

console.log(isIphoneUser)

// ========= LOOPS =========

// ====== EX. 1 ======
let name= 'Kajus'

for(let i=0; i < 10; i++) {
    console.log(`${i}. ${name}`)
}

// ====== EX. 2 ======
for(let i=10; i >= 1; i--) {
    console.log(i)
}