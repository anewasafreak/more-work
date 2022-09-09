document.body.style = "background-color: #C3D0E3; font-family:sans-serif; padding:3% 15%";

let main = document.createElement("main");
main.style = "background-color:#E2ECEC; text-align:center; padding-bottom: 30px; border-radius:20px;";

let name = document.createElement('h1')
name.style = "color:#1B1F21; font-weight:500; margin: 0;"
name.innerText = 'Trent Walton'

let primaryInfo = document.createElement('p')
primaryInfo.style = "color: #6F7C87; margin: 0"
primaryInfo.innerText = "Founder & ⅓ @paravelinc"

let secondaryInfo = document.createElement('p')
secondaryInfo.style = "color: #6F7C87; margin: 0"
secondaryInfo.innerText = "Austin, TX"

let profilePicture = document.createElement('img')
profilePicture.src = "boneit.png";
profilePicture.style = "position: relative; bottom: 40px; border-radius:100%; border:10px solid #E2ECEC; box-shadow:#A9B3BB 0 3px 3px";

main.append(profilePicture)
main.append(name)
main.append(primaryInfo)
main.append(secondaryInfo)
document.body.append(main)