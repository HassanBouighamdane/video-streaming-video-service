const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    id:String,
    text:{
        type:String,
        required:true,
    },
    idUser:String,
    userName:String,
    videoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    },
    createdAt: { type: Date, default: Date.now },
});

export default Comment=mongoose.model("Comment",commentSchema);