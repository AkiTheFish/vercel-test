import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const application = express();
const port = 8080;

application.set("view engine", "ejs");
application.set("views", path.join(__dirname, "views"));

application.get("/", (req, res) => {
  res.render("main.ejs");
});

application.listen(port, () => {
  console.log(`succeeded connection to port: ${port}`);
});
