import express from 'express';
import { register, login } from '../controllers/auth.js';
// import { protect } from '../middleware/auth.js';
import upload from '../storage_setup.js';

const router = express.Router();

router.post('/register', upload.single('picture'), register, (req, res) => {
  // Access the uploaded file details
  const picture = req.file;
  console.log(picture);

  // Handle the file upload response
  if (!picture) {
    res.status(500).json({ error: 'Please upload a file' });
  } else {
    res.status(200).json({ message: 'File uploaded successfully', picture });
  }
});
router.post('/login', login);
// router.post('/login', login);
// router.get('/logout', logout);
// router.get('/me', protect, getMe);
// router.post('/forgotpassword', forgotPassword);
// router.put('/resetpassword/:resettoken', resetPassword);
// router.put('/updatedetails', protect, updateDetails);
// router.put('/updatepassword', protect, updatePassword);

export default router;