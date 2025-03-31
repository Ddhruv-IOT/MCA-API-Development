const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/users/:id', (req, res, next) => {
    const userId = req.params.id;
    if (isNaN(userId)) {
        const error = new Error("Invalid user ID");
        error.status = 400;
        return next(error);
    }
    res.json({ id: userId, name: "John Doe" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error"
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});