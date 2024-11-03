const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const endpoints = ["http:localhost:4000/events", "http:localhost:4001/events"];

app.post("/events", (req, res) => {
  const event = req.body;

  endpoints.forEach((endpoint) => {
    axios.post(endpoint, event).catch((err) => {
      console.log(err.message);
    });
  });

  res.send({});
});

const PORT = 4005;
app.listen(PORT, () => {
  `Server listening on port ${PORT}`;
});
