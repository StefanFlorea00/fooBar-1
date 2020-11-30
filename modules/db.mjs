"use strict";
const url = "https://foobarserver.herokuapp.com/"

const restDbUrl = "https://foobar-ad40.restdb.io/rest/queue"; //RestDB url link for POSTing to queue
const restDbAPIKey = "5fbf87774af3f9656800cf33" //RestDB API key 

export let rootData = "";

export function get() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            prepareData(data);
        });
};

function prepareData(data) {
    showData(data);
    rootData = data;
};

// POST TO DB
function post(){
    const dataToPost = {
        numberOfPeople: queueLength
    };

    const postData = JSON.stringify(dataToPost);
    fetch(restDbUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": restDbAPIKey,
            "cache-control": "no-cache"
        },
        body: postData
    })
        .then(res => res.json())
        .then(data => console.log(data));
}

export function showData(data) {
    console.log(data);
};

export function getBar(){
    return rootData.bar;
}

function getQueue(){
    return rootData.queue;
}

function getServing(){
    return rootData.serving;
}

function getBartenders(){
    return rootData.bartenders;
}

export function getTaps(){
    return rootData.taps;
}

function getStorage(){
    return rootData.storage;
}

export function getQueueLength(){
    return rootData.queue.length;
}


