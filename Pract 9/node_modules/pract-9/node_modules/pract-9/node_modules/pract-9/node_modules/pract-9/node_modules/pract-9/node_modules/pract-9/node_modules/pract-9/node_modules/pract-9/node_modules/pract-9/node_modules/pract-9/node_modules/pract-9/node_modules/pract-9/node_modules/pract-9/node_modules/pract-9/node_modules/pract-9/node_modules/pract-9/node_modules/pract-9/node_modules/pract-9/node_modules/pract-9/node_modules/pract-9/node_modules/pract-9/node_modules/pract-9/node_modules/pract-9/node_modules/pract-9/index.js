const express = require('express');
const app = express();
const PORT = 3000;

// Sample user data, generate 50 users
const users = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `User${i + 1}` }));

app.get('/users', (req, res) => {
    let { page = 1, limit = 10 } = req.query;
    
    page = parseInt(page);
    limit = parseInt(limit);

    const startIndex = (page - 1) * limit;
    const paginatedUsers = users.slice(startIndex, startIndex + limit);

    res.json({ total: users.length, page, limit, data: paginatedUsers });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
