"use strict";

let departureDate = {
    element: null,
    day: null
}

let userTime;
const key = "2e967210f29542c7bd0aeadf2b76358e";
const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${key}&fields=timezone`;

fetch(url)
.then(function(response){
    return response.json();
}).then(function(json){
    userTime = json.timezone;
    initEmbarkDate();
})

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
        embarkDate.innerText = `March ${departureDate.day} @ ${convertTime(userTime.gmt_offset)} ${userTime.abbreviation}`;
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
        embarkDate.innerText = `March ${departureDate.day} @ ${convertTime(userTime.gmt_offset)} ${userTime.abbreviation}`;
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

function initEmbarkDate() {
    let dates = document.getElementsByClassName("embark-date");
    const text = `All flights take-off at ${convertTime(userTime.gmt_offset)} ${userTime.abbreviation}`; 
    dates[0].innerText = text;
    dates[1].innerText = text;
}
function convertTime(gmt_offset){
    
    let offset = Number(gmt_offset);
    let currentHour = 4;
    let am = false;

    if(offset === 0)
        return "4 pm";
    else if(offset < 0) {
        for(let i = 0; i < -1 * offset; i++) {
            currentHour--;
            if(currentHour == 0) {
                currentHour = 12;
            }
            if(currentHour == 11) {
                am = !am;
            }
        }
    }
    else if(offset > 0) {
        for(let i = 0; i < offset; i++) {
            currentHour++;
            if(currentHour == 12) {
                am = !am;
            }
            else if(currentHour == 13) {
                currentHour = 1;
            }
        }
    }

    let suffix = "";
    if (am)
        suffix = "am";
    else
        suffix = "pm";

    return `${currentHour} ${suffix}`;
}

function confirmColonist() {
    document.getElementById("colonySelect").style.display = "none";
    let confirmMessage = document.getElementById("colonyDeparture");
    confirmMessage.style.color = "yellow";
    confirmMessage.innerText = `You are booked to depart on\nMarch ${departureDate.day} @ ${convertTime(userTime.gmt_offset)} ${userTime.abbreviation}`;
}

function confirmFlight() {
    document.getElementById("flightSelect").style.display = "none";
    let confirmMessage = document.getElementById("flightDeparture");
    confirmMessage.style.color = "yellow";
    confirmMessage.innerText = `You are booked to depart on\nMarch ${departureDate.day} @ ${convertTime(userTime.gmt_offset)} ${userTime.abbreviation}`;
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
    departureText.innerText = `March ${departureDate.day} @ ${convertTime(userTime.gmt_offset)} ${userTime.abbreviation}`;
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
    departureText.innerText = `March ${departureDate.day} @ ${convertTime(userTime.gmt_offset)} ${userTime.abbreviation}`;
}

