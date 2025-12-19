import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGO_URI}/Glimp`);
        console.log(`\n MongoDB Connected Successfully, DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection FAILED:", error);
        process.exit(1);
    }
}

export default connectDB;