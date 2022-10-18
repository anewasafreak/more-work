let apiKey = "1a814b99916982ff18bdf466d14abdc6"; // jusu api key
let lang = "lt"; // kalba
let units = "metric"; // naudojama metrine sistema
let city = ""; // miestas irasytas inpute

let cityName = document.getElementById("city");
let searchButton = document.getElementById("search");

// uzdedu click eventa ant search mygtuko
searchButton.addEventListener("click", getDataFromApi);

// funkcija kuri gauna duomenis is API
function getDataFromApi() {
  // paimu irasyta miesta is input ir nustatau
  city = cityName.value;

  // url yra skirtas pasiimti duomenis is api
  let url =
    "https://api.openweathermap.org/data/2.5/forecast?" +
    "q=" +
    city +
    "&units=" +
    units +
    "&lang=" +
    lang +
    "&appid=" +
    apiKey;

  // su fetch funkcija pasiimu duomenis is api (asinchronine funkcija)
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      //paduodu gautus duomenis i funkcija
      showWeatherInDom(data);
    });

  console.log(url);
}

// funkcija kuri gauna duomenis ir juos atvaizduoja
function showWeatherInDom(weatherData) {
  // tikrinu ar mano response yra geras
  if (weatherData.cod === "200") {
    console.log(weatherData);
    // data tai duomenys, kuriuos mes padavem i funkcija
    // cia atvaizduojam gautus duomenis DOM'e

    // sekantys zingsniai:
    // 1. susikurti div
    // 2. susirinkti is objekto reikiamus duomenis pavyzdiui:
    // miesto pavadinima, laika, oro apibudinima (description)
    //  temperatura min, max

    // cia nustatom icon code is gautu duomenu, kad nustatyi iconCode pirma reikes gautame
    // objekte susirasti icon
    // let iconCode = '';
    // let iconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png'

    let main = document.querySelector("main");
    while (main.childNodes[0]) {
      main.removeChild(main.childNodes[0]);
    }

    let mainDiv = document.createElement("div");
    mainDiv.id = "weather-main";

    let cityH1 = document.createElement("h1");
    cityH1.innerText = weatherData.city.name;

    mainDiv.append(cityH1);

    let currentWeatherWrapper = document.createElement("div");
    currentWeatherWrapper.class = "hourly-weather";
    let timeh4 = document.createElement("h4");
    timeh4.innerText = "Now";
    let currentWeather = document.createElement("div");
    currentWeather.innerText =
      weatherData.list[0].weather[0].description.charAt(0).toUpperCase() +
      weatherData.list[0].weather[0].description.slice(1);
    let icon = document.createElement("img");
    let iconUrl =
      "http://openweathermap.org/img/wn/" +
      weatherData.list[0].weather[0].icon +
      "@2x.png";
    icon.src = iconUrl;
    currentWeather.append(icon);
    let temp = document.createElement("div");
    temp.innerText =
      "Temparatūra: " +
      Math.round(weatherData.list[0].main.temp_min) +
      "°C - " +
      Math.round(weatherData.list[0].main.temp_max) +
      "°C";

    currentWeatherWrapper.append(timeh4);
    currentWeatherWrapper.append(currentWeather);
    currentWeatherWrapper.append(temp);
    mainDiv.append(currentWeatherWrapper);

    for (let i = 1; i <= 4; i++) {
      let otherWeather = document.createElement("div");

      let time = weatherData.list[i].dt_txt.split(/:|\s/);
      time.shift();
      time.pop();

      let otherTimesh4 = document.createElement("h4");
      otherTimesh4.innerText = time.join(":");
      let weather = document.createElement("div");
      weather.innerText =
        weatherData.list[i].weather[0].description.charAt(0).toUpperCase() +
        weatherData.list[i].weather[0].description.slice(1);
      let otherIcon = document.createElement("img");
      let otherIconUrl =
        "http://openweathermap.org/img/wn/" +
        weatherData.list[i].weather[0].icon +
        "@2x.png";
      otherIcon.src = otherIconUrl;
      weather.append(otherIcon);
      let otherTemp = document.createElement("div");
      otherTemp.innerText =
        "Temparatūra: " +
        Math.round(weatherData.list[i].main.temp_min) +
        "°C - " +
        Math.round(weatherData.list[i].main.temp_max) +
        "°C";

      otherWeather.append(otherTimesh4);
      otherWeather.append(weather);
      otherWeather.append(otherTemp);

      mainDiv.append(otherWeather);
      console.log(otherWeather);
    }

    main.appendChild(mainDiv);
  } else {
    alert("kazkas negerai, patikrinti konsole");
    console.log("Kazkas negerai", weatherData);
  }
}
