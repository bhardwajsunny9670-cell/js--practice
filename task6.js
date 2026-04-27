// function fetchUser(id) returns a Promise that resolve after 1 sec.
// handle rejection if id <= 0

function fetchUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(id > 0){
                resolve({id: id, name:"User"+id})
                
            }else{
                reject(new Error("Invalid user ID"))
            }
        } , 1000);
    })
}
 fetchUser(2).then((user)=>{
    console.log("User:", user);
 }).catch((Error)=>{
    console.log("Error:", Error.message);
 })