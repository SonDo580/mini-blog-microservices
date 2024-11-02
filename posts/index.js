const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };
  res.status(201).json(posts[id]);
});

const PORT = 4000;
app.listen(PORT, () => {
  `Server listening on port ${PORT}`;
});