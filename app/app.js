//Required modules
var express = require('express');
var peopleController = require('./controllers/peopleController.js');
var bodyParser = require('body-parser');
var routes = require('./routes/index.js');
var http = require('http');
var errorHandling = require('./errorHandler.js');

//Local Variables
var app = express();
var logRequests = true;

//CORS - Allow all callers Until it's hosted on defined domains
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Request/Response error handling
app.use(errorHandling.notFoundErrorHandler);
app.use(errorHandling.errorHandler)

// Body parsing of requests
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

app.use('/', routes);

// remove
app.get('/collections', function (req, res) {
  var coll = db.listCollections;
  res.json(coll);
});

var server = http.createServer(app);
server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});

module.exports = app;

/*
app.listen(3000, function() {
  console.log('listening on http://localhost:3000');
});
*/
