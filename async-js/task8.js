// Rewrite the using Promises, then again using async/await. make the fake functions yourself.

// getUser(1, (user) => {
//   getPosts(user.id, (posts) => {
//     getComments(posts[0].id, (comments) => {
//       console.log(comments);
//     });
//   });
// });


function getUser(id){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve({id: id, name: "User"+id})
        },1000);
    })
}
function getPosts(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {id:1 , title: "Post 1"},
                {id:2 , title: "Post 2"}
            ])
        },1000);
    })
}

function getComments(postId){
    return new Promise((resolve)=>{
        resolve([
            {id:1 , text: "Nice!"},
            {id:2 , text: "Great!"}
        ])
    })
}

getUser(2).then((user)=>{
    console.log("User:", user);
    return getPosts(user.id);
}).then((posts)=>{
    console.log("Posts:", posts);
    return getComments(posts[0].id);
}).then((comments)=>{
    console.log("Comments:", comments);
}).catch((error)=>{
    console.log("Error:", error.message);
})

async function fetchData(){
    try{
        const user =  await getUser(5);
        console.log("User:", user);
        const posts = await getPosts(user.id);
        console.log("Posts:", posts);
        const comments = await getComments(posts[0].id);
        console.log("Comments:", comments);
    }catch(error){
        console.log("Error:", error.message);
    }
}

fetchData();