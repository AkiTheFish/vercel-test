import express from "express";

const application = express();
const port = 8080;

application.get("/", (req, res) => {
  res.render("main.ejs");
});

application.listen(port, () => {
  console.log(`succeeded connection to port: ${port}`);
});
