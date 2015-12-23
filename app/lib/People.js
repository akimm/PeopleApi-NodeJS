/* Required Modules */
var mongoose = require('mongoose');
var MyPerson = require('../models/PersonSchema.js');
var config = require('../_config');


/* Local Variables */
var MyPersonDB = new MyPerson();

exports.getAll = function(callback) {
  MyPerson.find(callback);
};

exports.getById = function(personId, callback) {
  var text = '';
  if (!personId || personId <= 0) {
    err = 'Notfound';
    text = 'Invalid PersonId';
    callback(error, text);
  }
  else{
    text = 'Hello Person ' + personId;
    MyPerson.findById(personId, callback);
  }
};

exports.createPerson = function(personData, callback) {
  var personToCreate = new MyPerson(personData);
  personToCreate._id = mongoose.Types.ObjectId();
  personToCreate.save(callback);
};

/* Mongo Connection */
var uri = 'mongodb://localhost:27017/CityDB';

//global.db = mongoose.connect(config.mongoURI[app.settings.env]);
global.db = mongoose.connect(uri);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('open', function(){
  console.log('connected to mongo -> Host:' + MyPerson.db.host + ' Port:' + MyPerson.db.port + ' Name:' + MyPerson.db.name);

  mongoose.connection.db.listCollections(function(error, names) {
    if (error) {
      console.log('error');
      throw new Error(error);
    } else {
      names.map(function(cname) {
        console.log(cname.name);
      });
    }
  });


});







/*
PersonModel.pre('save', function (next) {
  notify(this.get('email'));
  next();
});
*/
