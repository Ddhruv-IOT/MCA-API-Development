const express = require("express");
const app = express();
const PORT = 3000;

// Sample User Data
const users = [
    { eID: 101, name: "Alice Johnson", salary: 50000 },
    { eID: 102, name: "John Doe", salary: 60000 },
    { eID: 103, name: "Emily Clark", salary: 55000 },
    { eID: 104, name: "Bob Smith", salary: 75000 },
    { eID: 105, name: "Jane Doe", salary: 60000 },
];

app.get("/users", (req, res) => {
    let { eID, name, salary, sort } = req.query;
    let filteredUsers = [...users];

    // Filter by eID (exact match)
    if (eID) {
        filteredUsers = filteredUsers.filter(user => user.eID === parseInt(eID));
    }

    // Filter by Name (case-insensitive partial match)
    if (name) {
        filteredUsers = filteredUsers.filter(user =>
            user.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    // Filter by Salary (exact match)
    if (salary) {
        filteredUsers = filteredUsers.filter(user => user.salary === parseInt(salary));
    }

    // Sorting by Salary (asc/dsc)
    if (sort === "asc") {
        filteredUsers.sort((a, b) => a.salary - b.salary);
    } else if (sort === "dsc") {
        filteredUsers.sort((a, b) => b.salary - a.salary);
    }

    res.json(filteredUsers);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
