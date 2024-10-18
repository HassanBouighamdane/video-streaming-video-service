const mongoose=require('mongoose')

const videoSchema=mongoose.Schema({
    id:String,
    title:String,
    description:String,
    frontImageUrl:String,
    videoUrl:String,
    duration:Number,
    watchNumber:String,
    published:Date,
    categories:Array,
    likes:Number,
    dislikes:Number,
    UserId:String,
    
},
{
    timestamps:true,
});
module.exports= mongoose.model('Video',videoSchema);