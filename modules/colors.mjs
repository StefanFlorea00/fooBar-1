
let color_settings = JSON.parse(localStorage.getItem("color_settings"));
//localStorage.removeItem("color_settings");

if (!color_settings) {
    color_settings = {
        main_color: "#326EBE",
        background_color: "#EAF2FF",
        highlight_color: "#F27627",
        font_color: "#FFFFFF",
    }
}

//sets the stylesheet with the local storage


//gets the input and changes its value to the local storage

const main_input = document.querySelector("#main-color");
const background_input = document.querySelector("#background-color");
const highlight_input = document.querySelector("#highlight-color");
const font_input = document.querySelector("#font-color");

function changeVisual() {
    main_input.value = color_settings.main_color;
    background_input.value = color_settings.background_color;
    highlight_input.value = color_settings.highlight_color;
    font_input.value = color_settings.font_color;
}

changeVisual();

function changeStylesheet() {
    document.documentElement.style.setProperty('--main-color', color_settings.main_color);
    document.documentElement.style.setProperty('--highlight-color', color_settings.highlight_color);
    document.documentElement.style.setProperty('--background-color', color_settings.background_color);
    document.documentElement.style.setProperty('--font-color', color_settings.font_color);
}

changeStylesheet();

//sets local storage to new values

const save_colors = document.querySelector("#save-colors");
save_colors.addEventListener("click", saveColorsLocal);

function saveColorsLocal() {
    console.log("button working");
    color_settings.main_color = main_input.value;
    color_settings.background_color = background_input.value;
    color_settings.highlight_color = highlight_input.value;
    color_settings.font_color = font_input.value;

    localStorage.setItem("color_settings", JSON.stringify(color_settings));
    changeStylesheet();

}

const reset_color = document.querySelector("#reset-colors");
reset_color.addEventListener("click", resetColor);

function resetColor() {

    console.log("button working");

    localStorage.removeItem("color_settings");

    color_settings = {
        main_color: "#326EBE",
        background_color: "#EAF2FF",
        highlight_color: "#F27627",
        font_color: "#FFFFFF",
    }

    changeVisual();
    changeStylesheet();

}
//needs function to reset

