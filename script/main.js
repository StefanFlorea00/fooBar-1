"use strict";

import * as db from "../modules/db.mjs";
import * as storage from "../modules/storage.mjs";
import * as bartenders from "../modules/bartenders.mjs";
import * as taps from "../modules/taps.mjs";
import * as queue from "../modules/queue.mjs";
import * as serving from "../modules/serving.mjs";
import * as hours from "../modules/hours.mjs";
import * as navbar from "../modules/navbar.mjs";
import * as settings from "../modules/settings.mjs";
import * as layout from "../modules/layout-style.mjs";

const UPDATE_INTERVAL = 5000; //in ms

//***IF YOU TRY TO GET DATA FROM DB AT START OF PAGE */
//***IT WILL BE EMPTY BECAUSE IT TRIES TO GET DATA BEFORE FETCHING */

db.get(db.prepareData);
//updateTimer();
setTimeout(updateComponents, 100);

setInterval(() => {
    db.get(db.prepareData);
    updateComponents();
    //updateTimer();
}, UPDATE_INTERVAL);


function updateComponents() {
    setTimeout(() => {
        storage.init(db.getStorage());
        bartenders.init(db.getBartenders(), db.getServing());
        taps.init(db.getTaps());
        queue.init(db.getQueue(), db.getQueueLength());
        serving.init(db.getServing());
        hours.init(db.getClosingTime());
    }, 100);
}

/* function updateTimer() {
    document.querySelector(".update-timer-fill").classList.remove("fill-anim");
    void document.querySelector(".update-timer-fill").offsetWidth;

    document.querySelector(".update-timer-fill").classList.add("fill-anim");
    document.querySelector(".fill-anim").style.animationDuration = UPDATE_INTERVAL / 1000 + "s";

} */