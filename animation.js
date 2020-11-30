
const queue = document.querySelector("#queue");
const serving = document.querySelector("#serving");

const bartenders = document.querySelector("#bartenders");
const activity = document.querySelectorAll(".activity");


const taps = document.querySelector("#ontap");
const individualTaps = document.querySelectorAll(".extanded-tap");

queue.addEventListener("click", () => {
    queue.children[2].classList.toggle("collapsed");
})

serving.addEventListener("click", () => {
    serving.children[2].classList.toggle("collapsed");
})

const activities = _.toArray(activity);
console.log(activities);

bartenders.addEventListener("click", () => {
    activities.forEach(activity => activity.classList.toggle("collapsed"))
})

const arrayTaps = _.toArray(individualTaps);

taps.addEventListener("click", () => {
    console.log(arrayTaps);
    arrayTaps.forEach(tap => tap.classList.toggle("collapsed"));
})
