const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const MONGODB_PORT=process.env.MONGODB_PORT|| 27017;
const MONGODB_DATABASE=process.env.MONGODB_DATABASE || "VideoService";
const MONGODB_HOST=process.env.MONGODB_HOST || "localhost";
const MONGODB_USERNAME=process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = encodeURIComponent(process.env.MONGODB_PASSWORD);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: host: ${conn.connection.host}  database: ${conn.connection.db.databaseName}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;

