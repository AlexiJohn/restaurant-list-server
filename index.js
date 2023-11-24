// packages import
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
// enable CORS
app.use(cors());

// basic string route to prevent Glitch error
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// the route we're working with
app.get("/restaurants", (req, res) => {
    // replace with a custom URL as required
    const backendUrl = "https://nextjs-orpin-omega-98.vercel.app/api/restaurants";
    // return the data without modification
    axios.get(backendUrl).then(response => res.send(response.data));
});

// console text when app is running
app.listen(5000, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;