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

const deleteVideo=async(videoId)=>{
    try {
        const video=await videoModel.findByIdAndDelete(videoId);
        if(!video){
            throw new Error("Video Not found");
        }
        return video;
    } catch (error) {
        throw new Error(error.message)
    }
    
}

const updateVideo=async(videoId,videoData)=>{
     
    try {
        
    } catch (error) {
        
    }

}

module.exports= {
    getAllVideos,
    getVideoById,
    createVideo,
    deleteVideo,
    updateVideo,
   
}