/*=== Main Application ===*/
var express = require('express'),
  app = express(),
  path = require('path'),
  http = require('http'),
  //data = require('./routes/data'),
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

require("./db/db").once('open', function callback () {
	/*=== insert routes here ===*/
	require("./all.routes")(app);
});

http.createServer(app).listen(app.get("port"), function () {
  console.log("xTuple Contacts is running at localhost:", app.get("port"));
});
