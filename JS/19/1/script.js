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

document.getElementById("btn").addEventListener("click", logEndPoint);

function logEndPoint() {
  fetch(ENDPOINT) //funkcija kuri yra delayinta
    .then((x) => x.json()) //man atrodo cia paima is linko visa array
    .then((data) => {
      document.getElementById("output").innerText = ""
      document.getElementById("btn").style.display = "none";
      for (let i = 0; i < data.entries.length; i++) {
        let mainDiv = document.getElementById("output");

        let userCard = document.createElement("div");
        userCard.className = "user-card";

        let apiH2 = document.createElement("h2");
        apiH2.className = "api-h2";
        apiH2.innerText = data.entries[i].API + " API";
        userCard.append(apiH2);

        let descDiv = document.createElement("div");
        descDiv.className = "desc-div";
        let descSpan = document.createElement("span");
        descSpan.innerText = "Description: ";
        descDiv.append(descSpan);
        descDiv.append(data.entries[i].Description);
        userCard.append(descDiv);

        let authDiv = document.createElement("div");
        authDiv.className = "auth-div";
        let authSpan = document.createElement("span");
        authSpan.innerText = "Auth: ";
        authDiv.append(authSpan);
        authDiv.append(data.entries[i].Auth);
        userCard.append(authDiv);

        let httpsDiv = document.createElement("div");
        httpsDiv.className = "https-div";
        let httpsSpan = document.createElement("span");
        httpsSpan.innerText = "HTTPS: ";
        httpsDiv.append(httpsSpan);
        httpsDiv.append(data.entries[i].HTTPS);
        userCard.append(httpsDiv);

        let corsDiv = document.createElement("div");
        corsDiv.className = "cors-div";
        let corsSpan = document.createElement("span");
        corsSpan.innerText = "Cors: ";
        corsDiv.append(corsSpan);
        corsDiv.append(data.entries[i].Cors);
        userCard.append(corsDiv);

        let linkDiv = document.createElement("div");
        linkDiv.className = "link-div";
        let a = document.createElement("a");
        a.href = data.entries[i].Link;
        a.innerText = "Link";
        linkDiv.append(a);
        userCard.append(linkDiv);

        let categoryDiv = document.createElement("div");
        categoryDiv.className = "category-div";
        let categorySpan = document.createElement("span");
        categorySpan.innerText = "Category: ";
        categoryDiv.append(categorySpan);
        categoryDiv.append(data.entries[i].Category);
        userCard.append(categoryDiv);

        mainDiv.append(userCard);

        //console.log(data.entries[i].API); //cia entry ir count yra du atskiri dalykai, todel nunavigavau i entries, ir is kiekvieno entries paimu API (testavau ar veikia viskas)
      }
    });
}
