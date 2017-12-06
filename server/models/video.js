const mongoose=require('mongoose');
const Schema = mongoose.Schema;


const videoSchema=new Schema({
    videoid:String,
    url:String
});
 module.exports=mongoose.model('Video',videoSchema,'videos');