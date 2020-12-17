"use strict";

const TEMPLATE_SOURCE = "#client-template";
const TEMPLATE_DESTINATION = "#queue-wrapper";

export function init(data, data2) {
    clearPreviousQueue(TEMPLATE_DESTINATION);
    addQueueLength(data2);
    addCustomer(data);
    
    // it's commented out so it doesen't fetch continuous, considering the free account limitations, restDB can't keep up
   // getRestDBQueue(data); 
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



// GET queue previous stored data from RestDB 
function getRestDBQueue() {
    const restDbUrl = "https://foobar-ad40.restdb.io/rest/queue"; //RestDB url  for GETing queue data
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



// Preparing the data and declaring the variable needed for Chart use
function prepareQueueData(restDBQueueData) {
    let queueHistory = restDBQueueData;
    let queueLengthArray = [];
    let orderStartTimeArray = [];
    let chartXlabel = [];


    for (let i = 0; i < queueHistory.length; i++) {
        let queueHistoryData = queueHistory[i];
        let orderTimeStamp = queueHistoryData.startTime;
        let queueLength = queueHistoryData.queueLength;
        // let orderStartTime = new Date(orderTimeStamp); //convert timestamp to readable date
        queueLengthArray.push(queueLength)
        orderStartTimeArray.push(orderTimeStamp)

    }

    let chartQueueData = [];
    // making the array for feeding the chart
    for (let i = 0; i < 60; i++) {
        chartQueueData.push({
            x: i,
            y: queueLengthArray[i]
        })
        chartXlabel.push(orderStartTimeArray[i])
    }
    chartJs(chartQueueData, chartXlabel);
};


// ChartJs 
function chartJs(chartQueueData, chartXlabel) {
    var ctx = document.getElementById('queue-chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        // The queue data for our dataset
        data: {
            labels: chartXlabel,
            datasets: [{
                label: 'number of people in queue',
                backgroundColor: 'rgb(255, 99, 132)',
                data: chartQueueData

            }],
            gridLines: [{
                display: false
            }
            ]
        },
        // Configuration options 
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    display: false

                }]
            }
        }
    });
}

