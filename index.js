const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())

app.get("/", (req, res) => {

    for (let i = 0; i < 100000000; i++) {
        console.log(i);
    }

    return res.send("Hello world!")
});
app.get("/api/header", (req, res) => res.json("My backend sucks!"));

app.listen(process.env.port || 3000);