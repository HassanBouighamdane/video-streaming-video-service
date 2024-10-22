const videoModel=require('../models/video');

const getAllVideos=async()=>{
    const videos= await videoModel.find();
    return videos;
}
const getVideoById=async (id)=>{
    const video= await videoModel.findById(id);
    return video;
}
const createVideo=async(videoData)=>{
    const newVideo=new videoModel(videoData);
    return await newVideo.save();
}

module.exports= {
    getAllVideos,
    getVideoById,
   
}