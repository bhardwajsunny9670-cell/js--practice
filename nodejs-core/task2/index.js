// use fs.readfileSync and fs.writeFileSync to read a user.json file. add a new user obj.
// then refactor to use fs.promises.readFile/writeFile with async await.
// handle the case where the file doesn't exist yet.

const fs = require('fs');

const path = require('path'); // it prepare the exact address of your file so Node.js can use it
const filePath = path.join(__dirname, 'user.json');

const newUser = {
    id: 1 ,
    name: "Sunny Sharma",
    age: 20,
    city: "Sonipat"
};

let users = [];
try{
    const read = fs.readFileSync(filePath, 'utf-8');
    users = JSON.parse(read);
}catch(err){
    if(err.code === 'ENOENT'){// ENOENT means file not found
        console.log("File not found. A new file will be created.")
        users = [];// file doesn't exist, start with an empty array
    }else{
        console.log("Error :", err.message);
        process.exit(1); // means stop the program immediately with an error
    }
}

users.push(newUser);

try{
const jsonData = JSON.stringify(users , null ,2);

fs.writeFileSync(filePath, jsonData );
console.log("user added. Total Users:", users.length);
}catch(err){
    console.log("Error :", err);
}

// Refactor version using fs.promise readfile/writefile are written in index1.js