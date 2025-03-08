const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());

let items = ["itemA", "itemB", "itemC", "itemD", "itemE"];

app.get('/items', (req, res) => {
    res.status(200).send(items);
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


app.listen(PORT, () => {
    console.log(`See Items at http://localhost:${PORT}/items`);
});