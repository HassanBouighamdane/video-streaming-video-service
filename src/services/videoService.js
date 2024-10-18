const videoModel=require('../models/video');

const getAllVideos=async()=>{
    const videos=await videoModel.find();
    return videos;
}

module.exports= {
    getAllVideos,
   
}