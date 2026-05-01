//Refactor version using fs.promise readfile/writefile

const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, 'user.json');

const newUser = {
    id: 2,
    name: "John Doe",
    age: 25,
    city: "New York"
};

async function addUser(user){
    let users = [];
    try{
        const read = await fs.readFile(filePath, 'utf-8');
        users = JSON.parse(read);
    }catch (err){
        if(err.code === "ENOENT"){
            console.log("File not found. start fresh.");
            users= [];
        }else{
            console.log("Error :", err.message);
            process.exit(1);
        }
    }

    users.push(user);

    try{
        const jsonData = JSON.stringify(users, null , 2);
        await fs.writeFile(filePath, jsonData);
        console.log("User added. total users:", users.length);
    }catch(err){
        console.log("Error :", err);
    }
}
addUser(newUser);

