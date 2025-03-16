const mongoose=require('mongoose')

const videoSchema=mongoose.Schema({
    title:String,
    description:String,
    frontImageUrl:String,
    videoUrl:String,
    duration:Number,
    watchNumber:{
        type:Number,
        default:0,
    },
    categories:Array,
    likes:{
        type:Number,
        default:0,
    },
    dislikes:{
        type:Number,
        default:0,
    },
    userId:String,
},
{
    timestamps:true,
});
module.exports= mongoose.model('Video',videoSchema);