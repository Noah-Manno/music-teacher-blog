let users = localStorage.getItem('users');
let parsedUsers = JSON.parse(users);
console.log(parsedUsers);

//Creating the Div with post-container class
//Also create the text content with the appropriate classes.

const mainSection = document.getElementById('posts-go-here')

for (let index = 0; index < parsedUsers.length; index++) {
    let currentUser = parsedUsers[index];
    let name = currentUser.username;
    let title = currentUser.title;
    let content = currentUser.blog;

    //Chooses a Random Color
    let colorPallete = ['#A33ED3', '#D9D9D9', '#F08C7F', 'red', 'maroon', 'blue', 'green', 'beige', 'navy']
    let randomIndex = Math.floor(Math.random() * colorPallete.length);
    let colorChosen = colorPallete[randomIndex]
    //Adds the Div
    let newPost = document.createElement("div");
    newPost.className = "post-container"; 
    newPost.style.backgroundColor = colorChosen
    //Adds the title
    let newTitle = document.createElement("h4");
    newTitle.className = "post-title";
    newTitle.textContent = title;
    //Adds the Content
    let newContent = document.createElement("p");
    newContent.className = "post-content";
    newContent.textContent = content;
    //Adds the User
    let newUsername = document.createElement("h5");
    newUsername.className = "post-username";
    newUsername.textContent = `Posted by ${name}`

    //Appends all the elements to the Main Sections
    mainSection.appendChild(newPost);
    newPost.appendChild(newTitle);
    newPost.appendChild(newContent);
    newPost.appendChild(newUsername);
}

const lightDarkIcon = document.getElementById("lightDarkIcon");
const backgroundContainer = document.getElementById("background");
const lightImage = 'url(./assets/Images/Background.png)';
const darkImage = 'url("./assets/Images/darkModeBackground.png")';

let newContent = document.querySelectorAll('.post-content')
let newTitle = document.querySelectorAll('.post-title')
let linkBack = document.getElementById('link-backwards')
let projectDivs = document.querySelectorAll('.post-container')
let myBlogPostsTitle = document.getElementById('my-blog-posts')

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

        newTitle.forEach(title => {
            title.style.backgroundColor = 'black';
            title.style.color = "white";
        });

        newContent.forEach(content => {
            content.style.backgroundColor = 'black';
            content.style.color = "white";
        });

        projectDivs.forEach(project => {
            project.style.backgroundColor = "gray"
        });

        myBlogPostsTitle.style.color = 'black';

        linkBack.style.backgroundColor = 'black';
        linkBack.style.color = "white";
        linkBack.style.borderColor = "white";

}

function setLightMode() {
    lightDarkIcon.setAttribute('data-mode', 'sun');
    let currentMode = lightDarkIcon.getAttribute('data-mode')
    localStorage.setItem('mode', currentMode)
    lightDarkIcon.src = "./assets/Images/sun.png";
    background.style.backgroundImage = lightImage;

    newTitle.forEach(title => {
        title.style.backgroundColor = 'white';
        title.style.color = "black";
    });

    newContent.forEach(content => {
        content.style.backgroundColor = 'white';
        content.style.color = "black";
    });

    myBlogPostsTitle.style.color = '#F08C7F'

    linkBack.style.backgroundColor = 'white';
    linkBack.style.color = "black";
    linkBack.style.borderColor = "#F08C7F"

    let colorPallete = ['#A33ED3', '#D9D9D9', '#F08C7F', 'red', 'maroon', 'blue', 'green', 'beige', 'navy']
    
    projectDivs.forEach(project => {
    let randomIndex = Math.floor(Math.random() * colorPallete.length);
    let colorChosen = colorPallete[randomIndex]
    project.style.backgroundColor = colorChosen
    });
}


function changeLightDarkMode() {

    if (lightDarkIcon.getAttribute('data-mode') === "sun") {
        setDarkMode();
    } else {
        setLightMode();
}
}