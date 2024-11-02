const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json());

const commentsInPost = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsInPost[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  // check posts exists

  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsInPost[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsInPost[req.params.id] = comments;

  res.status(201).json(comments);
});

const PORT = 4001;
app.listen(PORT, () => {
  `Server listening on port ${PORT}`;
});
