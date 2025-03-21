const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to log activity
const activityLogger = (req, res, next) => {
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`;
    console.log(logMessage);
    fs.appendFileSync('server.log', logMessage + '\n');
    next();
};

// Middleware to log activity & Intercept requests
app.use(activityLogger);

app.get('/endpoint1', (req, res) => {
    res.send('You accessed endpoint 1');
});

app.get('/endpoint2', (req, res) => {
    res.send('You accessed endpoint 2');
});

// Handle invalid requests
app.use((req, res) => {
    const logMessage = `[${new Date().toISOString()}] ❌ Invalid request: ${req.method} ${req.originalUrl}`;
    console.log(logMessage);
    fs.appendFileSync('server.log', logMessage + '\n');
    res.status(404).send('Endpoint not found');
});

app.listen(PORT, () => {
    const logMessage = `[${new Date().toISOString()}] ✅ Server started at http://localhost:${PORT}`;
    console.log(logMessage);
    fs.appendFileSync('server.log', logMessage + '\n');
});
