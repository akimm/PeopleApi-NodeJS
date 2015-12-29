/* Required Modules */
var mongoose = require('mongoose');
var personSchema = require('../models/personSchema.js');
var mongoDB = require('../DBAccess/mongoDB.js');

exports.getAll = function(callback) {
  personSchema.find(callback);
};

exports.getById = function(personId, callback) {
  if (!personId || personId.trim().length == 0) {
    console.log('Bad Person Id');
    var err = new Error('Bad Request');
    err.status = 400;
    callback(err, {});
  }
  else {
    personSchema.findById(personId, function(err, person) {
      if (!person) {
        var error = new Error('Not Found');
        error.status = 404;
        callback(error, null);
      }
      else {
        callback(err, person);
      }
    });
  }
};

exports.createPerson = function(personData, callback) {
  var personToCreate = new personSchema(personData);
  personToCreate._id = mongoose.Types.ObjectId();
  personToCreate.save(callback);
};
