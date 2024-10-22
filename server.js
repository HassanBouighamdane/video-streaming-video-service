const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./src/configs/db.conf');
const videoRoutes =require('./src/routes/videoRoutes')

//use the environmenet variables
dotenv.config();
const app=express();

// Connecting to the database
connectDB();

//Routes
app.use("/api/videos",videoRoutes);

//Creating and starting server
const port=process.env.PORT || 8082;
app.listen(port,()=>{
  console.log(`Server listening on port: ${port}`)
})
