import mongoose from 'mongoose';


console.log(process.env.MONGO_URI);
function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

export default connectDB;
