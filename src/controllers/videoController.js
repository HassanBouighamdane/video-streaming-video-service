const Video=require('../models/video');
const videoService=require('../services/videoService');

const getAllVideos=async(req,res)=>{
    try {
        const allVideos=await videoService.getAllVideos();
        res.send({status:200,body:allVideos});
    } catch (error) {
      
    }
    
    
}

const getVideoById=(req,res)=>{
    res.send("get video by id");
}


const createVideo=(req,res)=>{
   
}

module.exports ={
    getAllVideos,
    getVideoById,
    createVideo,
};