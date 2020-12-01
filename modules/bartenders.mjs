"use strict";

export function init(data, data2){
    console.log(data, data2);
    updateBartenders(data, data2);
}

function updateBartenders(data, data2){
    let bartendersArray = data;
    let servingArray = data2;

    for(let bartender of bartendersArray){
        let bartenderNr = bartendersArray.indexOf(bartender)
        let selectedBartender = document.querySelector(`#bartender_${bartendersArray.indexOf(bartender)}`);

        if(bartender.status=="WORKING"){
            selectedBartender.querySelector(".status").classList.remove("free");
        } else {
            selectedBartender.querySelector(".status").classList.add("free");
        }

        if(servingArray[bartenderNr]){
            selectedBartender.querySelector(".activity .serving span").textContent = servingArray[bartenderNr].id;
            selectedBartender.querySelector(".activity .serving").classList.remove("hidden");
        } else {
            selectedBartender.querySelector(".activity .serving").classList.add("hidden");
        }

        if(bartender.statusDetail == "receivePayment") {
            selectedBartender.querySelector(".activity .payment").classList.remove("hidden");
        } else {
            selectedBartender.querySelector(".activity .payment").classList.add("hidden");
        }

        if(bartender.statusDetail == "pourBeer") {
            selectedBartender.querySelector(".activity .tap-paiement").classList.remove("hidden");
            selectedBartender.querySelector(".activity .tap-paiement span").textContent = bartender.usingTap;
        } else {
            selectedBartender.querySelector(".activity .tap-paiement").classList.add("hidden");
        }
    }
}