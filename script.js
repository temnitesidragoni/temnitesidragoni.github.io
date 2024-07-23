const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
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