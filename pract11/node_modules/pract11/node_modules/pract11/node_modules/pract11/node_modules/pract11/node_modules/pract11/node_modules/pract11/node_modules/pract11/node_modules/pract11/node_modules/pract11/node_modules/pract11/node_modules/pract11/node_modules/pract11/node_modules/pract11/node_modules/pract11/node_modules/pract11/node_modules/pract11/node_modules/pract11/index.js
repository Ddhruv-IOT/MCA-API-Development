const express = require('express');
const app = express();
const port = 3000;

// make 50 users
const users = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `User${i + 1}` }));

const v1Router = express.Router()
const v2Router = express.Router()

v1Router.get('/users', (req, res) => {
    res.json(users);
    });

v2Router.get('/users', (req, res) => {
    const updatedUsers = users.map(user => ({
        ...user, // Create a new object with all properties of user
        email: `${user.name}@user.com` // Add or modify the email property
    }));
    res.json(updatedUsers);
});

app.use('/v1', v1Router);
app.use('/v2', v2Router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});