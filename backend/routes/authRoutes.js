import express from 'express';
import { register } from '../controllers/auth.js';
// import { protect } from '../middleware/auth.js';
import upload from '../storage_setup.js';

const router = express.Router();

router.post('/register', upload.single('picture'), register);
// router.post('/login', login);
// router.get('/logout', logout);
// router.get('/me', protect, getMe);
// router.post('/forgotpassword', forgotPassword);
// router.put('/resetpassword/:resettoken', resetPassword);
// router.put('/updatedetails', protect, updateDetails);
// router.put('/updatepassword', protect, updatePassword);

export default router;