const express = require("express");
const app = express();
const router = express.Router();

const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ extname: ".handlebars" }));
app.set("view engine", "handlebars");

const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", require("./controllers/burger_controller"));

app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
