import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import morgan from 'morgan';
import helmet from 'helmet';
import { fileURLToPath } from 'url';

dotenv.config();

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);  // Get the filename of the current module
const __dirname = path.dirname(__filename);  // Get the directory name of the current module
dotenv.config()
const app = express();
const { MONGO_URL, PORT } = process.env;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '30mb', extended: true }));    // parse application/json
app.use(morgan('common'));  // HTTP request logger middleware for node.js
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));  // Set the static folder

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

/* DATABASE */
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
//     next();
// });

// // Routes
// app.use('/api/users', userRoutes);

// // Error handling
// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     // res.status(500).send('Something went wrong');
//     res.sendFile(path.join(__dirname, '../../public/Errors/500.html'))
// });

// app.use((req, res, next) => {
//     res.status(404).send('Not found');
// });

// app.use((req, res, next) => {
//     res.status(403).send('Forbidden');
// });

// app.use((req, res, next) => {
//     res.status(401).send('Unauthorized');
// });

// app.use((req, res, next) => {
//     res.status(400).send('Bad request');
// });

// app.use((req, res, next) => {
//     res.status(204).send('No content');
// });

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${PORT}/`);
// });