var express = require('express');

var peopleController = require('./controllers/peopleController.js');
var bodyParser = require('body-parser');
var routes = require('./routes/index.js');
var http = require('http');
var app = express();
var logRequests = true;


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
if (logRequests)
{
  var requestLogger = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };

  app.use(requestLogger);
}

console.log(app.settings.env);

app.use('/', routes);

app.get('/collections', function (req, res) {
  var coll = db.listCollections;
  res.json(coll);
});

var server   = http.createServer(app);
server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});

module.exports = app;

/*
app.listen(3000, function() {
  console.log('listening on http://localhost:3000');
});
*/
