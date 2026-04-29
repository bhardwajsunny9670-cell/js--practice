//convert task 6 to use async/await. second function fetchUserPOsts(userId) returns a Promise
// third function getUserDashboard(id) calls both sequentially and with promise.all().

function fetchUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(id > 0){
                resolve({ id: id , name: "User"+id})
            }else{
                reject(new Error("Invalid User ID"))
            }
        } , 1000);
    })
}

// async function fetchData(){
//     try{
//         const user = await fetchUser(3);
//         console.log("User:", user);
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }
// fetchData();

function fetchUserPosts(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
             resolve({userId: userId , posts: ["post 1", "post 2"]})
        },2000);
       
    })
}

 async function getUserDashboard(userID){
    try{
        console.time("sequential");
        const user = await fetchUser(userID);
        console.log("User:", user);
        const posts = await fetchUserPosts(userID);
        console.log("User Posts:", posts);
        console.timeEnd("sequential");
    }catch(error){
        console.log("Error:", error.message);
    }
}


async function getUserParallel(userID){
    try{
        console.time("parallel");
        const [user, posts] = await Promise.all([fetchUser(userID), fetchUserPosts(userID)])
        console.log("User:",user);
        console.log("User Posts:", posts);
        console.timeEnd("parallel");
    }catch(error){
        console.log("Error:", error.message);
    }
}

async function main(){
    await getUserDashboard(4);
    await getUserParallel(5);
}
main();