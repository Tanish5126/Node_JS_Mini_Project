const express = require("express");
const fs = require("fs");
const path = require("path");

const visitCounter = require("./middleware/visitCounter");

const app = express();
const PORT = 5000;

app.use(visitCounter);

app.get("/home", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Home page"
    });
});

app.get("/about", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the About page"
    });
});

app.get("/contact", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Contact page"
    });
});

app.get("/visits", (req, res) => {

    const filePath = path.join(__dirname, "visits.json");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Unable to read visits"
            });
        }

        res.json({
            success: true,
            data: JSON.parse(data)
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});