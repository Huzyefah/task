const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello from Vercel-deployed Express server!");
});
module.exports = (req, res) => {
  app(req, res);
};
