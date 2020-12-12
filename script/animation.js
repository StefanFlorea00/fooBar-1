
const queue = document.querySelector("#queue");
const serving = document.querySelector("#serving");

const bartenders = document.querySelector("#bartenders");
const activity = document.querySelectorAll(".activity");

const taps = document.querySelector("#ontap");
const individualTaps = document.querySelectorAll(".extanded-tap");

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

const activities = _.toArray(activity);

bartenders.addEventListener("click", () => {

    activities.forEach((activity) => {
        if (activity.classList.contains("expanding")) {
            activity.classList.remove("expanding");
            document.documentElement.style.setProperty('--random-height', `${activity.offsetHeight}px`);

            activity.classList.add("sosmol");

            let y = document.querySelector(".sosmol");
            y.addEventListener("animationend", (e) => {
                console.log(e.target);
                e.target.classList.add("hidden");
                e.target.classList.remove("sosmol");
            }, { once: true });
        }

        else {
            activity.classList.remove("sosmol");
            activity.classList.remove("hidden");

            document.documentElement.style.setProperty('--random-height', `${activity.offsetHeight}px`);
            activity.classList.add("expanding");

        }
    })
});

taps.addEventListener("click", () => {

    document.querySelector(".wrapper-taps").classList.toggle("extended");
    //document.querySelectorAll(".extanded-tap").forEach(tap => tap.classList.toggle("collapsed"))
    gettingTapup();
});

function gettingTapup() {

    if (document.querySelector(".wrapper-taps").classList.contains("animation-flag")) {
        console.log("step-2");
        document.querySelector(".wrapper-taps").classList.remove("animation-flag");


        document.querySelectorAll(".extanded-tap").forEach(tap => {
            document.querySelector(".wrapper-taps").classList.remove("animation-flag");

            tap.classList.remove("expanding");
            document.documentElement.style.setProperty('--random-height', `${tap.offsetHeight}px`);

            tap.classList.add("sosmol");

            let y = document.querySelector(".sosmol");
            y.addEventListener("animationend", (e) => {
                console.log(e.target);
                e.target.classList.add("collpased");
                e.target.classList.remove("sosmol");
            }, { once: true });

        })
    }

    else {

        document.querySelector(".wrapper-taps").classList.add("animation-flag");
        console.log("step-1");

        document.querySelectorAll(".extanded-tap").forEach(tap => {

            tap.classList.remove("sosmol");
            tap.classList.remove("collapsed");

            document.documentElement.style.setProperty('--random-height', `${tap.offsetHeight}px`);
            tap.classList.add("expanding");
        })
    }
};