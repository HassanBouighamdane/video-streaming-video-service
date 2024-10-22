const Video=require('../models/video');
const videoService=require('../services/videoService');

const getAllVideos=async(req,res)=>{
    try {
        const allVideos=await videoService.getAllVideos();
        res.status(200).json(allVideos);
    } catch (error) {
        res.status(500).send("Enable to fetch all videos");
    }
}

const getVideoById=async (req,res)=>{
    try{
        const video= await videoService.getVideoById(req.params.id);
        res.status(200).json(video);
    } catch(error){
        res.staus(500).send("Enable to fetch the video")
    }
}


const createVideo=async (req,res)=>{
    const videoData={
        title:req.title,
        description:req.description,
        frontImageUrl:req.frontImageUrl,
        videoUrl:req.videoUrl,
        duration:req.duration,
        watchNumber:req.watchNumber,
        categories:req.categories,
        UserId:req.UserId,
    }
}

module.exports ={
    getAllVideos,
    getVideoById,
    createVideo,
};