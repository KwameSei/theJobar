import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Middleware to check if user is authenticated and has required role
export const verifyAuth = (requiredRoles) => {
  return (req, res, next) => {
    console.log('Auth middleware executed');
    try {
      // Get token from header
      let token = req.header('Authorization');

      // Check if token exists
      if (!token) {
        return res.status(403).json({ message: 'Authorization denied' });
      }

      // Verify token
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length).trimLeft();
      }

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified.user;

      const { role } = req.user;

      // Check if user has the required role
      if (requiredRoles.includes(role)) {
        next();
      } else {
        res.status(403).json({ message: 'Unauthorized' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
};
