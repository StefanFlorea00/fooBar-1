
"use strict";

export function init(data) {
    updateHours(data);
}

function updateHours(data) {
    let today = new Date();

    let timeToClosingHours = parseInt(data.split(":")[0]) - parseInt(today.getHours());
    let timeToClosingMinutes = 60 - parseInt(data.split(":")[1]) - parseInt(today.getMinutes());
    let timeToClosingSeconds = 60 - parseInt(data.split(":")[2]) - parseInt(today.getSeconds());

    if (timeToClosingHours < 10) {
        timeToClosingHours = pad(timeToClosingHours);
    }
    if (timeToClosingMinutes < 10) {
        timeToClosingMinutes = pad(timeToClosingMinutes);
    }
    if (timeToClosingSeconds < 10) {
        timeToClosingSeconds = pad(timeToClosingSeconds);
    }

    if (timeToClosingMinutes == 60) {
        timeToClosingMinutes = 0;
        timeToClosingHours += 1;
    }

    // document.querySelector(".hour-display").textContent = timeToClosingHours + ":" + timeToClosingMinutes + ":" + timeToClosingSeconds;
    document.querySelector(".hour").textContent = timeToClosingHours;
    document.querySelector(".minutes").textContent = timeToClosingMinutes;
}

function pad(number) {
    if (number <= 9) { number = ("0" + number).slice(-4); }
    return number;
}