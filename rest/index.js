const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/order", (req, res) => {
  res.send("GET order response");
});

app.post("/order", (req, res) => {
  const { item, qty } = req.body;
  res.send(`Item: ${item}, Qty: ${qty}`);
});

app.listen(8080, () => {
  console.log("Server is running on: http://localhost:8080");
});
