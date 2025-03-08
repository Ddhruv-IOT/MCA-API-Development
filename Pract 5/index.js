const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
    res.status(200).send(items);
});

app.get('/items/:index', (req, res) => {
    const { index } = req.params;
    console.log(index);

    const item = items[index];
    if (!item) {
        return res.status(404).send({ message: 'Item not found' });
    }
    res.status(200).send(item);
});

app.post('/addItems', (req, res) => {
    const newItem = req.body;
    if (!newItem.name){
        return res.status(400).send({ message: 'Item name is required' });
    }
    items.push(newItem.name);
    res.status(201).send({ message: 'Item added successfully', newItem });
});

app.put('/items/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).send({ message: 'Item name is required' });
    }

    items[index] = name;
    res.send({ message: 'Item updated successfully', item: name });
});

app.delete('/items/:index', (req, res) => {
    const { index } = req.params;
    items.splice(index, 1);
    res.send({ message: 'Item deleted successfully' });
});

app.use((req, res) => {
    res.status(404).send({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`See Items at http://localhost:${PORT}/items`);
});