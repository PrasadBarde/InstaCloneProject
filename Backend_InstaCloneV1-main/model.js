const mongoose = require('mongoose');
const postschema = new mongoose.Schema({
    imagename:{type:String},
    author:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String,required:true},
    likes:{type:Number},
    Date:{type:String}
})
const POStModel= mongoose.model("postinfo", postschema);
module.exports=POStModel