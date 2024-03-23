let usernameInput = document.getElementById("username");
console.log(usernameInput);
let titleInput = document.getElementById('title');
console.log(titleInput);
let blogInput = document.getElementById('blog')
console.log(blogInput)
let submitButton = document.getElementById('submit')
console.log(submitButton)

let userArray = JSON.parse(localStorage.getItem('users')) || [];

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    //define values from the input
    const usernameValue = usernameInput.value;
    const titleValue = titleInput.value;
    const blogValue = blogInput.value;

    //set the object properties to the value of the inputs
    let newUserObject = {
    username: usernameValue,
    title: titleValue,
    blog: blogValue
    };

    //push copy of object into array

    if (newUserObject.username !== "" && newUserObject.title !== "" && newUserObject.blog !== "") {
    userArray.push({...newUserObject});
    }
    console.log(userArray)
    //update local storage
    let arrayString = JSON.stringify(userArray)
    localStorage.setItem('users', arrayString)

    if (newUserObject.username == "" || newUserObject.title == "" || newUserObject.blog == "") {
        alert('please fill out the whole form')
    } else {
    //reset fields
    usernameInput.value = "";
    titleInput.value = "";
    blogInput.value = "";
        window.location.href = "file:///Users/noahmanno/bootcamp/music-teacher-blog/blog.html"     
    }
});

const lightDarkIcon = document.getElementById("lightDarkIcon");
const backgroundContainer = document.getElementById("background");
const lightImage = 'url(./assets/Images/Background.png)';
const darkImage = 'url("./assets/Images/darkModeBackground.png")';

let stickyNotes = document.querySelectorAll('.other-sticky')
let mainStickyNote = document.getElementById('main-sticky')
let mainStickyNoteTitle = document.getElementById('music-teacher-blog')
let inputTitles = document.querySelectorAll('.title-of-inputs')

let openingMode = localStorage.getItem('mode');

if (openingMode === 'moon') {
    setDarkMode();
} else {
    setLightMode();
};

lightDarkIcon.addEventListener('click', changeLightDarkMode);

function setDarkMode() {

    lightDarkIcon.setAttribute('data-mode', 'moon');
        let currentMode = lightDarkIcon.getAttribute('data-mode')
        localStorage.setItem('mode', currentMode)
        lightDarkIcon.src = "./assets/Images/moon.png";
        background.style.backgroundImage = darkImage;

        stickyNotes.forEach(notes => {
            notes.style.filter = "brightness(.1)"
        });

        inputTitles.forEach(inputs => {
            inputs.style.color = "white"
        });

}

function setLightMode() {
    lightDarkIcon.setAttribute('data-mode', 'sun');
    let currentMode = lightDarkIcon.getAttribute('data-mode')
    localStorage.setItem('mode', currentMode)
    lightDarkIcon.src = "./assets/Images/sun.png";
    background.style.backgroundImage = lightImage;

    stickyNotes.forEach(notes => {
        notes.style.filter = "brightness(1)"
    });

    inputTitles.forEach(inputs => {
        inputs.style.color = "#F08C7F"
    });
}


function changeLightDarkMode() {

    if (lightDarkIcon.getAttribute('data-mode') === "sun") {
        setDarkMode();
    } else {
        setLightMode();
}
}