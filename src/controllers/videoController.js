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
};

const createVideo=async (req,res)=>{
    try {
        const videoData={
            title:req.body.title,
            description:req.body.description,
            frontImageUrl:req.body.frontImageUrl,
            videoUrl:req.body.videoUrl,
            duration:req.body.duration,
            categories:req.body.categories,
            userId:req.body.userId,
        };
        const newVideo=await videoService.createVideo(videoData);
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).send("Error saving the video: "+error);
    }
};

const deleteVideo=async(req,res)=>{
    try {
        const deleteResult=await videoService.deleteVideo(req.params.id);
        res.status(204).send();
    } catch (error) {
        return res.status(404).json({
            message:error.message || "Video not found"
        })
    }
};

module.exports ={
    getAllVideos,
    getVideoById,
    createVideo,
    deleteVideo,
};