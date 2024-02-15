"use strict"

const navMenu = document.getElementById("mainMenu");            // Gör menyn till ett objektför att kunna dölja och visa den
const hajImg = document.getElementById("Haj");                  // Gör Haj-bilden till ett objektför att kunna dölja och visa den
const nameForm = document.getElementById("nameForm");           // Gör Namn-formuläret till ett objektför att kunna använda informationen
const nameInput = document.getElementById("nameInput");         // Gör inmatat namn till ett objekt
const greeting = document.getElementById("greeting");           // Gör hälsningsfrasen till ett objekt
const visitors = document.getElementById("visitors");           // Gör listan över besökare till ett objekt

const nameArray = [];                                           // En lista för namn

nameForm.addEventListener("submit", submitFunction );           // Aktiverar submit-funktionen när formulätet skickas.

function submitFunction(event) {                                // Submit-funktionen som hanterarinformationen                      
    event.preventDefault();
    if(nameInput.value.length > 0 ) {

        const listElemment = document.createElement("li");      // Ett listelement vi kan skapa
        listElemment.innerText = nameInput.value;               // Fer listelementet ett värde

        visitors.appendChild(listElemment)

        nameArray.push(nameInput.value);
        console.log(nameArray);

        greeting.innerText = nameArray.length == 1 
        ? "Hej " + nameInput.value
        : "Hej " + nameInput.value + ". Gästen innan dig var " + nameArray.at(-2);
    }
}
    
function colorWhite() {                                         //Ändrar bakgrunsfärg till vit
    document.body.style.backgroundColor = "white"
}

function colorRed() {                                           //Ändrar bakgrunsfärg till röd beroende på färg
    if(document.body.style.backgroundColor == "yellow")
        document.body.style.backgroundColor = "orange";
    else
        if(document.body.style.backgroundColor == "blue")
            document.body.style.backgroundColor = "purple";
    else
        document.body.style.backgroundColor = "red";
}

function colorYellow() {                                        //Ändrar bakgrunsfärg till gul beroende på färg
    if(document.body.style.backgroundColor == "red")
    document.body.style.backgroundColor = "orange";
else
    if(document.body.style.backgroundColor == "blue")
        document.body.style.backgroundColor = "green";
else
    document.body.style.backgroundColor = "yellow";
}

function colorBlue() {                                          //Ändrar bakgrunsfärg till blå beroende på färg
    if(document.body.style.backgroundColor == "red")
    document.body.style.backgroundColor = "purple";
else
    if(document.body.style.backgroundColor == "yellow")
        document.body.style.backgroundColor = "green";
else
    document.body.style.backgroundColor = "blue";
}

function menuToggle() {                                         //Visar eller döljer meny
    navMenu.classList.toggle("hide");
}

function hajToggle() {                                          //Visar eller döljer Haj-bilden
    hajImg.classList.toggle("hide");
}