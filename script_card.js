
const particle = document.getElementsByClassName("particle");
const highway = document.getElementById("highway");
const photo = document.getElementById("photo");
const photoImg = document.getElementById("photo_img");

var timer;

var cRandomNumber = 0;

var slideFast = false;

highway.addEventListener("mouseenter", nextParticle);
highway.addEventListener("mouseleave", showReset);

highway.addEventListener("mousedown", setSlideFast);
highway.addEventListener("mouseup", resetSlideFast);

document.getElementById("circle").addEventListener("mouseup", loadContactPage);

particle[0].addEventListener("animationiteration", nextParticle, false);
particle[1].addEventListener("animationiteration", nextParticle, false);
particle[2].addEventListener("animationiteration", nextParticle, false);

function nextParticle(){
    console.log("next Particle");
    var r = getNonRepeatingRandomNumber();
    cRandomNumber = r;
    if(r==1){
        showBlue();
    }else if(r==2){
        showOrange();
    }else{
        showRed();
    }
    photoImg.classList.add("chaseMode");
}

function getNonRepeatingRandomNumber(){
    var r = Math.floor(Math.random()*3 + 1);

    var sum = cRandomNumber + r;
    
    if(sum % 2 == 0){
        if(r==3){
            return r-2;
        }else {
            return r+1;
        }
    }else{
        return r;
    }

}

function setSlideFast(){
    particle[0].classList.add("slide--fast");
    particle[1].classList.add("slide--fast");
    particle[2].classList.add("slide--fast");
}
function resetSlideFast(){
    particle[0].classList.remove("slide--fast");
    particle[1].classList.remove("slide--fast");
    particle[2].classList.remove("slide--fast");
    loadPortfolio();

}

function chaseBlue(){
    photo.classList.remove("chaseOrange");
    photo.classList.remove("chaseRed");
    photo.classList.add("chaseBlue");
}
function chaseOrange(){
    photo.classList.remove("chaseBlue");
    photo.classList.remove("chaseRed");
    photo.classList.add("chaseOrange");
}
function chaseRed(){
    photo.classList.remove("chaseOrange");
    photo.classList.remove("chaseBlue");
    photo.classList.add("chaseRed");
}
function chaseReset(){
    photo.classList.remove("chaseOrange");
    photo.classList.remove("chaseBlue");
    photo.classList.remove("chaseRed");
    
    photoImg.classList.remove("chaseMode");
}

function showBlue(){
    particle[0].style.visibility = "visible";
    particle[0].classList.add("particle--slide");

    particle[1].style.visibility = "hidden";
    particle[1].classList.remove("particle--slide");

    particle[2].style.visibility = "hidden";
    particle[2].classList.remove("particle--slide");
    chaseBlue();
}
function showOrange(){
    particle[0].style.visibility = "hidden";
    particle[0].classList.remove("particle--slide");

    particle[1].style.visibility = "visible";
    particle[1].classList.add("particle--slide");

    particle[2].style.visibility = "hidden";
    particle[2].classList.remove("particle--slide");
    chaseOrange();
}
function showRed(){
    particle[0].style.visibility = "hidden";
    particle[0].classList.remove("particle--slide");

    particle[1].style.visibility = "hidden";
    particle[1].classList.remove("particle--slide");

    particle[2].style.visibility = "visible";
    particle[2].classList.add("particle--slide");
    chaseRed();
}
function showReset(){
    particle[0].style.visibility = "hidden";
    particle[0].classList.remove("particle--slide");

    particle[1].style.visibility = "hidden";
    particle[1].classList.remove("particle--slide");

    particle[2].style.visibility = "hidden";
    particle[2].classList.remove("particle--slide");
    chaseReset();
}


function loadPortfolio(){
    window.location.href = 'portfolio.html';
}
function loadContactPage(){
    window.location.href = 'contact.html';
}