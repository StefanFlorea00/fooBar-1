
const queue = document.querySelector("#queue");
const serving = document.querySelector("#serving");

const bartenders = document.querySelector("#bartenders");
const activity = document.querySelectorAll(".activity");

const storage = document.querySelector("#storage");

const taps = document.querySelector("#ontap");
const individualTaps = document.querySelectorAll(".extanded-tap");

/* queue.addEventListener("click", () => {
    queue.children[2].classList.add("expanding");
}) */

/* serving.addEventListener("click", () => {
    serving.children[2].classList.toggle("collapsed");
}) */

storage.addEventListener("click", () => {
    document.querySelector(".wrapper-storage").classList.toggle("extended");
    storage.querySelectorAll(".stored-keg").forEach(keg => {
        keg.querySelector(".kegs").classList.toggle("hidden");
        keg.querySelector(".keg-amount").classList.toggle("hidden");
    });

})

const activities = _.toArray(activity);

bartenders.addEventListener("click", () => {
    activities.forEach(activity => activity.classList.toggle("collapsed"))
})

taps.addEventListener("click", () => {
    document.querySelector(".wrapper-taps").classList.toggle("extended");
    document.querySelectorAll(".extanded-tap").forEach(tap => tap.classList.toggle("collapsed"))
})

// working on calculated animation 
//https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse
//article height is expanded
// can Title height serve as collapsed?



/* const allArticles = document.querySelectorAll("#dashboard > article");
const arrayArticles = _.toArray(allArticles);

getCompleteheight(queue);

//gives the current height of the article
function getCompleteheight(element) {

    //height of the article at a giving time. Will change if extanded
    console.log(element);
    console.log(element.getBoundingClientRect());

    //height of the clients container. 0 if hidden.
    console.log(element.children[2]);
    console.log(element.children[2].getBoundingClientRect());

    element.style.height = `${element.getBoundingClientRect().height - element.children[2].getBoundingClientRect().height}px`;
    element.children[2].classList.add("hidden");

} */

queue.addEventListener("click", getExpanded);
serving.addEventListener("click", getExpanded);

function getExpanded(e) {


    if (e.currentTarget.children[2].classList.contains("expanding")) {

        e.currentTarget.children[2].classList.remove("expanding");

        document.documentElement.style.setProperty('--random-height', `${e.currentTarget.children[2].offsetHeight}px`);

        e.currentTarget.children[2].classList.add("sosmol");

        let y = document.querySelector(".sosmol");
        y.addEventListener("animationend", (e) => {
            console.log(e.target);
            e.target.classList.add("hidden");
            e.target.classList.remove("sosmol");
        }, { once: true })

    }

    else {

        e.currentTarget.children[2].classList.remove("sosmol");
        e.currentTarget.children[2].classList.remove("hidden");

        document.documentElement.style.setProperty('--random-height', `${e.currentTarget.children[2].offsetHeight}px`);


        e.currentTarget.children[2].classList.add("expanding");
    }
}