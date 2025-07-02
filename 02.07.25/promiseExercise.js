// Exercise 1 - Get User Data
function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => data.username)
        .catch(err => console.log("Error: ", err.message))
}

// getUser(10).then(user => console.log("User's name: ", user));


// Exercise 2 - Get Post Details
function getPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => data.title)
        .catch(err => console.log("Error: ", err.message))
}

// getPost(100).then(post => console.log("Post title: ", post));


// Exercise 3 - Show Users Email
function getUserEmail(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => data.email)
        .catch(err => console.log("Error: ", err.message))
}

// getUserEmail(2).then(userEmail => console.log("User's email: ", userEmail))


// Exercise 4 - List All Todos for a User
function listUserTodos(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log("Error: ", err.message))
}

const userId = 1;
// listUserTodos(userId).then(allUserTodos => console.log(`User ${userId} has ${allUserTodos.length} todos`))


// Exercise 5 - Check if Post Exists
function checkPostExists(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json())
        .then(data => {
            if (data.id) {
                return data;
            } else {
                throw new Error("Post not found");
            }
        });
}

checkPostExists(30)
    .then(() => console.log("Post exists"))
    .catch(err => console.log("Error:", err.message));

// Exercise 6 - Delay With Fetch
