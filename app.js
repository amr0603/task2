require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3002; 

const Task2 = require("./models/Task2");

async function connectionDB() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("conction scssful DB");
    } catch (error) {
         console.log("conction falid", error.message) 
    }
    
};
 connectionDB();

 app.post("./Task2",async(req ,res)=>{

try {
    const { fullname,phones,socialMedia}=req.body;

if(!fullname||!phones||!socialMedia){
return res.status(400).json({msg:"not filed"})
const Task2=await Task2.create({
    fullname,phones,socialMedia
}) 

res.status(201).json({msg:"Oon creatr",Task2})
}
} catch (error) {
    console.log("error",error.message)
}

 })

app.get("./Task2",async(req,res)=>{
try {
     const Task2=await Task2.find();
        res.json(Task2);
}catch (error) {
    console.log("error")
}
})



app.listen(PORT,()=>{
    console.log("srver rinning un port: ", PORT)
});