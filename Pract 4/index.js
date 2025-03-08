const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = ["i1", "i2"];

app.get('/items', (req, res) => {
    res.status(200).send({data: items});
});

app.post('/addItems', (req, res) => {
    const newItem = req.body;
    if (!newItem.name){
        return res.status(400).send({ message: 'Item name is required' });
    }
    items.push(newItem.name);
    res.status(201).send({ message: 'Item added successfully', item: newItem.name });
});

app.get('/items/search', (req, res) => {
    const { name } = req.query; // destructuring
    if (!name) {
        return res.status(400).send({ error: 'Query parameter "name" is required' });
    }
    console.log(name);

    const filteredItems = items.filter(item => item.toLowerCase() === name.toLowerCase());
    
    if (filteredItems.length === 0) {
        return res.status(404).send({ message: 'No items found' });
    }

    res.send(filteredItems);
});


app.listen(PORT, () => {
    console.log(`See Items at http://localhost:${PORT}/items`);
});