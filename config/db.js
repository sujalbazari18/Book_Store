const mongoose =require('mongoose');

const MongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';

const connectDB = async () => {
    try {
        await mongoose.connect(MongoDB, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
