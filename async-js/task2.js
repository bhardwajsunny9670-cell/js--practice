// Task 2: Chain 3 fake API functions using .then()
// getUser → getPosts(userId) → getComments(postId) → log all results


function getUser(){
    return new Promise((resolve )=>{
        resolve({ id:1 , name: "Sunny" })
    })
}

function getPosts(userId){
    return new Promise((resolve)=>{
        resolve([
            {id:1 , title: "post1 "},
            {id:2 , title: "post2"}
        ])
    })
}

function getComments(postId){
    return new Promise((resolve)=>{
        resolve([
            {id:1 , text: "nice!"},
            {id:2 , text: "great!"}
        ])
    })
}

getUser()
.then((user)=>{
    console.log("User:", user);
    return getPosts(user.id);
}).then((posts)=>{
    console.log("Posts:", posts);
    return getComments(posts[0].id);
}).then((comments)=>{
    console.log("Comments:", comments);
}).catch((error)=>{
    console.log("Error:", error);
});