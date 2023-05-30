import Post from '../models/postsModel.js';
import User from '../models/User.js';

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;  // get userId, description, picturePath from req.body
    const user = await User.findById(userId); // find user by id from req.body
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      description,
      picturePath,
      userPicturePath: user.picturePath,
      likes: {},
      comments: [],
    })
    await newPost.save();

    const posts = await Post.find().sort({ createdAt: -1 });  // find all posts and sort by createdAt in descending order
    res.status(200).json(posts);  // send posts to client
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });  // find all posts and sort by createdAt in descending order
    res.status(200).json(posts);  // send posts to client
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;  // get userId from req.params
    const posts = await Post.find({ userId: userId }).sort({ createdAt: -1 });  // find all posts and sort by createdAt in descending order
    res.status(200).json(posts);  // send posts to client
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE POST
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;  // get id from req.params
    const { userId } = req.body;  // get userId from req.body
    const post = await Post.findById(id);  // find post by id from req.params
    const isLiked = post.likes.get(userId);  // get like status of post by userId from req.body

    if (isLiked === undefined) {  // if like status of post by userId from req.body is undefined
      post.likes.set(userId, true);  // set like status of post by userId from req.body to true
    } else if (isLiked === true) {  // if like status of post by userId from req.body is true
      post.likes.set(userId, false);  // set like status of post by userId from req.body to false
    } else if (isLiked === false) {  // if like status of post by userId from req.body is false
      post.likes.set(userId, true);  // set like status of post by userId from req.body to true
    } else {  // if like status of post by userId from req.body is not undefined, true, or false
      res.status(400).json({ message: 'Invalid like status' });  // send error message to client
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },  // update likes of post by id from req.params to likes of post by userId from req.body
      { new: true } // return updated post
    );
    res.status(200).json(updatedPost);  // send updated post to client
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};