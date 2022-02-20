"use strict";

let departureDate = {
    element: null,
    day: null
}


let colonyDays = document.getElementsByClassName("days")[0];

for(let i = 1; i <= 33; i++) {
    let item = colonyDays.getElementsByTagName("li")[i];
    item.addEventListener("click", function(event) {
        event.preventDefault();
        if(departureDate.day !== null) {
            departureDate.element.style.background = "white";
            departureDate.element.style.color = "gray";
        }
        item.style.background = "#d37648";
        item.style.color = "white";
        departureDate.element = item;
        departureDate.day = item.innerText;
        let embarkDate = document.getElementsByClassName("embark-date")[0];
        embarkDate.innerText = `March ${departureDate.day} @ 4pm GMT`;
        embarkDate.style.color = "yellow";
        showColonyButtons();
        toggleFlightScheduler(false);
    });
}

let flightDays = document.getElementsByClassName("days")[1];

for(let i = 1; i <= 33; i++) {
    let item = flightDays.getElementsByTagName("li")[i];
    item.addEventListener("click", function(event) {
        event.preventDefault();
        if(departureDate.day !== null) {
            departureDate.element.style.background = "white";
            departureDate.element.style.color = "gray";
        }
        item.style.background = "#d37648";
        item.style.color = "white";
        departureDate.element = item;
        departureDate.day = item.innerText;
        let embarkDate = document.getElementsByClassName("embark-date")[1];
        embarkDate.innerText = `March ${departureDate.day} @ 4pm GMT`;
        embarkDate.style.color = "yellow";
        showFlightButtons();
        toggleColonyScheduler(false);
    });
}

document.getElementById("confirmColonist").addEventListener("click", function(event) {
    event.preventDefault();
    confirmColonist();
});

document.getElementById("confirmFlight").addEventListener("click", function(event) {
    event.preventDefault();
    confirmFlight();
});

document.getElementById("backToColony").addEventListener("click", function(event) {
    event.preventDefault();
    toggleColonyScheduler(true);
    toggleFlightScheduler(false);
    updateColonyCalendar();

});

document.getElementById("backToFlight").addEventListener("click", function(event) {
    event.preventDefault();
    toggleFlightScheduler(true);
    toggleColonyScheduler(false);
    updateFlightCalendar();
});


function confirmColonist() {
    document.getElementById("colonySelect").style.display = "none";
    let confirmMessage = document.getElementById("colonyDeparture");
    confirmMessage.style.color = "yellow";
    confirmMessage.innerText = `You are booked to depart on\nMarch ${departureDate.day} @ 4pm GMT`;
}

function confirmFlight() {
    document.getElementById("flightSelect").style.display = "none";
    let confirmMessage = document.getElementById("flightDeparture");
    confirmMessage.style.color = "yellow";
    confirmMessage.innerText = `You are booked to depart on\nMarch ${departureDate.day} @ 4pm GMT`;
}

function showColonyButtons() {
    let container = document.getElementsByClassName("button-container")[0];
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.justifyContent = "center";
}

function showFlightButtons() {
    let container = document.getElementsByClassName("button-container")[1];
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.justifyContent = "center";
}

function toggleFlightScheduler(show) {
    if(show)
        document.getElementsByClassName("embark-col")[1].style.display = "block";
    else
    document.getElementsByClassName("embark-col")[1].style.display = "none";
}

function toggleColonyScheduler(show) {
    if(show)
        document.getElementsByClassName("embark-col")[0].style.display = "block";
    else
    document.getElementsByClassName("embark-col")[0].style.display = "none";
}

function updateColonyCalendar(){
    showColonyButtons();
    departureDate.element.style.background = "white";
    departureDate.element.style.color = "gray";
    let calendarDays = colonyDays.getElementsByTagName("li");
    for(let i = 0; i < calendarDays.length; i++) {
        if(calendarDays[i].innerText === departureDate.day){
            calendarDays[i].style.background = "#d37648";
            calendarDays[i].style.color = "white";
            departureDate.element = calendarDays[i];
            departureDate.day = calendarDays[i].innerText;
            break;
        }
    }
    let departureText = document.getElementsByClassName("embark-date")[0];
    departureText.style.color = "yellow";
    departureText.innerText = `March ${departureDate.day} @ 4pm GMT`;
}

function updateFlightCalendar(){
    showFlightButtons();
    departureDate.element.style.background = "white";
    departureDate.element.style.color = "gray";
    let calendarDays = flightDays.getElementsByTagName("li");
    for(let i = 0; i < calendarDays.length; i++) {
        if(calendarDays[i].innerText === departureDate.day){
            calendarDays[i].style.background = "#d37648";
            calendarDays[i].style.color = "white";
            departureDate.element = calendarDays[i];
            departureDate.day = calendarDays[i].innerText;
            break;
        }
    }
    let departureText = document.getElementsByClassName("embark-date")[1];
    departureText.style.color = "yellow";
    departureText.innerText = `March ${departureDate.day} @ 4pm GMT`;
}

