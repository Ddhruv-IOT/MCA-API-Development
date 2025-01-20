const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
    res.status(200).send(items);
});

app.post('/addItems', (req, res) => {
    const newItem = req.body;
    if (!newItem.name){
        return res.status(400).send({ message: 'Item name is required' });
    }
    items.push(newItem.name);
    res.status(201).send({ message: 'Item added successfully', item: newItem.name });
});


// Always keep this at the end
app.use((req, res) => {
    res.status(404).send({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    // console.error(err.stack); // Log the full error stack for debugging

    if (err.statusCode === 400 || err.status === 400) { // Check statusCode OR status
        res.status(400).json({ error: err.message || 'Bad Request' }); // Send JSON with error message
    } else{
        next(err);
    }
});


app.listen(PORT, () => {
    console.log(`See Items at http://localhost:${PORT}/items`);
});