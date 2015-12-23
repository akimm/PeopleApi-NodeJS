var people = require('../lib/People.js');

/* *********************** Get Methods  *************************/
exports.getAll = function(req, res, next) {
  people.getAll(function(err, people) {
    if (err) return next(err);
    res.json(people);
  });
};
exports.getById = function(req, res) {
  people.getById(req.params.personId , function(err, people) {
    if (err) return next(err);
    res.json(people);
  });
};

/* **************** Create Methods **************************/
exports.createPerson = function(req, res, next){
    people.createPerson(req.body, function(err, newPerson){
      if (err){
        console.error(err);
      }
      res.json({'SUCCESS': newPerson});
    });
};

/* **************** Update Methods ************************/

/* *************** Delete Methods *************************/


/*
exports.create = function(req, res, next) {
  model.create({ name: 'inserting ' + Date.now() }, function(err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
};

exports.update = function(req, res, next) {
  model.create({ name: 'updating ' + Date.now() }, function(err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
};
*/

/*var express = require('express');
var app = express();
var errorHandling = require('ErrorHandler.js');

var logRequests = true;

if (logRequests)
{
  var requestLogger = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };

  app.use(requestLogger);
}

app.use(errorHandling.errorHandler);

// Get List Of people
app.get('/people', function (req, res) {
var responseText = 'Returns a list of people';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.json(responseText);

});

// Get a Person by personId
app.get('/people/:personId', function (req, res, next) {
  // if the person ID is 0, skip to the next route
  if (req.params.personId == 0) {
    next('route');
  }
  else {
    next();
  }
}, function (req, res, next) {
  // render a regular page
  res.json('regular person');
});

// handler for the /user/:id path, which renders a special page
app.get('/people/:personId', function (req, res, next) {
  res.status(400).send('Invalid person Id');
});


app.post('/people', function (req, res) {
  res.json('This will create a person');
});

app.put('/people', function (req, res) {
  res.json('This will update a person');
});

app.delete('/people', function (req, res) {
  res.json('This will update a person');
});

var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;

console.log('Example app listening at http://%s:%s', host, port);
});
*/
