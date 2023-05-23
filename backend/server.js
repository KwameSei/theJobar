const express = require('express');

// Routes
const userRoutes = require('./routes/user');

const app = express();

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
    next();
});

// Routes
app.use('/api/users', userRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something went wrong');
});

app.use((req, res, next) => {
    res.status(404).send('Not found');
});

app.use((req, res, next) => {
    res.status(403).send('Forbidden');
});

app.use((req, res, next) => {
    res.status(401).send('Unauthorized');
});

app.use((req, res, next) => {
    res.status(400).send('Bad request');
});

app.use((req, res, next) => {
    res.status(204).send('No content');
});

app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});