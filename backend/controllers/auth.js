// Implementing the authentification logic
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
import e from 'express';

dotenv.config();

// Register a new user
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      otherNames,
      email,
      password,
      phone,
      profession,
      region,
      connections,
      district,
      city,
      address,
      picturePath,
      role,
      status,
      viewedProfile,
      lastSeen,
      impressions,
      isVerified,
      isSubscribed,
      isBlocked,
      isDeleted,
      isSuspended,
      isApproved,
      isPending,
      isPremium
    } = req.body;

    const saltRounds = 10; // Number of salt rounds for bcrypt
    const salt = await bcrypt.genSalt(saltRounds); // Generate a salt
    const passwordHash = await bcrypt.hash(password, salt); // Generate a password hash
    
    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      otherNames,
      email,
      password: passwordHash,
      phone,
      profession,
      region,
      connections,
      district,
      city,
      address,
      picturePath,
      role: role || 'user',
      status: status || 'active',
      viewedProfile: Math.floor(Math.random() * 1000),
      lastSeen: Date.now(),
      impressions: Math.floor(Math.random() * 1000),
      isVerified: false,
      isSubscribed: false,
      isBlocked: false,
      isDeleted: false,
      isSuspended: false,
      isApproved: false,
      isPending: true,
      isPremium: false
    });
    const savedUser = await newUser.save(); // Save user to database
    res.status(201).json(savedUser); // Send response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Login a user
export const login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body; // Get email and password from request body
    const user = await User.findOne({ email: email }); // Find user with email
    console.log(email);
    if (!user) {
      console.log(user);
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password); // Compare password with password hash
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' }); 
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' }); // Create a token
    delete user.password; // Delete password from user object
    res.status(200).json({ user, token }); // Send response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};