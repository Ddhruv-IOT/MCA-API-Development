require('dotenv').config();
const jwt = require('jsonwebtoken');

// Getting Started: Generating JWT Token using .env Configuration

// Load environment variables from .env file
const SECRET_KEY = process.env.JWT_SECRET;
const ISSUER = process.env.JWT_ISSUER || 'my-app';
const EXPIRATION = process.env.EXPIRATION ||'1d';

if (!SECRET_KEY) {
    throw new Error("JWT_SECRET is not defined in the .env file");
}

// Function to generate JWT Token
function generateToken(payload) {
    const options = {
        issuer: ISSUER,
        expiresIn: EXPIRATION,
    };
    
    return jwt.sign(payload, SECRET_KEY, options);
}

// Example usage
const payload = { userId: 123, role: 'admin' };
const token = generateToken(payload);
console.log("Generated JWT Token:", token);
