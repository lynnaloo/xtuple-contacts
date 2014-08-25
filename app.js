/*=== Main Application ===*/
var express = require('express'),
  app = express(),
  path = require('path'),
  http = require('http'),
  bodyParser = require('body-parser'),
  args = process.argv.splice(2),
  Client = require('xtuple-rest-client');

app.locals.title = "xTuple Contacts App";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

// All routes here
require("./routes/Contacts.routes")(app);

http.createServer(app).listen(app.get("port"), function () {
  console.log("xTuple Contacts is running at localhost:", app.get("port"));
});
