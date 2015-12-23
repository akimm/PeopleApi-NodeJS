var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PersonModel = new Schema({
    personId  : ObjectId,
    firstName : String,
    lastName  : String,
    email     : String
});

/**
 * Methods
 */

PersonModel.methods.getById = function(personId, callback) {
  return this.db.model('Person').findById(personId, callback);
};

PersonModel.methods.getAll = function(callback) {
  return this.db.model('Person').find(callback);
};

mongoose.model('PersonModel', PersonModel);
