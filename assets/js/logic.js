const lightDarkIcon = document.getElementById("lightDarkIcon")

lightDarkIcon.addEventListener('click', changeLightDarkMode);

function changeLightDarkMode() {
    if (lightDarkIcon.getAttribute('data-mode') === "sun") {
        lightDarkIcon.src = "./assets/Images/moon.png";
        lightDarkIcon.setAttribute('data-mode', 'moon');
    } else {
        lightDarkIcon.src = "./assets/Images/sun.png";
        lightDarkIcon.setAttribute('data-mode', 'sun');
    }
}