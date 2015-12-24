/* Required Modules */
var mongoose = require('mongoose');
var carSchema = require('../models/carSchema.js');
var mongoDB = require('../DBAccess/mongoDB.js');

exports.getAll = function(callback) {
  carSchema.find(callback);
};

exports.getById = function(carId, callback) {
  if (!carId || carId <= 0) {
    var err = new Error('Bad Request');
    err.status = 400;
    callback(err, {});
  }
  else {
    carSchema.findById(carId, callback);
  }
};

exports.createCar = function(carData, callback) {
  var carToCreate = new carSchema(carData);
  carToCreate._id = mongoose.Types.ObjectId();
  carToCreate.save(callback);
};
