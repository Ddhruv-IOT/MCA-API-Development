const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greet', (req, res) => {
    res.status(200).send({ message: 'Hello, World!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/greet`);
});
