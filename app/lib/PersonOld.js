/* People.js*/

var PersonOld = function (data) {
    this.data = data;
}

PersonOld.prototype.data = {}


PersonOld.getById = function (id, callback) {
    db.get('people', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new User(data));
    });
}

module.exports = PersonOld;
