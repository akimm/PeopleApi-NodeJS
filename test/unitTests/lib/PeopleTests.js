var sinon = require('sinon');
var expect = require('chai').expect;

var mongoose = require('mongoose');
var People = require('../../../app/lib/People');
var PersonModel = mongoose.model('Person');


describe('People - Unit tests', function() {
  it('#getAll', function(done) {

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
    sinon.stub(PersonModel, 'find').yields(null, people);

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

      // as our test is asynchronous, we have to tell mocha that it is finished
      done();
    });
  });
});
