let persons = [
  {
    name: "rokas",
    categories: ["a", "b", "c"],
    owned_cars: [
      {
        brand: "Ford",
        model: "focus",
        car_options: {
          color: "red",
          transmission: "auto",
        },
      },
      {
        brand: "Opel",
        model: "zafira",
        car_options: {
          color: "yellow",
          transmission: "manual",
        },
      },
    ],
  },
  {
    name: "vytenis",
    categories: ["b"],
    owned_cars: [
      {
        brand: "Ford",
        model: "mondeo",
        car_options: {
          color: "blue",
          transmission: "auto",
        },
      },
      {
        brand: "Volkswagen",
        model: "passat",
        car_options: {
          color: "brown",
          transmission: "auto",
        },
      },
    ],
  },
  {
    name: "petras",
    categories: ["b", "c", "ce"],
    owned_cars: [
      {
        brand: "Honda",
        model: "civic",
        car_options: {
          color: "red",
          transmission: "auto",
        },
      },
      {
        brand: "Honda",
        model: "civic",
        car_options: {
          color: "black",
          transmission: "manual",
        },
      },
    ],
  },
  {
    name: "ieva",
    categories: ["b"],
    owned_cars: [
      {
        brand: "peugeot",
        model: "206",
        car_options: {
          color: "#660408",
          transmission: "manual",
        },
      },
      {
        brand: "Opel",
        model: "zafira",
        car_options: {
          color: "yellow",
          transmission: "manual",
        },
      },
      {
        brand: "peugeot",
        model: "206",
        car_options: {
          color: "#660408",
          transmission: "manual",
        },
      },
      {
        brand: "Ford",
        model: "scorpio",
        car_options: {
          color: "pink",
          transmission: "manual",
        },
      },
    ],
  },
];

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

persons.sort( compare );

document.body.style = "padding: 10px 20px 0px 60px; font-family: sans-serif";

function showPersons() {
  for (let i = 0; i < persons.length; i++) {
    //=========================MAIN CARD=========================//

    //susikuriu loop'ą, kol i bus mažesnis už persons array ilgį, tol jis loopinsis ir pasididins i
    divMain = document.createElement("div"); //susikuriu div'ą
    divMain.style = "border: solid 1px black; padding: 10px"; //duodu div'ui border'į ir padding'ą

    //=========================MAIN CARD=========================//

    //=========================CARD TITLE=========================//

    h1Name = document.createElement("h1"); //susikuriu h1 elementą
    h1Name.innerText = `${persons[i].name}`; //h1 tekstas yra array "name" objektas, 'i' žymi kelintas jis bus
    h1Name.style = "text-transform: capitalize; margin: 10px 0;"; //duodu teksto transformaciją bei margin'ą
    divMain.append(h1Name); //prikabinu h1 prie main div'o

    //=========================CARD TITLE=========================//

    //=========================CAR CATEGORIES=========================//

    h2Categories = document.createElement("h2"); //sukuriu h2 elementą
    h2Categories.innerText = "Categories"; //h2 tekstas
    divMain.append(h2Categories); //prikabinu h2 prie main div'o

    divCategoriesContainer = document.createElement("div"); //susikuriu kategorijoms, kurias tuoj kursiu, konteinerį
    divCategoriesContainer.style = "display: flex; margin: 0 0 10px 30px"; //duodu flex'o display ir didesnį kairįjį margin'ą

    for (let j = 0; j < persons[i].categories.length; j++) {
      //susikuriu loop'ą, kol j bus mažesnis už persons objekto catergories ilgį, tol jis loopinsis ir pasididins j
      divCategories = document.createElement("div"); //susikuriu div elementą kiekvienai kategorijai
      divCategories.innerText = `${persons[i].categories[j]}`; //kiekvienas kategorijos div'as turi tekstą su reikalinga kategorija
      divCategories.style =
        "border: solid 1px black; padding: 10px; border-radius: 9px; font-size: 17px;";
      //suteikiu kategorijai sborder'į kurį suapvalinu, padding'ą ir sumažinu šiek tiek font'ą
      divCategoriesContainer.append(divCategories); //prijungiu kategorijos div'ą į kategorijų kontainerį. To reikia, kad atsivaizduotų flex'as
    }
    divMain.append(divCategoriesContainer); //kabinu kategorijų konteinerį prie pagrindinio div'o

    //=========================CAR CATEGORIES=========================//

    //=========================OWNED CARS=========================//

    let ownedCarsContainer = document.createElement("div"); //susikuriu div'ą turimų mašinų konteineriui
    ownedCarsContainer.style =
      "border: 1px solid black; display: flex; align-items: center; padding: 10px"; //duodu border'į, display flex'ą sudedu itemus į vidurį y ašies, duodu padding'ą

    h2CarsHeader = document.createElement("h2"); //susikuriu h2 elementą
    h2CarsHeader.innerText = "Cars owned:"; //įrašau į h2 elementą textą
    h2CarsHeader.style = "padding-right: 10px"
    ownedCarsContainer.append(h2CarsHeader); //prikabinu header'į į konteinerį

    for (let j = 0; j < persons[i].owned_cars.length; j++) {
      //susikuriu loopą, kol j mažesnis už turimų mašinų kiekį (owned_cars), jis loopinsis ir padidins j per vieną
      let ownedCar = document.createElement("div"); //susikuriu divą
      ownedCar.style = `border: 1px solid black; padding: 7px; background-color: ${persons[i].owned_cars[j].car_options.color}; margin:2.5px;`; //duodu div'ui paddingą ir borderį

      h2CarBrand = document.createElement("h2"); //sukuriu h2 elementą
      h2CarBrand.innerText = persons[i].owned_cars[j].brand;
      //į h2 elemento tekstą dedamas žmogaus turimos mašinos brand'as, kuris keičiasi didėjant j indeksui
      h2CarBrand.style = "text-transform: capitalize; margin: 0"; //transformuoju tekstą, nuimu marginą
      ownedCar.append(h2CarBrand); //kabinu h2 elementą

      h2CarModel = document.createElement("h2"); //sukuriu h2 elementą
      h2CarModel.innerText = persons[i].owned_cars[j].model;
      //į h2 elemento tekstą dedamas žmogaus turimos mašinos modelis, kuris keičiasi didėjant j indeksu
      h2CarModel.style = "text-transform: capitalize; margin: 0"; //transformuoju tekstą, nuimu marginą
      ownedCar.append(h2CarModel); //kabinu h2 elementą

      let transmission = document.createElement("p"); //sukuriu p elementą
      transmission.innerText = `Transmission: ${persons[i].owned_cars[j].car_options.transmission}`;
      //p tekstas yra stringas su žmogaus turimos mašinos transmission opcija
      ownedCar.append(transmission); //prikabinu p elementą

      ownedCarsContainer.append(ownedCar); //kabinu turimos mašinos kortelę prie konteinerio
    }

    divMain.append(ownedCarsContainer); //kabinu mašinų konteinerį
    //=========================OWNED CARS=========================//

    document.body.append(divMain); //kabinu į dokumentą pagrindinį div'ą
  }
}

showPersons();
// Sukurti korteles (boostrap arba jau kaip sugalvojat),
// Taip atvaizduoti masinu kategorijas (didziosiomis raidemis) kurias gali varuoti, atskirose kortelese (brand, model, car_options).
// Masinos Korteles spalva turi buti kaip burodyta masinos car_options :)

// NAUDOTI GALIMA TIK JAVASCRIPT
