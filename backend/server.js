const express = require('express');

// Routes
const userRoutes = require('./routes/user');

const app = express();

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRoutes);


app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});