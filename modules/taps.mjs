"use strict";
import * as db from "../modules/db.mjs";

export function init(data) {
    clearPreviousTaps(".wrapper-taps");
    tapsInfo(data);
}



function tapsInfo(data) { //takes the names from JSON data and add them to each tap

    let tapsArray = data;
    // console.log(tapsArray)
    const template = document.querySelector("#tap-template").content;

    for (let i = 0; i < tapsArray.length; i++) {
        const clone = template.cloneNode(true);
        clone.querySelector(".beer-name").textContent = tapsArray[i].beer;
        clone.querySelector(".tap-levelbar-fill").style.height = (tapsArray[i].level / 2500) * 100 + "%"; //sets the height of the fill div in relation to the level
        console.log(tapsArray[i].beer, tapsArray[i].level)
        document.querySelector(".wrapper-taps").appendChild(clone);
    }
}

function clearPreviousTaps(el){
    document.querySelector(el).innerHTML = "";
}