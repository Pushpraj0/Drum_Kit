
//detecting button press
var numOfTimeClicked = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfTimeClicked; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this);
        var buttoninnerHTML = this.innerHTML;
        
        makesound(buttoninnerHTML);

        animation(buttoninnerHMTL);
    });
}
// detecting key press
document.addEventListener("keypress", function (event) {
    makesound(event.key);

    animation(event.key);

});

// function to make sound
function makesound(key) {
    switch (key) {
        case "w":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default: (console.log(buttoninnerHTML));
            break;
    }
}
function animation(currentKey) {
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);
}
