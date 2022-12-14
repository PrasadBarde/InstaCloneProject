const mongoose= require('mongoose');
const postimage=new mongoose.Schema({
    imagename:{type:String},
    imagedata:{type:String}
})

const ImageModel = mongoose.model('Postimage',postimage);
module.exports=ImageModel;