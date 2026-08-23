const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello from GitHub Actions",
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Server is healthy",
    });
});

module.exports = app;