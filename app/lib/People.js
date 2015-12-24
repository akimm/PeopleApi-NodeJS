/* Required Modules */
var mongoose = require('mongoose');
var personSchema = require('../models/personSchema.js');
var mongoDB = require('../DBAccess/mongoDB.js');

exports.getAll = function(callback) {
  personSchema.find(callback);
};

exports.getById = function(personId, callback) {
  if (!personId || personId <= 0) {
    var err = new Error('Bad Request');
    err.status = 400;
    callback(err, {});
  }
  else {
    personSchema.findById(personId, callback);
  }
};

exports.createPerson = function(personData, callback) {
  var personToCreate = new personSchema(personData);
  personToCreate._id = mongoose.Types.ObjectId();
  personToCreate.save(callback);
};
