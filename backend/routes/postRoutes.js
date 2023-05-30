import express from 'express';
import { 
  getFeedPosts,
  getUserPosts,
  likePost,
  // getPost,
  createPost,
  // updatePost,
  // deletePost 
} from '../controllers/postsController.js';
// import { verifyAuth } from '../middleware/auth.js';
import upload from '../storage_setup.js';

const router = express.Router();

// READ ALL POSTS
router.get('/posts', getFeedPosts);
router.get('/:userId/posts', getUserPosts);

// READ ONE POST
// router.get('/:id', verifyAuth(['user', 'admin', 'superadmin']), getPost);

// CREATE POST
router.post('/', upload.single('picture'), createPost);

// UPDATE POST
router.patch('/:id/like', likePost);

// DELETE POST
// router.delete('/:id', verifyAuth(['user', 'admin', 'superadmin']), deletePost);

export default router;