let extended = false;

export function init(data, data2){
    clearPreviousQueue("#queue-wrapper");
    addQueueLength(data2);
    addCustomer(data);
}

function addCustomer(data){
    let queueArray = data;
    for(let client of queueArray){
        addClientTemplate("#client-template", "#queue-wrapper", client.id, client.order);
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

function addQueueLength(queueLength){
    document.querySelector("#queue h1 span").textContent = " " + queueLength + " ";
    if(queueLength >= 2 || queueLength == 0) {
        document.querySelector("#queue h1 .queue-text").textContent = "PEOPLE IN QUEUE";
    } else
    document.querySelector("#queue h1 .queue-text").textContent = "PERSON IN QUEUE";
}