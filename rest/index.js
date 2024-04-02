const express = require("express");
const app = express();

app.get("/order", (req, res) => {
  res.send("GET order response");
});

app.post("/order", (req, res) => {
  res.send("POST order response");
});


app.listen(8080, () => {
  console.log("Server is running on: http://localhost:8080");
});
