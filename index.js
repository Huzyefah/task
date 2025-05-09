const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello from root-level index.js on Vercel!");
});

module.exports = app;
