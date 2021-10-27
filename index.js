// implement your API here
const express = require("express");
const server = express();
const port = 8000;
const data = require("./data/db");


server.get("/", (req, res) => {
  res.send("Hello Express");
});

server.get("/users", (req, res) => {
  data.find().then(users => res.status(200).json(users))
  .catch(() => {
    res.status(500).send("something broke!")
  })
})

server.listen(port, () => {
  console.log(`API running on port ${port}`);
});
