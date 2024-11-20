document.addEventListener("DOMContentLoaded", function() {
    var splashScreen = document.getElementById("splash-screen");
    var mainPage = document.getElementById("main-page");

    splashScreen.addEventListener("click", function() {
        var audio = document.getElementById("myAudio");
        audio.play();
        splashScreen.style.opacity = "0";
        mainPage.style.display = "block";
        setTimeout(function() {
            splashScreen.style.display = "none";
            mainPage.classList.add("show");
        }, 1000);
    });
});

function togglePlay() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function changeVolume() {
    var audio = document.getElementById("myAudio");
    var volume = document.getElementById("volumeSlider").value;
    audio.volume = volume;
}
