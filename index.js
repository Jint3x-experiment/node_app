const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

app.get("/api/header", (req, res) => res.json("My backend sucks!"));

app.listen(process.env.port || 3000);