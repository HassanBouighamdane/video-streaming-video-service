const router=require('express').Router();
const  videoController= require('../controllers/videoController');
 router.get('/',videoController.getAllVideos);

 router.get('/:id',videoController.getVideoById)
 

 module.exports = router;