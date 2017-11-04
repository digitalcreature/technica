var express = require("express")
var config = require("./config")
var app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "pug")

if (config.session.store === "redis") {
  var session = require("express-session");
  var RedisStore = require("connect-redis")(session);
  config.session.store = new RedisStore()
}

app.use(require("morgan")(config.morgan.format));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("express-session")(config.session));

app.get("/", function(req, res) {
  res.render("index", {})
})

app.listen(config.listen.port, config.listen.host)