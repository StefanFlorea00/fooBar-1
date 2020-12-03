"use strict";

let extended = false;

const TEMPLATE_SOURCE = "#storage-template";
const TEMPLATE_DESTINATION = ".wrapper-storage";

export function init(data) {

    if (document.querySelector(TEMPLATE_DESTINATION).classList.contains("extended")) {
        extended = true;
    } else
        extended = false;

    clearPreviousBeers(TEMPLATE_DESTINATION);
    addBeers(data);
}

function addBeers(data) {
    let storageArray = data;
    for (let beer of storageArray) {
        addBeerTemplate(TEMPLATE_SOURCE, TEMPLATE_DESTINATION, beer.name, beer.amount, extended);
    }
}

function addBeerTemplate(srcTemplate, destination, beerName, beerNr, extended) {
    const template = document.querySelector(srcTemplate).content.cloneNode(true);

    template.querySelector(".keg-amount").textContent = beerNr;
    template.querySelector(".keg-name").textContent = beerName;

    if (extended) {
        template.querySelector(".keg-amount").classList.toggle("hidden");
        template.querySelector(".kegs").classList.toggle("hidden");
    }

    for (let i = 0; i < beerNr; i++) {
        let newBeer = document.createElement("img");
        newBeer.src = template.querySelector(".kegs img").src;
        // newBeer.classList.add("beer-img");
        template.querySelector(".kegs").appendChild(newBeer);
    }

    document.querySelector(destination).appendChild(template);
}

function clearPreviousBeers(el) {
    document.querySelector(el).innerHTML = "";
}
