// implement your API here
const express = require("express");
const server = express();
const port = 8000;

server.get("/", (req, res) => {
  res.send("Hello Express");
});

server.listen(port, () => {
  console.log(`API running on port ${port}`);
});
