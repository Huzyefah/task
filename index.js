const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.send("Hello from Render-deployed Express server!");
});

// Export app as a Vercel handler
module.exports = (req, res) => {
  app(req, res);
};
