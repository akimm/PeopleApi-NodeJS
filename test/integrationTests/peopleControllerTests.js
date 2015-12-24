process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../../app/app');
var Person = require("../../app/models/personSchema");

var should = chai.should();
chai.use(chaiHttp);


describe('People Controller - Integration', function() {

  Person.collection.drop();

  beforeEach(function(done){
    var newPerson = new Person({
      _id: mongoose.Types.ObjectId(),
      firstName: 'Bat',
      lastName: 'man',
      email: 'batman@gotham.com'
    });
    newPerson.save(function(err) {
      done();
    });
  });
  afterEach(function(done){
    Person.collection.drop();
    done();
  });

  it('All people returned on /people GET', function(done) {
    chai.request(server)
      .get('/people')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('firstName');
        res.body[0].should.have.property('lastName');
        res.body[0].should.have.property('email');
        res.body[0].firstName.should.equal('Bat');
        res.body[0].lastName.should.equal('man');
        res.body[0].email.should.equal('batman@gotham.com');
        done();
      });
  });

  it('Single person returned by id on /people/<id> GET', function(done) {
      var newPerson = new Person({
        _id: mongoose.Types.ObjectId(),
        firstName: 'Super',
        lastName: 'man',
        email: 'superman@smallville.com'
      });
      newPerson.save(function(err, data) {
        chai.request(server)
          .get('/people/'+data.id)
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('_id');
            res.body.should.have.property('firstName');
            res.body.should.have.property('lastName');
            res.body.should.have.property('email');
            res.body.firstName.should.equal('Super');
            res.body.lastName.should.equal('man');
            res.body.email.should.equal('superman@smallville.com');
            res.body._id.should.equal(data.id);
            done();
          });
      });
  });

  it('Single person added on /people POST', function(done) {
    chai.request(server)
      .post('/people')
      .send({'firstName': 'Green', 'lastName': 'Lantern', 'email': 'greenlantern@oa.com'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('firstName');
        res.body.SUCCESS.should.have.property('lastName');
        res.body.SUCCESS.should.have.property('email');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.firstName.should.equal('Green');
        res.body.SUCCESS.lastName.should.equal('Lantern');
        res.body.SUCCESS.email.should.equal('greenlantern@oa.com');
        done();
      });
  });
/*
  it('should update a SINGLE blob on /blob/<id> PUT', function(done) {
    chai.request(server)
      .get('/blobs')
      .end(function(err, res){
        chai.request(server)
          .put('/blob/'+res.body[0]._id)
          .send({'name': 'Spider'})
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('UPDATED');
            response.body.UPDATED.should.be.a('object');
            response.body.UPDATED.should.have.property('name');
            response.body.UPDATED.should.have.property('_id');
            response.body.UPDATED.name.should.equal('Spider');
            done();
        });
      });
  });
*/

/*
  it('should delete a SINGLE blob on /blob/<id> DELETE', function(done) {
    chai.request(server)
      .get('/blobs')
      .end(function(err, res){
        chai.request(server)
          .delete('/blob/'+res.body[0]._id)
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('REMOVED');
            response.body.REMOVED.should.be.a('object');
            response.body.REMOVED.should.have.property('name');
            response.body.REMOVED.should.have.property('_id');
            response.body.REMOVED.name.should.equal('Bat');
            done();
        });
      });
  });
*/

});
