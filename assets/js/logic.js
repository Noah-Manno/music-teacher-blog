const lightDarkIcon = document.getElementById("lightDarkIcon");
const backgroundContainer = document.getElementById("background");
const lightImage = 'url(./assets/Images/Background.png)';
const darkImage = 'url("./assets/Images/darkModeBackground.png")';

lightDarkIcon.addEventListener('click', changeLightDarkMode);

function changeLightDarkMode() {
    if (lightDarkIcon.getAttribute('data-mode') === "sun") {
        lightDarkIcon.src = "./assets/Images/moon.png";
        lightDarkIcon.setAttribute('data-mode', 'moon');
        background.style.backgroundImage = darkImage;
    } else {
        lightDarkIcon.src = "./assets/Images/sun.png";
        lightDarkIcon.setAttribute('data-mode', 'sun');
        background.style.backgroundImage = lightImage;
    }
}