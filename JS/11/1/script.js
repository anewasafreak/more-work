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

    //susikuriu loop'??, kol i bus ma??esnis u?? persons array ilg??, tol jis loopinsis ir pasididins i
    divMain = document.createElement("div"); //susikuriu div'??
    divMain.style = "border: solid 1px black; padding: 10px"; //duodu div'ui border'?? ir padding'??

    //=========================MAIN CARD=========================//

    //=========================CARD TITLE=========================//

    h1Name = document.createElement("h1"); //susikuriu h1 element??
    h1Name.innerText = `${persons[i].name}`; //h1 tekstas yra array "name" objektas, 'i' ??ymi kelintas jis bus
    h1Name.style = "text-transform: capitalize; margin: 10px 0;"; //duodu teksto transformacij?? bei margin'??
    divMain.append(h1Name); //prikabinu h1 prie main div'o

    //=========================CARD TITLE=========================//

    //=========================CAR CATEGORIES=========================//

    h2Categories = document.createElement("h2"); //sukuriu h2 element??
    h2Categories.innerText = "Categories"; //h2 tekstas
    divMain.append(h2Categories); //prikabinu h2 prie main div'o

    divCategoriesContainer = document.createElement("div"); //susikuriu kategorijoms, kurias tuoj kursiu, konteiner??
    divCategoriesContainer.style = "display: flex; margin: 0 0 10px 30px"; //duodu flex'o display ir didesn?? kair??j?? margin'??

    for (let j = 0; j < persons[i].categories.length; j++) {
      //susikuriu loop'??, kol j bus ma??esnis u?? persons objekto catergories ilg??, tol jis loopinsis ir pasididins j
      divCategories = document.createElement("div"); //susikuriu div element?? kiekvienai kategorijai
      divCategories.innerText = `${persons[i].categories[j]}`; //kiekvienas kategorijos div'as turi tekst?? su reikalinga kategorija
      divCategories.style =
        "border: solid 1px black; padding: 10px; border-radius: 9px; font-size: 17px;";
      //suteikiu kategorijai sborder'?? kur?? suapvalinu, padding'?? ir suma??inu ??iek tiek font'??
      divCategoriesContainer.append(divCategories); //prijungiu kategorijos div'?? ?? kategorij?? kontainer??. To reikia, kad atsivaizduot?? flex'as
    }
    divMain.append(divCategoriesContainer); //kabinu kategorij?? konteiner?? prie pagrindinio div'o

    //=========================CAR CATEGORIES=========================//

    //=========================OWNED CARS=========================//

    let ownedCarsContainer = document.createElement("div"); //susikuriu div'?? turim?? ma??in?? konteineriui
    ownedCarsContainer.style =
      "border: 1px solid black; display: flex; align-items: center; padding: 10px"; //duodu border'??, display flex'?? sudedu itemus ?? vidur?? y a??ies, duodu padding'??

    h2CarsHeader = document.createElement("h2"); //susikuriu h2 element??
    h2CarsHeader.innerText = "Cars owned:"; //??ra??au ?? h2 element?? text??
    h2CarsHeader.style = "padding-right: 10px"
    ownedCarsContainer.append(h2CarsHeader); //prikabinu header'?? ?? konteiner??

    for (let j = 0; j < persons[i].owned_cars.length; j++) {
      //susikuriu loop??, kol j ma??esnis u?? turim?? ma??in?? kiek?? (owned_cars), jis loopinsis ir padidins j per vien??
      let ownedCar = document.createElement("div"); //susikuriu div??
      ownedCar.style = `border: 1px solid black; padding: 7px; background-color: ${persons[i].owned_cars[j].car_options.color}; margin:2.5px;`; //duodu div'ui padding?? ir border??

      h2CarBrand = document.createElement("h2"); //sukuriu h2 element??
      h2CarBrand.innerText = persons[i].owned_cars[j].brand;
      //?? h2 elemento tekst?? dedamas ??mogaus turimos ma??inos brand'as, kuris kei??iasi did??jant j indeksui
      h2CarBrand.style = "text-transform: capitalize; margin: 0"; //transformuoju tekst??, nuimu margin??
      ownedCar.append(h2CarBrand); //kabinu h2 element??

      h2CarModel = document.createElement("h2"); //sukuriu h2 element??
      h2CarModel.innerText = persons[i].owned_cars[j].model;
      //?? h2 elemento tekst?? dedamas ??mogaus turimos ma??inos modelis, kuris kei??iasi did??jant j indeksu
      h2CarModel.style = "text-transform: capitalize; margin: 0"; //transformuoju tekst??, nuimu margin??
      ownedCar.append(h2CarModel); //kabinu h2 element??

      let transmission = document.createElement("p"); //sukuriu p element??
      transmission.innerText = `Transmission: ${persons[i].owned_cars[j].car_options.transmission}`;
      //p tekstas yra stringas su ??mogaus turimos ma??inos transmission opcija
      ownedCar.append(transmission); //prikabinu p element??

      ownedCarsContainer.append(ownedCar); //kabinu turimos ma??inos kortel?? prie konteinerio
    }

    divMain.append(ownedCarsContainer); //kabinu ma??in?? konteiner??
    //=========================OWNED CARS=========================//

    document.body.append(divMain); //kabinu ?? dokument?? pagrindin?? div'??
  }
}

showPersons();
// Sukurti korteles (boostrap arba jau kaip sugalvojat),
// Taip atvaizduoti masinu kategorijas (didziosiomis raidemis) kurias gali varuoti, atskirose kortelese (brand, model, car_options).
// Masinos Korteles spalva turi buti kaip burodyta masinos car_options :)

// NAUDOTI GALIMA TIK JAVASCRIPT
