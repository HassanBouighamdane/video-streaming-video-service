const router=require('express').Router();
const  videoController= require('../controllers/videoController');

 router.get('/',videoController.getAllVideos);

 router.get('/:id',videoController.getVideoById)
 
 router.post('/',videoController.createVideo);

 router.delete('/:id',videoController.deleteVideo)
 module.exports = router;