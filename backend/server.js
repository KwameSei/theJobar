import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

/* FOR MANUAL DATA INSERTION */
// import User from "./models/User.js";
// import Post from "./models/postsModel.js";
// import { users, posts } from "./data/index.js"

dotenv.config();
const { MONGO_URL, PORT } = process.env;

// Database connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      // Add data one time
      // User.insertMany(users);
      // Post.insertMany(posts);
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
