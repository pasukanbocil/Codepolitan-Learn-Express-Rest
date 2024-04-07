const path = require("path");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const methodOvveride = require("method-override");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOvveride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuidv4(),
    username: "Alice",
    text: "Sometimes I feel like I'm the only one who doesn't know what's going on.",
  },
  {
    id: uuidv4(),
    username: "Bob",
    text: "I'm not sure what's going on either, but I'm just here for the free food.",
  },
  {
    id: uuidv4(),
    username: "Charlie",
    text: "I'm just here to see what happens next.",
  },
  {
    id: uuidv4(),
    username: "David",
    text: "I'm just here to see what happens next.",
  },
  {
    id: uuidv4(),
    username: "Eve",
    text: "I'm just here to see what happens next.",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/create", (req, res) => {
  res.render("comments/create");
});

app.post("/comments", (req, res) => {
  const { username, text } = req.body;
  comments.push({ username, text, id: uuidv4() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.text;
  const foundComment = comments.find((c) => c.id == id);
  foundComment.text = newComment;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/order", (req, res) => {
  res.send("Get Order Response");
});

app.post("/order", (req, res) => {
  res.send("Post Order Response");
});

app.listen(8080, () => {
  console.log("Server is running on: http://localhost:8080");
});
