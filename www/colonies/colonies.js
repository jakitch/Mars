"use strict";

let epsilonButton = document.getElementById("epsilonButton");
let piButton = document.getElementById("piButton");
let omicronButton = document.getElementById("omicronButton");

let epsilon = document.getElementsByClassName("article")[0];
let pi = document.getElementsByClassName("article")[1];
let omicron = document.getElementsByClassName("article")[2];

epsilon.style.display = "block";

let activeArticle = epsilonButton;
epsilonButton.style.color = "#d37648";
epsilonButton.style.textDecoration = "underline";

epsilonButton.addEventListener("click", function(event) {
    event.preventDefault();
    activeArticle.style.color = "white";
    activeArticle.style.textDecoration = "none";
    epsilonButton.style.color = "#d37648";
    epsilonButton.style.textDecoration = "underline";
    activeArticle = epsilonButton;
    toggleEpsilon(true);
    togglePi(false);
    toggleOmicron(false);
});

piButton.addEventListener("click", function(event) {
    event.preventDefault();
    activeArticle.style.color = "white";
    activeArticle.style.textDecoration = "none";
    piButton.style.color = "#d37648";
    piButton.style.textDecoration = "underline";
    activeArticle = piButton;
    event.preventDefault();
    togglePi(true);
    toggleEpsilon(false);
    toggleOmicron(false);
});

omicronButton.addEventListener("click", function(event) {
    event.preventDefault();
    activeArticle.style.color = "white";
    activeArticle.style.textDecoration = "none";
    omicronButton.style.color = "#d37648";
    omicronButton.style.textDecoration = "underline";
    activeArticle = omicronButton;
    event.preventDefault();
    toggleOmicron(true);
    toggleEpsilon(false);
    togglePi(false);
});

function toggleEpsilon(show){
    if(show)
        epsilon.style.display = "block";
    else
        epsilon.style.display = "none";
}

function togglePi(show){
    if(show)
        pi.style.display = "block";
    else
        pi.style.display = "none";
}

function toggleOmicron(show){
    if(show)
        omicron.style.display = "block";
    else
        omicron.style.display = "none";
}