const mongoose=require('mongoose');

const courseSchema= new mongoose.Schema({
     img:String,
     title:String,
     rating:String,
     price:String,
     teacher:String,
     description:String,
    
     
});

module.exports =mongoose.model("course",courseSchema)