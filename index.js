const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const allComments = [
  { comment: "Welcome to the postmaster!", fname: "Daniel" },
  { comment: "Hey man", fname: "Gordo" },
];
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/comments", (req, res) => {
  console.log(`get comments`);
  res.render("index", { allComments });
});

app.get("*", (req, res) => {
  res.send("I heard you but you're not making any sense");
});

app.listen(PORT, (data) => {
  console.log(`LISTENING at PORT ${PORT}`, data);
});
