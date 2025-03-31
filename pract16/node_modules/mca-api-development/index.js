const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

app.use(express.json());

// In-memory user storage (use a database in production)
const users = [];

// Register route with role assignment
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    
    if (!['admin', 'user'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }
    
    const existingUser = users.find(user => user.username === username);
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(user => user.username === username);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    let token = req.headers['authorization'];
    
    if (!token) return res.status(401).json({ message: 'Access denied' });
    
    token = token.split(' ')[1];
    
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Middleware for role-based authorization
const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
};

// Protected route for all authenticated users
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Welcome, ${req.user.username}! This is a protected route.` });
});

// Admin-only route
app.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
    res.json({ message: `Hello Admin ${req.user.username}, you have admin access.` });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
