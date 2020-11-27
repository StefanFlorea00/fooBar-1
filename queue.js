"use strict";
const url = "https://foobarserver.herokuapp.com/"
let queueLengthArray = [];

loadJSON();

function loadJSON() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // when loaded, prepare objects
            prepareData(data);
        });
    setTimeout(loadJSON, 5000);
};

function prepareData(data) {
    let queueLength = data.queue.length;
    console.log(queueLength);
    // console.log(typeof queueLength);

    queueLengthArray.push(queueLength);

    if (queueLengthArray.length >= 11) {
        queueLengthArray.shift()
    }

    console.log(queueLengthArray);

    showData(queueLength);
    chartJs(queueLengthArray);


    // POSTing to RestDB

    // const url2 = "https://foobar-ad40.restdb.io/rest/queue"; //RestDB url link for POSTing to queue
    // const key = "5fbf87774af3f9656800cf33" //RestDB API key 

    // const dataToPost = {
    //     numberOfPeople: queueLength
    // };

    // const postData = JSON.stringify(dataToPost);
    // fetch(url2, {
    //     method: "post",
    //     headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         "x-apikey": key,
    //         "cache-control": "no-cache"
    //     },
    //     body: postData
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data));


};




function showData(queueLenght) {
    document.querySelector(".module1 h2 span").textContent = queueLenght;
};



function chartJs(queue) {
    var ctx = document.getElementById('queue-chart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [{
                // label: 'actual people in queue',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: queue,

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

