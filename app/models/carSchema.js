var Schema = require('mongoose').Schema,
    ObjectId = Schema.ObjectId;

var Cars = Schema({
    _id  : ObjectId,
    make : String,
    model  : String,
    year     : Number
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
