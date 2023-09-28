const users = require('./db')

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! Node.js");
});

app.get('/users', (req, res) => {
    res.json(users);
  })

  app.listen(port, () => {
    console.log("Starting node.js at port " + port);
  });
  