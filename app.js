var express = require("express")
var config = require("./config")
var app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "pug")

app.use(require("morgan")(config.morgan.format));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("express-session")(config.session));

app.get("/", function(req, res) {
  res.render("index", {})
})

app.listen(config.listen.port, config.listen.host)