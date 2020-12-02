
const queue = document.querySelector("#queue");
const serving = document.querySelector("#serving");

const bartenders = document.querySelector("#bartenders");
const activity = document.querySelectorAll(".activity");

const storage = document.querySelector("#storage");

const taps = document.querySelector("#ontap");
const individualTaps = document.querySelectorAll(".extanded-tap");

queue.addEventListener("click", () => {
    queue.children[2].classList.toggle("collapsed");
})

serving.addEventListener("click", () => {
    serving.children[2].classList.toggle("collapsed");
})

storage.addEventListener("click", () => {
    document.querySelector(".wrapper-storage").classList.toggle("extended");
    storage.querySelectorAll(".stored-keg").forEach(keg => {
        keg.querySelector(".kegs").classList.toggle("hidden");
        keg.querySelector(".keg-amount").classList.toggle("hidden");
    });

})

const activities = _.toArray(activity);
console.log(activities);

bartenders.addEventListener("click", () => {
    activities.forEach(activity => activity.classList.toggle("collapsed"))
})

taps.addEventListener("click", () => {
    document.querySelector(".wrapper-taps").classList.toggle("extended");
    document.querySelectorAll(".extanded-tap").forEach(tap => tap.classList.toggle("collapsed"))
})
