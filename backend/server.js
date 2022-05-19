// import express
const express = require("express");
const app = express();

// get .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000
const { PORT = 4000, MONGODB_URL } = process.env;



// ROUTES
// create a test route

app.get("/", (req, res) => {
    res.send("hello Team welcome to our server");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));