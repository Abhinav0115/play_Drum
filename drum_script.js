//detecting button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document
        .querySelectorAll(".drum")
        [i].addEventListener("click", function () {
            playDrum(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });
}

//detecting key press

document.addEventListener("keypress", function (event) {
    playDrum(event.key);

    buttonAnimation(event.key);
});

function playDrum(key) {
    switch (key) {
        case "j":
        case "J":
            var audio = new Audio("./sound/crash.mp3");
            audio.play();
            break;
        case "k":
        case "K":
            var audio = new Audio("./sound/kick-bass.mp3");
            audio.play();
            break;
        case "l":
        case "L":
            var audio = new Audio("./sound/snare.mp3");
            audio.play();
            break;
        case "w":
        case "W":
            var audio = new Audio("./sound/tom-1.mp3");
            audio.play();
            break;
        case "a":
        case "A":
            var audio = new Audio("./sound/tom-2.mp3");
            audio.play();
            break;
        case "s":
        case "S":
            var audio = new Audio("./sound/tom-3.mp3");
            audio.play();
            break;
        case "d":
        case "D":
            var audio = new Audio("./sound/tom-4.mp3");
            audio.play();
            break;

        default:
            alert("wrong key (" + key + ") pressed");
    }
}

function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");

    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 200);
}
