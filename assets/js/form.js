let usernameInput = document.getElementById("username");
console.log(usernameInput);
let titleInput = document.getElementById('title');
console.log(titleInput);
let blogInput = document.getElementById('blog')
console.log(blogInput)
let submitButton = document.getElementById('submit')
console.log(submitButton)

let userObject = {
    username: "",
    title: "",
    blog: ""
}

let userArray = [];

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const usernameValue = usernameInput.value;
    const titleValue = titleInput.value;
    const blogValue = blogInput.value;

    userObject.username = usernameValue;
    userObject.title = titleValue;
    userObject.blog = blogValue;

    userArray.push({...userObject});
    console.log(userObject)
    console.log(userArray)

    usernameInput.value = "";
    titleInput.value = "";
    blogInput.value = "";
});