"use strict";

const TEMPLATE_SOURCE = "#tap-template";
const TEMPLATE_DESTINATION = ".wrapper-taps";
let extended = false;

export function init(data) {
    if (document.querySelector(".wrapper-taps").classList.contains("extended")) {
        extended = true;
    } else
        extended = false;
    clearPreviousTaps(TEMPLATE_DESTINATION);
    tapsInfo(data);
}

function tapsInfo(data) { //takes the beer names from JSON data and add them to each tap

    let tapsArray = data;
    const template = document.querySelector(TEMPLATE_SOURCE).content;

    if (extended) {
        template.querySelector(".extanded-tap").classList.remove("collapsed");
    } else
        template.querySelector(".extanded-tap").classList.add("collapsed");

    for (let i = 0; i < tapsArray.length; i++) {
        const clone = template.cloneNode(true);
        clone.querySelector(".beer-name").textContent = tapsArray[i].beer;
        // level bar of the tap remaining beer quantity
        // sets the height of the fill div in relation to the level of the beer in the tap
        clone.querySelector(".tap-levelbar-fill").style.height = (tapsArray[i].level / 2500) * 100 + "%";
        clone.querySelector(".extanded-tap span").textContent = tapsArray[i].level;

        // Showing which tap is in use/idle
        if (tapsArray[i].inUse) {
            clone.querySelector(".inUse").classList.remove("hidden");
        } else {
            clone.querySelector(".idle").classList.remove("hidden");
        }
        document.querySelector(TEMPLATE_DESTINATION).appendChild(clone);

    }
}


function clearPreviousTaps(el) {
    document.querySelector(el).innerHTML = "";
}
