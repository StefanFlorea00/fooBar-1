"use strict";
import * as db from "../modules/db.mjs";

db.get();
setTimeout(() => {
    init();
}, 200);

function init() {
    tapsAddBeerNames();
    tapsLevel();
}



function tapsAddBeerNames() { //takes the names from JSON data and add them to each tap

    let tapsArray = db.getTaps();
    // console.log(tapsArray)
    const template = document.querySelector("#tap-template").content;

    for (let i = 0; i < tapsArray.length; i++) {
        const clone = template.cloneNode(true);
        clone.querySelector(".beer-name").textContent = tapsArray[i].beer;
        document.querySelector(".wrapper-taps").appendChild(clone);
    }





}

function tapsLevel() { //takes the tap level from JSON data and fill the level bar
    let tapsLevel = db.getTaps();
    const template = document.querySelector("#tap-template").content;

    for (let i = 0; i < tapsLevel.length; i++) {
        const clone = template.cloneNode(true);
        document.querySelector(".tap-levelbar-fill").style.height = (tapsLevel[i].level / 2500) * 100 + "%"; //sets the height of the fill div in relation to the level
        console.log(tapsLevel[i].beer, tapsLevel[i].level)

    }
}