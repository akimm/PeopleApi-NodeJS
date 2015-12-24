/* Mongo Connection */
var mongoose = require('mongoose');
var config = require('../_config');

var env = process.env.NODE_ENV || "development";

global.db = mongoose.connect(config.mongoURI[env]);

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('open', function(){
  console.log('connected to mongo -> Env: ' + env + ' Host:' + mongoose.connection.host + ' Port:' + mongoose.connection.port + ' Name:' + mongoose.connection.name);

  mongoose.connection.db.listCollections(function(error, names) {
    if (error) {
      console.log('error - ' + error);
      throw new Error(error);
    } else {
      names.map(function(cname) {
        console.log(cname.name);
      });
    }
  });
});
