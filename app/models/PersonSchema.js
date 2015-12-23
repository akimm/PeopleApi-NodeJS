var mongoose = require("mongoose");

var personSchema = mongoose.Schema({
    _id  : mongoose.Schema.ObjectId,
    firstName : String,
    lastName  : String,
    email     : String
}, {strict: true});

personSchema.static('getAll', function(callback) {
  return mongoose.model('People').find(callback);
});

module.exports =  mongoose.model('Person', personSchema, 'Person');

/*
module.exports = {
  peopleModel: peopleExport
}*/
