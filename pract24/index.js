const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.post('/api/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: "Invalid input" });
    }
    res.json({ result: a + b });
});

module.exports = app; // Export the app for testing
