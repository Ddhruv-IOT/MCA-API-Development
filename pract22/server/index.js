const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/data", async (req, res) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate delay
        res.json({ message: "Hello from the async API!" });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
