//task 5 : Fetch GitHub user data using async/await with error handling


async function fetchGitHubUser(username){
    try{
       const response = await fetch(`https://api.github.com/users/${username}`);
       if(!response.ok){
        throw new Error(`User ${username} not found`);
         }
        const data = await response.json();
        return {
            name: data.name,
            publicRepos: data.public_repos,
            followers: data.followers
        }
       }catch(error){
        console.log("Error:", error.message);
    }

    } 

fetchGitHubUser("bhardwajsunny9670-cell").then((data)=>{
    console.log("GitHub User Data:", data);
})

fetchGitHubUser("heyabcd1563").then((data)=>{
    console.log("GitHub User Data:", data);
})