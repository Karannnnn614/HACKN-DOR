import express from 'express';
 
const app = express();
app.listen(3000);

app.get('/',(req,res)=>{
    res.send("Welcome to asjfjghas");
})
console.log("server invoked at link http://localhost:3000");
