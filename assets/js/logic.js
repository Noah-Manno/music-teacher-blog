const lightDarkIcon = document.getElementById("lightDarkIcon");
const backgroundContainer = document.getElementById("background");
const lightImage = 'url(./assets/Images/Background.png)';
const darkImage = 'url("./assets/Images/darkModeBackground.png")';

lightDarkIcon.addEventListener('click', changeLightDarkMode);

function changeLightDarkMode() {

    let newContent = document.querySelectorAll('.post-content')
    let newTitle = document.querySelectorAll('.post-title')
    let linkBack = document.getElementById('link-backwards')
    let projectDivs = document.querySelectorAll('.post-container')
    let myBlogPostsTitle = document.getElementById('my-blog-posts')


    if (lightDarkIcon.getAttribute('data-mode') === "sun") {
        lightDarkIcon.setAttribute('data-mode', 'moon');
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

        projectDivs.forEach(projects => {
            projects.style.backgroundColor = "gray"
        });

        myBlogPostsTitle.style.color = 'black'

        linkBack.style.backgroundColor = 'black';
        linkBack.style.color = "white";
        linkBack.style.borderColor = "white"
    } else {
        lightDarkIcon.setAttribute('data-mode', 'sun');
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
}

