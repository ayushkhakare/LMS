const mongoose=require('mongoose');

const notification= new mongoose.Schema({
     name:String,
     email:String,
     subject:String,
     message:String,

     
   
});

module.exports =mongoose.model("notification",notification)