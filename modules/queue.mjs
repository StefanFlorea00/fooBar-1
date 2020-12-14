"use strict";

const TEMPLATE_SOURCE = "#client-template";
const TEMPLATE_DESTINATION = "#queue-wrapper";

export function init(data, data2) {
    clearPreviousQueue(TEMPLATE_DESTINATION);
    addQueueLength(data2);
    addCustomer(data);
    // getRestDBQueue(data);
    // queueTimeStamp(data)
}

function addCustomer(data) {
    let queueArray = data;
    for (let client of queueArray) {
        addClientTemplate(TEMPLATE_SOURCE, TEMPLATE_DESTINATION, client.id, client.order);
    }
}

function addClientTemplate(srcTemplate, destination, clientId, clientOrderArray) {
    const template = document.querySelector(srcTemplate).content.cloneNode(true);

    template.querySelector("h3 > span").textContent = clientId;

    for (let i = 0; i < clientOrderArray.length; i++) {
        let newOrderLine = document.createElement("li");
        newOrderLine.textContent = clientOrderArray[i];
        template.querySelector("ul").appendChild(newOrderLine);
    }

    document.querySelector(destination).appendChild(template);
}

function clearPreviousQueue(el) {
    document.querySelector(el).innerHTML = "";
}

function addQueueLength(queueLength) {
    document.querySelector("#queue h1 span").textContent = " " + queueLength + " ";
    if (queueLength >= 2 || queueLength == 0) {
        document.querySelector("#queue h1 .queue-text").textContent = "PEOPLE IN QUEUE";
    } else
        document.querySelector("#queue h1 .queue-text").textContent = "PERSON IN QUEUE";
}




// function queueTimeStamp(data) {
//     let queueArray = data;
//     for (let i = 0; i < queueArray.length; i++) {
//         let orderTimeStamp = queueArray[i].startTime;
//         console.log(orderTimeStamp)

//         let orderTime = new Date(orderTimeStamp);
//         console.log(orderTime)
//     };
// }




// GET

function getRestDBQueue() {
    const restDbUrl = "https://foobar-ad40.restdb.io/rest/queue"; //RestDB url link for POSTing to queue
    const restDbAPIKey = "5fbf87774af3f9656800cf33" //RestDB API key 


    fetch(restDbUrl, {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": restDbAPIKey,
            "cache-control": "no-cache"
        }
    })
        .then(res => res.json())
        .then(restDBQueueData =>
            // when loaded, prepare objects
            prepareQueueData(restDBQueueData));


}


function prepareQueueData(restDBQueueData) {
    let queueHistory = restDBQueueData;
    // console.log(queueHistory)
    // console.log(queueHistory[0].numberOfPeople);
    // console.log(queueHistory.length);

    for (let i = 0; i < queueHistory.length; i++) {
        let queueHistoryData = queueHistory[i].numberOfPeople;
        // console.log(queueHistoryData);
        // chartJs(queueHistoryData);
    }
};



function chartJs(queueHistoryData) {
    var ctx = document.getElementById('queue-chart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [],
            // labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [{
                // label: 'actual people in queue',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: queueHistoryData,

            }],
            gridLines: [{
                display: false
            }
            ]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }


        }
    });
}