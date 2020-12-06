const submit_button = document.querySelector("#save-changes");
submit_button.addEventListener("click", savingLayoutSetting);

//creating an object for the settings
//localStorage.removeItem("layout_settings");
let layout_settings = JSON.parse(localStorage.getItem("layout_settings"));

if (!layout_settings) {
    layout_settings = {
        queue: {
            order: 1,
        },

        serving: {
            order: 2,
        },

        hours: {
            order: 3,
        },

        bartenders: {
            order: 4,
        },

        storage: {
            order: 5,
        },

        ontap: {
            order: 6,
        },
    }
}

//settings the form from settings

const queue_order = document.querySelector("#queue-order");
const serving_order = document.querySelector("#serving-order");
const hours_order = document.querySelector("#hours-label");
const bartenders_order = document.querySelector("#bartenders-order");
const storage_order = document.querySelector("#storage-order");
const ontap_order = document.querySelector("#ontap-order");

/* queue_order.options[0].textContent = layout_settings.queue.order;
serving_order.options[0].textContent = layout_settings.serving.order;
hours_order.options[0].textContent = layout_settings.hours.order;
bartenders_order.options[0].textContent = layout_settings.bartenders.order;
storage_order.options[0].textContent = layout_settings.storage.order;
ontap_order.options[0].textContent = layout_settings.ontap.order; */

//submit?

function savingLayoutSetting() {

    //setting the object with the data of the form
    layout_settings.queue.order = queue_order.value;
    layout_settings.serving.order = serving_order.value;
    layout_settings.hours.order = hours_order.value;
    layout_settings.bartenders.order = bartenders_order.value;
    layout_settings.storage.order = storage_order.value;
    layout_settings.ontap.order = ontap_order.value;

    localStorage.setItem("layout_settings", JSON.stringify(layout_settings));
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