const whiteButton = document.getElementById("whiteButton");
const redButton = document.getElementById("redButton");
const yellowButton = document.getElementById("yellowButton");
const blueButton = document.getElementById("blueButton");
const robinButton = document.getElementById("robinButton");

whiteButton.addEventListener("click", whiteClick);
redButton.addEventListener("click", redClick);
yellowButton.addEventListener("click", yellowClick);
blueButton.addEventListener("click", blueClick);
robinButton.addEventListener("click", robinClick);

function whiteClick() {
    document.body.style.backgroundColor= "white";
}

function redClick() {
    if(document.body.style.backgroundColor== "yellow")
    {
        document.body.style.backgroundColor= "orange";    
    }
    else if(document.body.style.backgroundColor== "blue")
    {
        document.body.style.backgroundColor= "purple";    
    }
    else
    {
        document.body.style.backgroundColor= "red";    
    }
}

function yellowClick() {
    if(document.body.style.backgroundColor== "red")
    {
        document.body.style.backgroundColor= "orange";    
    }
    else if(document.body.style.backgroundColor== "blue")
    {
        document.body.style.backgroundColor= "green";    
    }
    else
    {
        document.body.style.backgroundColor= "yellow";    
    }
}

function blueClick() {
    if(document.body.style.backgroundColor== "red")
    {
        document.body.style.backgroundColor= "purple";    
    }
    else if(document.body.style.backgroundColor== "yellow")
    {
        document.body.style.backgroundColor= "green";    
    }
    else
    {
        document.body.style.backgroundColor= "blue";    
    }
}


function robinClick() {
    const img = document.getElementById("Haj");

    img.style.display = img.style.display == "none" ? "" : "none";
    }
    

