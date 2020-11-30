"use strict";

import * as db from "./modules/db.mjs";
import { rootData } from "./modules/db.mjs";

//***IF YOU TRY TO GET DATA FROM DB AT START OF PAGE */
//***IT WILL BE EMPTY BECAUSE IT TRIES TO GET DATA BEFORE FETCHING */



db.get();
// setTimeout(() => {
console.log(db.getTaps());
// }, 100);
