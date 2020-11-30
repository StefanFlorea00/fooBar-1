
export function init(data){
    console.log(data);
    clearPreviousBeers(".wrapper-storage");
    storageAddBeers(data);
}

function storageAddBeers(data){
    let storageArray = data;
    for(let beer of storageArray){
        addBeerTemplate("#storage-template", ".wrapper-storage", beer.name, beer.amount)
    }
}

function addBeerTemplate(srcTemplate, destination, param1, beerNr){
    const template = document.querySelector(srcTemplate).content.cloneNode(true);

    template.querySelector("h2").textContent = param1;
    for(let i=0;i<beerNr;i++){
        let newBeer = document.createElement("img");
        newBeer.src = template.querySelector(".kegs img").src;
        // newBeer.classList.add("beer-img");
        template.querySelector(".kegs").appendChild(newBeer);
    }

    document.querySelector(destination).appendChild(template);
}

function clearPreviousBeers(el){
    console.log("aha");
    document.querySelector(el).innerHTML = "";
}
