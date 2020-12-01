let extended = false;

const templateSource = "#storage-template";
const templateDestination = "";

export function init(data){
    console.log(data);

    if(document.querySelector(".wrapper-storage").classList.contains("extended")){
        extended = true;
    } else 
    extended = false;

    clearPreviousBeers(".wrapper-storage");
    addBeers(data);
}

function addBeers(data){
    let storageArray = data;
    for(let beer of storageArray){
        addBeerTemplate("#storage-template", ".wrapper-storage", beer.name, beer.amount, extended);
    }
}

function addBeerTemplate(srcTemplate, destination, beerName, beerNr, extended){
    const template = document.querySelector(srcTemplate).content.cloneNode(true);

    template.querySelector(".keg-amount").textContent = beerNr;
    template.querySelector(".keg-name").textContent = beerName;

    if(extended){
        template.querySelector(".keg-amount").classList.toggle("hidden");
        template.querySelector(".kegs").classList.toggle("hidden");
    }

    for(let i=0;i<beerNr;i++){
        let newBeer = document.createElement("img");
        newBeer.src = template.querySelector(".kegs img").src;
        // newBeer.classList.add("beer-img");
        template.querySelector(".kegs").appendChild(newBeer);
    }

    document.querySelector(destination).appendChild(template);
}

function clearPreviousBeers(el){
    document.querySelector(el).innerHTML = "";
}
