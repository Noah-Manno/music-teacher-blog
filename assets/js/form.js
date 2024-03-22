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
    userArray.push({...newUserObject});

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