/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show data"
pamatyti data iš api.publicapis.org (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show data":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Žinutė "Press "Show data" button to see data" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.publicapis.org/entries";

document.getElementById("btn").addEventListener("click", logEndpoint);

function logEndpoint() {
  fetch(ENDPOINT) //funkcija kuri yra delayinta
    .then((x) => x.json()) //man atrodo cia paima is linko visa array
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let mainDiv = document.getElementById("output");
        mainDiv.append(data.entries[i].Description);
        console.log(data.entries[i].Description);

        // console.log(data.entries[i].API); //cia entry ir count yra du atskiri dalykai, todel nunavigavau i entries, ir is kiekvieno entries paimu API (testavau ar veikia viskas)
      }
    });
}
