//creating an object for the settings
//localStorage.removeItem("layout_settings");
let layout_settings = JSON.parse(localStorage.getItem("layout_settings"));

if (!layout_settings) {
    layout_settings = {
        queue: {
            order: 1,
            showing: true,
        },

        serving: {
            order: 2,
            showing: true,
        },

        hours: {
            order: 3,
            showing: true,
        },

        bartenders: {
            order: 4,
            showing: true,
        },

        storage: {
            order: 5,
            showing: true,
        },

        ontap: {
            order: 6,
            showing: true,
        },

        layout: {
            style: "fit-to-line",
        }
    }
}

// for the first part of the settings

const image_example = document.querySelector(".example-layout");
const layout_select = document.querySelector("#layout-choice");

image_example.value = layout_settings.layout.style;

export let dashboard_layout;

checkImage();
changeLayoutDashboard();

layout_select.addEventListener("change", checkImage);

function checkImage() {
    if (layout_select.value == "fit-to-column") {
        image_example.setAttribute("src", "assets/fittocolumn.png");
    }
    else if (layout_select.value == "fit-to-line") {
        image_example.setAttribute("src", "assets/fittoline.png");
    }
    else if (layout_select.value == "grid-layout") {
        image_example.setAttribute("src", "assets/grid.png");
    }
}

function changeLayoutDashboard() {
    const dashboard_section = document.querySelector("#dashboard");

    if (layout_select.value == "fit-to-column") {
        dashboard_layout = "columns";
    }
    else if (layout_select.value == "fit-to-line") {
        dashboard_layout = "flex";
    }
    else if (layout_select.value == "grid-layout") {
        dashboard_layout = "grid";
    }

}
// for the second part of the settings

const submit_button = document.querySelector("#save-changes");
submit_button.addEventListener("click", savingLayoutSetting);


//settings the form from settings

const queue_order = document.querySelector("#queue-order");
const serving_order = document.querySelector("#serving-order");
const hours_order = document.querySelector("#hours-label");
const bartenders_order = document.querySelector("#bartenders-order");
const storage_order = document.querySelector("#storage-order");
const ontap_order = document.querySelector("#ontap-order");

const queue_checkbox = document.querySelector("#queue-showing");
const serving_checkbox = document.querySelector("#serving-showing");
const hours_checkbox = document.querySelector("#hours-showing");
const bartenders_checkbox = document.querySelector("#bartenders-showing");
const storage_checkbox = document.querySelector("#storage-showing");
const ontap_checkbox = document.querySelector("#ontap-showing");


const layout_section = document.querySelector("#layout-section");


//submit? Yes, it is the function linked to the save button

function savingLayoutSetting() {

    //setting the object with the data of the form
    layout_settings.queue.order = queue_order.value;
    layout_settings.serving.order = serving_order.value;
    layout_settings.hours.order = hours_order.value;
    layout_settings.bartenders.order = bartenders_order.value;
    layout_settings.storage.order = storage_order.value;
    layout_settings.ontap.order = ontap_order.value;

    layout_settings.queue.showing = queue_checkbox.checked;
    layout_settings.serving.showing = serving_checkbox.checked;
    layout_settings.hours.showing = hours_checkbox.checked;
    layout_settings.bartenders.showing = bartenders_checkbox.checked;
    layout_settings.storage.showing = storage_checkbox.checked;
    layout_settings.ontap.showing = ontap_checkbox.checked;

    localStorage.setItem("layout_settings", JSON.stringify(layout_settings));

    setWidgetsOrder();
    changeLayoutDashboard();


}

const listArrayValue = document.querySelectorAll(".order-select");
const arraySelectValue = _.toArray(listArrayValue);

function checkingValidity() {

    //create eventlistener for all select
    arraySelectValue.forEach(changedSelect => {

        changedSelect.addEventListener("change", (e) => {

            let otherElements = [];
            otherElements = _.without(arraySelectValue, e.target);

            otherElements.forEach(other => {

                if (other.value == changedSelect.value) {
                    checkCurrentValues();
                    other.value = checkCurrentValues();
                }
            })
        })
    });
}

function checkCurrentValues() {

    let currentValue = [];
    currentValue = [];

    const possibleValues = ["1", "2", "3", "4", "5", "6"];

    for (let i = arraySelectValue.length - 1; i > -1; i--) {
        currentValue.push(arraySelectValue[i].value);
    };


    let absentValue = _.difference(possibleValues, currentValue);
    console.log(currentValue);

    return absentValue
};

checkingValidity();

//working on actually making changes

const widget_queue = document.querySelector("#queue");
const widget_serving = document.querySelector("#serving");
const widget_hours = document.querySelector("#hours");
const widget_bartenders = document.querySelector("#bartenders");
const widget_storage = document.querySelector("#storage");
const widget_ontap = document.querySelector("#ontap");

