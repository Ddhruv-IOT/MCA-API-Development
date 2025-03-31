require('dotenv').config();
const jwt = require('jsonwebtoken');
const readline = require('readline');

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
    throw new Error("JWT_SECRET is not defined in the .env file");
}

// Function to decode JWT
function decodeToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log("Decoded JWT Payload:", decoded);
    } catch (err) {
        console.error("Invalid JWT:", err.message);
    }
}

// Read JWT from user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the JWT token to decode: ", (token) => {
    decodeToken(token);
    rl.close();
});
