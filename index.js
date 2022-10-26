const express = require("express");
const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/myget", (req, res) => {
  console.log(req.body);

  res.send(req.body);
});

app.get("/mygetform", (req, res) => {
  res.render("getforms.ejs");
});

app.get("/mypostform", (req, res) => {
  res.render("postforms.ejs");
});

app.listen(4000, () => console.log("server is running at port 400"));