function setWidgetsOrder() {
    widget_queue.style.order = layout_settings.queue.order;
    widget_serving.style.order = layout_settings.serving.order;
    widget_hours.style.order = layout_settings.hours.order;
    widget_bartenders.style.order = layout_settings.bartenders.order;
    widget_storage.style.order = layout_settings.storage.order;
    widget_ontap.style.order = layout_settings.ontap.order;
}

// reset button
const reset_button = document.querySelector("#reset");
reset_button.addEventListener("click", resetSettings);

function resetSettings() {
    localStorage.removeItem("layout_settings");
    layout_settings = {
        queue: {
            order: 1,
            showing: true,
        },

        serving: {
            order: 2,
            showing: true,
        },

        hours: {
            order: 3,
            showing: true,
        },

        bartenders: {
            order: 4,
            showing: true,
        },

        storage: {
            order: 5,
            showing: true,
        },

        ontap: {
            order: 6,
            showing: true,
        },

        layout: {
            style: "fit-to-line",
        }
    }

    setWidgetsOrder();

    //reset selects
    queue_order.value = layout_settings.queue.order;
    serving_order.value = layout_settings.serving.order;
    hours_order.value = layout_settings.hours.order;
    bartenders_order.value = layout_settings.bartenders.order;
    storage_order.value = layout_settings.storage.order;
    ontap_order.value = layout_settings.ontap.order;
    layout_select.value = layout_settings.layout.style;

    checkImage();
    setDisplayBox();

    arrCheckboxes.forEach(checkbox => setDisplayArticle(checkbox));

}

//third settings 


function setDisplayBox() {

    queue_checkbox.checked = layout_settings.queue.showing;
    serving_checkbox.checked = layout_settings.serving.showing;
    hours_checkbox.checked = layout_settings.hours.showing;
    bartenders_checkbox.checked = layout_settings.bartenders.showing;
    storage_checkbox.checked = layout_settings.storage.showing;
    ontap_checkbox.checked = layout_settings.ontap.showing;

    console.log(queue_checkbox.checked);
    console.log(layout_settings.queue.showing);
}

export { setDisplayBox };

const queue = document.querySelector("#queue");
const serving = document.querySelector("#serving");
const hours = document.querySelector("#hours");
const bartenders = document.querySelector("#bartenders");
const storage = document.querySelector("#storage");
const ontap = document.querySelector("#ontap");

const checkboxes = document.querySelectorAll(".form-for-showing > label > input");
const arrCheckboxes = _.toArray(checkboxes);

arrCheckboxes.forEach(checkbox => checkbox.addEventListener("change", (i) => {
    setDisplayArticle(i.target);
}));

import { navEl_array } from '../modules/navbar.mjs';

function setDisplayArticle(e) {

    //e is the input checked or unchecked
    console.log(e);

    // n is the button from navbar
    let d = _.find(navEl_array, function (n) {
        return n.dataset.article == e.dataset.article;
    });


    switch (e.dataset.article) {

        case "queue":
            if (e.checked == true) {
                queue.classList.remove("hidden");
                queue.classList.add("showing");
                d.classList.remove("hidden");
            }
            else {
                queue.classList.add("hidden");
                queue.classList.remove("showing");
                d.classList.add("hidden");
            }

            break;

        case "serving":

            if (e.checked == true) {
                serving.classList.remove("hidden");
                serving.classList.add("showing");
                d.classList.remove("hidden");
            }
            else {
                serving.classList.add("hidden");
                serving.classList.remove("showing");
                d.classList.add("hidden");
            }

            break;
        case "hours":

            if (e.checked == true) {
                hours.classList.remove("hidden");
                hours.classList.add("showing");
                d.classList.remove("hidden");
            }
            else {
                hours.classList.add("hidden");
                hours.classList.remove("showing");
                d.classList.add("hidden");
            }
            break;

        case "bartenders":
            if (e.checked == true) {
                bartenders.classList.remove("hidden");
                bartenders.classList.add("showing");
                d.classList.remove("hidden");

            }
            else {
                bartenders.classList.add("hidden");
                bartenders.classList.remove("showing");
                d.classList.add("hidden");

            }
            break;

        case "storage":
            if (e.checked == true) {
                storage.classList.remove("hidden");
                storage.classList.add("showing");
                d.classList.remove("hidden");

            }
            else {
                storage.classList.add("hidden");
                storage.classList.remove("showing");
                d.classList.add("hidden");

            }
            break;

        case "ontap":
            if (e.checked == true) {
                ontap.classList.remove("hidden");
                ontap.classList.add("showing");
                d.classList.remove("hidden");

            }
            else {
                ontap.classList.add("hidden");
                ontap.classList.remove("showing");
                d.classList.add("hidden");

            }
            break;
    }
};