"use strict";

function change(id) {                                                                   
  document.getElementById(id).innerHTML =                                               
    document.getElementById(id).innerText == "G" ? "R" : "G";                           // Växlar knappens text mellan R & G
  document.getElementById(id).style.backgroundColor =
    document.getElementById(id).style.backgroundColor == "green" ? "red" : "green";     // Växlar knappens färg mellan röd & grön
}

function buttonClick(event) {
  let id = +event.currentTarget.id;                                                     // Definierar tryckt knapp
  let idm5 = id - 5;                                                                    // Definierar knappen ovanför
  let idp5 = id + 5;                                                                    // Definierar knappen under
  let idm1 = id - 1;                                                                    // Definierar knappen till vänster
  let idp1 = id + 1;                                                                    // Definierar knappen till höger
                                    
  change(id);                                                                           // Ändrar tryckt knapp
  if (idm5 > 0) change(idm5);                                                           // Kontrolerar och ändrar knappen ovanför om den finns
  if (id < 21) change(idp5);                                                            // Kontrolerar och ändrar knappen under om den finns
  if (idm1 % 5 != 0 && idm1 > 0) change(idm1);                                          // Kontrolerar och ändrar knappen till vänster om den finns
  if (id % 5 != 0 && id < 25) change(idp1);                                             // Kontrolerar och ändrar knappen till höger om den finns
  checkSuccess();                                                            
}

function resetGame() {
  const greenButtons = Array.from(document.getElementsByClassName("greenButton"));      // Samlar ihop alla knappar som ska vara gröna
  const redButtons = Array.from(document.getElementsByClassName("redButton"));          // Samlar ihop alla knappar som ska vara röda
  greenButtons.forEach((green) => (green.style.backgroundColor = "green"));             // Ändrar alla gröna knappars färg till grön
  greenButtons.forEach((green) => (green.innerHTML = "G"));                             // Ändrar alla gröna knappars text till G
  redButtons.forEach((red) => (red.style.backgroundColor = "red"));                     // Ändrar alla röda knappars färg till röd                                    
  redButtons.forEach((red) => (red.innerHTML = "R"));                                   // Ändrar alla röda knappars text till R
  document.getElementById("win").innerText= "";                                         // Raderar vinstmeddelandet
}

async function checkSuccess() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const gameButtons = Array.from(document.getElementsByClassName("gameButton"));        // Samlar ihop alla knappar

  if (gameButtons.every((button) => button.style.backgroundColor === "green")) {        // Kontrolerar om alla knappar är gröna
    document.getElementById("win").innerText= "Grattis, du vann!";                      // Visar vinstmeddelandet
  }
}