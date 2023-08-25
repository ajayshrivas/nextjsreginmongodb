import mongoose from 'mongoose';
const connectDB = async () => {
    try { 
        const uri = 'mongodb://0.0.0.0:27017/next_app_db';
        await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
  } catch (error) {
        console.error('MongoDB connection error:', error);
  }
};
export default connectDB;