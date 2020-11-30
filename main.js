"use strict";

import * as db from "./modules/db.mjs";
import * as storage from "./modules/storage.mjs";
import * as bartenders from "./modules/bartenders.mjs";

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
    }, 100);
}