const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello0000");
});

module.exports = app;
