"use strict";
import * as db from "../modules/db.mjs";

db.get();
setTimeout(() => {
    init();
}, 100);

function init(tap) {
    tapsAddBeerNames();

}



function tapsAddBeerNames(tap) {

    let tapsArray = db.getTaps();
    console.log(tapsArray)
    const template = document.querySelector("#tap-template").content;

    for (let i = 0; i < tapsArray.length; i++) {
        const clone = template.cloneNode(true);
        clone.querySelector(".beer-name").textContent = tapsArray[i].beer;

        document.querySelector(".wrapper-taps").appendChild(clone);
    }
    // let tap1Beer = tapsArray[0].beer;
    // console.log(tap1Beer)



}

