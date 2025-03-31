const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/time", (req, res) => {
    res.json({ time: new Date().toLocaleTimeString() });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
