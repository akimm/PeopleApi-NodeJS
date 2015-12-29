var sinon = require('sinon');
var expect = require('chai').expect;

var mongoose = require('mongoose');
var People = require('../../../app/lib/People');
var PersonModel = mongoose.model('Person');


describe('People - Unit tests', function() {
  it('#getAll returns list', sinon.test(function(done) {

    // ARRANGE
    // test setup
    var people = [
      {
        firstName: 'fname1',
        lastName: 'lname1',
        email: 'one@email.com'
      },
      {
        firstName: 'fname2',
        lastName: 'lname2',
        email: 'two@email.com'
      } ];

    // mocking MongoDB
    this.stub(PersonModel, 'find').yields(null, people);

    // ACT/ASSERT
    // calling the test case
    People.getAll(function(err, peopleReturned) {
      // asserting
      expect(err).to.be.null;
      expect(peopleReturned).to.eql([
        {
          firstName: 'fname1',
          lastName: 'lname1',
          email: 'one@email.com'
        },
        {
          firstName: 'fname2',
          lastName: 'lname2',
          email: 'two@email.com'
        } ]);
      done();
    });
  }));

  it('#getById returns person', sinon.test(function(done) {

    // ARRANGE
    // test setup
    var person =
      {
        firstName: 'fname1',
        lastName: 'lname1',
        email: 'one@email.com'
      };

    // mocking MongoDB
    this.stub(PersonModel, 'findById').yields(null, person);

    // ACT/ASSERT
    // calling the test case
    People.getById('567afceccaff7d9c39e1b7ef', function(err, person) {
      // asserting
      expect(err).to.be.null;
      expect(person).to.eql(
        {
          firstName: 'fname1',
          lastName: 'lname1',
          email: 'one@email.com'
        });
      done();
    });
  }));

  it('#getById Bad Id returns 400', sinon.test(function(done) {

    // ARRANGE

    // ACT/ASSERT
    // calling the test case
    People.getById('', function(err, person) {
      // asserting
      expect(err).to.not.null;
      expect(err.status).to.eql(400);
      expect(err.message).to.eql('Bad Request');
      done();
    });
  }));

  it('#getById Not Found returns 404', sinon.test(function(done) {

    // ARRANGE
    // test setup

    // mocking MongoDB
    this.stub(PersonModel, 'findById').yields(null, null);

    // ACT/ASSERT
    // calling the test case
    People.getById('567afceccaff7d9c39e1b7ef', function(err, person) {
      // asserting
      expect(err).to.not.null;
      expect(err.status).to.eql(404);
      expect(err.message).to.eql('Not Found');
      expect(person).to.be.null;
      done();
    });
  }));

});
