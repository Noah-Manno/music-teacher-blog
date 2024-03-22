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