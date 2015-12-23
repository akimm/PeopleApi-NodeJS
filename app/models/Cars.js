var Schema = require('mongoose').Schema,
    ObjectId = Schema.ObjectId;

var Cars = Schema({
    _id  : ObjectId,
    firstName : String,
    lastName  : String,
    email     : String
});

Cars.methods.getAll = function(callback) {
  return this.db.model('People').find(callback);
};


module.exports = db.model('Cars', Cars);

/*
PersonModel.pre('save', function (next) {
  notify(this.get('email'));
  next();
});
*/
