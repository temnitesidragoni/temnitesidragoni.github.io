const navbar = document.getElementById("navbar");

const main = document.getElementById("main");

const section_home = document.getElementById("section-home");
const section_news = document.getElementById("section-news");
const section_crew = document.getElementById("section-crew");
const section_shop = document.getElementById("section-shop");

const footer = document.getElementById("footer");


window.onload = () => {
    resizeMainContent();
};


window.onresize = () => {
    resizeMainContent();
};


function resizeMainContent() {
    main.style.marginRight = navbar.offsetWidth + "px";
}