"use strict";

import * as db from "../modules/db.mjs";
import * as storage from "../modules/storage.mjs";
import * as bartenders from "../modules/bartenders.mjs";
import * as taps from "../modules/taps.mjs";
import * as queue from "../modules/queue.mjs";
import * as serving from "../modules/serving.mjs";
import * as hours from "../modules/hours.mjs";

//***IF YOU TRY TO GET DATA FROM DB AT START OF PAGE */
//***IT WILL BE EMPTY BECAUSE IT TRIES TO GET DATA BEFORE FETCHING */

db.get(db.prepareData);
setTimeout(updateComponents, 100);

setInterval(() => {
    db.get(db.prepareData);
    updateComponents();
}, 5000);


function updateComponents() {
    setTimeout(() => {
        storage.init(db.getStorage());
        bartenders.init(db.getBartenders(),db.getServing());
        taps.init(db.getTaps());
        queue.init(db.getQueue(), db.getQueueLength());
        serving.init(db.getServing());
        hours.init(db.getClosingTime());
    }, 100);
}