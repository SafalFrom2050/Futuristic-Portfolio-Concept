const rocket = document.getElementById("rocket");
const navMenu = document.getElementsByClassName("nav_menu");
const themeText = document.getElementById("theme");
const rocketContainer = document.getElementById("rocket_container");
const section = document.getElementById("section");

var timer;

var timerCount = 0;
var isLightMode = true;

const moveBackgroundLight = "background--move--light";
const moveBackgroundDark = "background--move--dark";

const launchDownwards = "launch--downwards", launchUpwards  = "launch--upwards";

//Listen for rocket animation's completion
rocket.addEventListener("animationend", rocketAnimationEnd, false);

//End of the rocket Animation, now must pop in the section content of the webpage
function rocketAnimationEnd(){
    section.classList.remove("section--pop--out");
    section.classList.add("section--pop--in");
    rocketContainer.style.height="0"; 
}

//This method is called each time a timer ticks
function tick(){
    if(timerCount==1){
        moveBackground();
        timerCount = 0;
        clearInterval(timer);
    }
    timerCount += 1;
}

//This method is used to scroll the background upwards or downwards
function moveBackground(){
    var mode = "";
    //If light mode, scroll upwards
    if(!isLightMode){
        mode = moveBackgroundDark;
        changeThemeButton("Light");
    }else{                              //Else, scroll downwards
        mode = moveBackgroundLight;
        changeThemeButton("Dark");
    }
    //Add and remove css classes keep the background intact
    document.body.classList.remove(moveBackgroundLight);
    document.body.classList.remove(moveBackgroundDark);
    void rocket.offsetWidth;
    document.body.classList.add(mode);
}

//This is to update the 'Set Dark/Light mode' button
function changeThemeButton(mode){
    themeText.textContent = mode+" Mode";
}

//Method for changing the navigation color
function setNavMenuColor(color){
    navMenu[0].style.color = color;
    navMenu[1].style.color = color;
    navMenu[2].style.color = color;
}

//Beginning of the animation
function startAnimation(){
    var mode = "";

    transportSectionPack();

    //Check if it is light mode or dark mode
    if(isLightMode){
        mode = launchUpwards;
    }else{
        mode = launchDownwards;
    }
    //Toggle the isLightMode Variable
    isLightMode = !isLightMode;

    //Show the rocket
    rocketContainer.style.visibility = "visible";

    //Remove and css classes to perform appripriate animations 
    rocket.classList.remove(launchUpwards);
    rocket.classList.remove(launchDownwards);
    void rocket.offsetWidth;
    rocket.classList.add(mode);
    
    //Start the timer to scroll the background at appropriate time
    timer = setInterval(tick, 800);
}

//This method scales down and scales up the section part of the webpage during rocket launch
function transportSectionPack(){
    section.classList.remove("section--pop--in");
    if(isLightMode){
        section.classList.add("section--pop--out");
    }else{
        section.classList.add("section--pop--out--delay");
    }
}