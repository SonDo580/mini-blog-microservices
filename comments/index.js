const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const commentsInPost = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsInPost[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  // TODO: check if post exists

  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsInPost[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsInPost[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { id: commentId, content, postId: req.params.id },
  });

  res.status(201).json(comments);
});

app.post("/events", (req, res) => {
  console.log("event", req.body);
  res.send({});
});

const PORT = 4001;
app.listen(PORT, () => {
  `Server listening on port ${PORT}`;
});
