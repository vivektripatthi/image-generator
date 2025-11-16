import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("MongoDB Connected Successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("MongoDB Connection Error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("MongoDB Disconnected");
        });

        // Parse the connection string to insert database name correctly
        const mongoUri = process.env.MONGODB_URI;
        const dbName = 'imagify';
        
        // If URI already has query params, insert db name before them
        const finalUri = mongoUri.includes('?') 
            ? mongoUri.replace('mongodb.net/', `mongodb.net/${dbName}`)
            : `${mongoUri}/${dbName}`;
            
        await mongoose.connect(finalUri);

        console.log("MongoDB Connection Attempted");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;