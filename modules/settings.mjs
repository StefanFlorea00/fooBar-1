const home = document.querySelector(".home-button");
const settings = document.querySelector(".settings-button");

const section_dashboard = document.querySelector("#dashboard");
const section_settings = document.querySelector("#settings");

const nav_dashboard = document.querySelector("#dashboard-nav");
const nav_settings = document.querySelector("#settings-nav");

const login = document.querySelector("#login");
const layout = document.querySelector("#layout");
const theme = document.querySelector("#theme");


settings.addEventListener("click", showingSettings);
home.addEventListener("click", showingDashboard);

function showingSettings() {
    console.log("clicked on settings button");

    section_dashboard.style.display = "none";
    nav_dashboard.style.display = "none";

    section_settings.style.display = "flex";
    nav_settings.style.display = "flex";


}

function showingDashboard() {
    console.log("clicked on home button");

    section_dashboard.style.display = "flex";
    nav_dashboard.style.display = "flex";

    section_settings.style.display = "none";
    nav_settings.style.display = "none";

    subsettings.forEach(newpage => newpage.style.display = "none");
    arrow_back.style.display = "none";
}

// starting the subsettings

const subsettings = [];

const login_section = document.querySelector("#login-section");
const layout_section = document.querySelector("#layout-section");
const theme_section = document.querySelector("#theme-section");

subsettings.push(login_section);
subsettings.push(layout_section);
subsettings.push(theme_section);

const arrow_back = document.querySelector(".arrow-back");
arrow_back.addEventListener("click", goingBack);

layout.addEventListener("click", showingLayout);

function showingLayout() {

    arrow_back.style.display = "block";

    layout_section.style.display = "flex";
    section_settings.style.display = "none";

}

function goingBack() {

    subsettings.forEach(newpage => newpage.style.display = "none");
    section_settings.style.display = "flex";

    arrow_back.style.display = "none";
}