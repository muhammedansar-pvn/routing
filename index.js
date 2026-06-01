const express = require("express");
const app = express();

app.use(express.json());

let users = [];


app.post("/users", (req, res) => {
  const user = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
  };

  users.push(user);
  res.json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});


app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user);
});


app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.username = req.body.username;
  }

  res.json(user);

app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
