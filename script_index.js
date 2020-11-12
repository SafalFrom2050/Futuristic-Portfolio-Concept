const navBar = document.getElementsByTagName("nav");
const navTitle = document.getElementsByClassName("nav_title")[0];
const navMenus = document.getElementsByClassName("nav_menu");
const card = document.getElementById("highway");

navBar[0].addEventListener("mouseenter", hideTitleShowMenu);

card.addEventListener("mouseenter", showTitleHideMenu);
card.addEventListener("mouseleave", hideTitleShowMenu);
var timerTitle;

function hideTitleShowMenu(){
    navTitle.classList.add("nav_title_hidden");
    clearInterval(timerTitle);
    navMenus[0].classList.remove("nav_menu_hidden");
    navMenus[1].classList.remove("nav_menu_hidden");
    navMenus[2].classList.remove("nav_menu_hidden");
    navMenus[3].classList.remove("nav_menu_hidden");
}

function showTitleHideMenu(){
    navTitle.classList.remove("nav_title_hidden");
    timerTitle = setInterval(changeTitleKnowMore,1000);

    navMenus[0].classList.add("nav_menu_hidden");
    navMenus[1].classList.add("nav_menu_hidden");
    navMenus[2].classList.add("nav_menu_hidden");
    navMenus[3].classList.add("nav_menu_hidden");
}

function changeTitleKnowMore(){
    clearInterval(timerTitle);
    navTitle.textContent = "Click To Know More About Me...";
    timerTitle = setInterval(changeTitleToName,3000);
}
function changeTitleToName(){
    clearInterval(timerTitle);
    navTitle.textContent = "I'm Safal!";
    timerTitle = setInterval(changeTitleKnowMore,2000);
}
