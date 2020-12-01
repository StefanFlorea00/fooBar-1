let extended = false;

export function init(data){
    clearPreviousQueue("#serving-wrapper");
    addServingLength(data);
    addCustomer(data);
}

function addCustomer(data){
    let servingArray = data;
    for(let client of servingArray){
        addClientTemplate("#client-template", "#serving-wrapper", client.id, client.order);
    }
}

function addClientTemplate(srcTemplate, destination, clientId, clientOrderArray){
    const template = document.querySelector(srcTemplate).content.cloneNode(true);

    template.querySelector("h3").textContent = clientId;

    for(let i=0;i<clientOrderArray.length;i++){
        let newOrderLine = document.createElement("li");
        newOrderLine.textContent = clientOrderArray[i];
        template.querySelector("ul").appendChild(newOrderLine);
    }

    document.querySelector(destination).appendChild(template);
}

function clearPreviousQueue(el){
    document.querySelector(el).innerHTML = "";
}

function addServingLength(servingLength){
    document.querySelector("#serving h1 .queue-number").textContent = " " + servingLength.length + " ";
    if(servingLength.length >= 2 || servingLength.length == 0) {
        document.querySelector("#serving h1 .queue-text").textContent = "ARE BEING SERVED";
    } else
    document.querySelector("#serving h1 .queue-text").textContent = "IS SERVED";
}