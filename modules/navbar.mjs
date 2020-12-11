

//set the arrays 
const navEl = document.querySelectorAll("nav > ul > li");
const navEl_array = _.toArray(navEl);

export { navEl_array };

const articleElement = document.querySelectorAll("#dashboard > article");
const articleArray = _.toArray(articleElement);


checkingDisplayonArticle();

function checkingDisplayonArticle() {
    let result = articleArray.filter(article => article.classList.contains("hidden"));
    let shouldShow = _.difference(articleArray, result);
    return shouldShow;
}

export { checkingDisplayonArticle };

// need to match the button to the arrays
navEl_array.forEach(li => li.addEventListener("click", () => {

    let x = checkingDisplayonArticle();
    console.log(x);

    //find the article you clicked on, and the other article
    let a = _.find(x, function (n) {
        return n.attributes[0].value == li.dataset.article;
    });

    let b = _.without(x, a);

    console.log(b);
    activateButton(a, b, li);

}));

function activateButton(a, b, li) {

    //if another button is active 
    checkButtons(li);

    //there is no active button
    if (li.classList.contains("active")) {
        li.classList.remove("active");
        b.forEach(notselected => notselected.style.display = "flex");
        a.classList.remove("centered");
    }

    else {
        //hides all other articles
        b.forEach(notselected => notselected.style.display = "none");
        b.forEach(notselected => notselected.classList.remove("centered"));
        a.classList.add("centered");
        a.style.display = "flex";

        //activates button
        li.classList.add("active");
    }
}

function checkButtons(clicked) {
    let c = _.without(navEl_array, clicked);
    c.forEach(li => li.classList.remove("active"));

} 
