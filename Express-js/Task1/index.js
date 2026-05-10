//create server that listens on port 3000. 
//make 3 routes get/ , get/about , get/health .
const express = require('express');
const app = express();


app.get('/',(req,res)=> {
    res.send("hello world ")
});

const data = {
    name: "Sunny",
    role: "Software Engineer"
};

app.get("/about",(req,res)=>{
    console.log(data);
    res.send(data);
});

app.get("/health",(req,res)=>{
    res.send(`Status : OK`)
});

app.listen(3000, () =>{
    console.log(`Server is running `)
})


