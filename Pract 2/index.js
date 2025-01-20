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
        res.status(400).send({ message: 'Item name is required' });
        return;
    }
    items.push(newItem.name);
    res.status(201).send({ message: 'Item added successfully', item: newItem.name });
});

app.listen(PORT, () => {
    console.log(`See Items at http://localhost:${PORT}/items`);
});