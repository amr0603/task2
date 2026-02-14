
const mongoose=require("mongoose");

const Task2Schema=new mongoose.Schema({

fullname:{
    type:String,
    required:true,
},
phones:{
    type :[String],
 required:true,
},
socialMedia:{

   Facebook:{
type:String,
required:true
   } ,
linkedin:{
    type:String,
required:true,
},

},




},{timestamps:true});

const Task2=mongoose.model("Task2", Task2Schema);

module.exports=Task2;
