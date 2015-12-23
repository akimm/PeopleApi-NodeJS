var nodeCouchDB = require("node-couchdb");
var couch = new nodeCouchDB("localhost", 5984);

// even simplier, but you can't set host and port this way
var couch = require("node-couchdb");

// use memcached with "memcache" NPM package
var nodeCouchDB = require("node-couchdb");
var memcacheClient = require("memcache").Client(11211, "localhost");
memcacheClient.on("connect", function () {
	memcacheClient.invalidate = function () {};
	var couch = new nodeCouchDB("localhost", 5984, memcacheClient);
});

memcacheClient.connect();


exports.Insert = function (firstName, lastName, email){
  couch.insert("CityDB", {
	_id: "document_id",
	field: ["sample", "data", true]
}, function (err, resData) {
	if (err)
		return console.error(err);

	console.dir(resData)
});
}

exports.GetUId = function () {
  couch.uniqid(1, function (err, ids) { s
	if (err)
		return console.error(err);

	console.dir(ids);
});
}
