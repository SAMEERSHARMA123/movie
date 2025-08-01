const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://instaclone:6EOUyarbinuGQe0z@cluster0.hh6xvjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
  }
};

module.exports = {connectDB};
