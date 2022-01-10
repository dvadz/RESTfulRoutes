const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const allComments = [
  { id: uuidv4(), comment: "That was so funny lol!", fname: "Daniel" },
  { id: uuidv4(), comment: "What happened? Did I miss something?", fname: "Gordo" },
];
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/comments", (req, res) => {
  console.log(`get comments`);
  res.render("index", { allComments });
});

app.get("/comments/new", (req, res) => {
  res.render("new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const retrievedComment = allComments.find((comment) => {
    return comment.id === id;
  });
  res.render("details", { comment: retrievedComment });
});

app.post("/comments", (req, res) => {
  const { comment, fname } = req.body;
  allComments.push({ id: uuidv4(), comment, fname });
  console.log(allComments);
  res.redirect("/comments");
});

app.get("*", (req, res) => {
  res.send("I heard you but you're not making any sense");
});

app.listen(PORT, (data) => {
  console.log(`LISTENING at PORT ${PORT}`, data);
});
