// Example server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Handling requests to the root path '/'
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.listen(8000, () => {
  console.log(Server is running on port 8000.);
});