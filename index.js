const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.send("Hello from Render-deployed Express server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
