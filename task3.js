// Task 2: Chain 3 fake API functions using .then()
// getUser → getPosts(userId) → getComments(postId) → log all results

// Rewrite task 2 with async/await with proper try/catch error handlings.
//stimulate one function rejecting and handle it gracefully.

function getUser(){
    return new Promise((resolve)=>{
        resolve({id:1 , name: "Sunny"});
    })
}
function getPosts(userId){
    return new Promise((resolve)=>{
        resolve([
            {id:1 , title: "post1 "},
            {id:2 , title: "post2"}
        ]);
    })
};
function getComments(postId){
    return new Promise((resolve, reject)=>{
        // stimulate an error by rejecting promise
       reject(new Error("failed to fetch comments"))
    })
}

async function fetchData(){
    try{
        const user = await getUser();
        console.log("User:", user);
        const posts = await getPosts(user.id);
        console.log("Posts:", posts);
        const comments = await getComments(posts[0].id);
        console.log("Comments:", comments);
    }catch(error){
        //runs when getComments rejects
        console.log("Error:", error);
    }
}

fetchData();