// Import required modules
const express = require("express");
const rateLimit = require("express-rate-limit");

// Initialize Express app
const app = express();
const PORT = 3000;

// Define a rate limit (e.g., 5 requests per minute per IP)
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  headers: true,
});

// Apply rate limiter to all requests
app.use(limiter);

// Sample route
app.get("/", (req, res) => {
  res.send("Welcome! You are within the rate limit.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
