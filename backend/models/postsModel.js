import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    city: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean, // true = like, false = dislike
    },
    comments: {
      type: Array,
      default: [],
    }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;