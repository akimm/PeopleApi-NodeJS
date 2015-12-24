# PeopleApi-NodeJS
People API in Node JS


## Pre Requisites
Node JS
- Download and install from https://nodejs.org/

MongoDB
- Download and install from. Follow any of there documentation to fit your needs i.e. if you are on windows and want to run as a service.
- For Defaults Mongo DB should be running on port 27017 of localhost.  If it's elsewhere modify the \_config.js file to point it to the correct location

Global Modules
- npm install -g mocha
- npm install -g istanbul
- npm install -g apidoc

Project dependencies
- From command line in the project root folder run the following:
  - npm install (ignore any errors from mongo installation)

## Dependencies
##### Runtime dependencies
- Express - used for routing and other http methods
  - npm install express --save

- Body Parser - used for parsing out information passed on the body to api calls
  - npm install body-parser --save

- Mongoose - used for MongoDB access
  - npm install mongoose --save

##### Dev Dependencies
- Mocha - Used for unit and integration testing
  - npm install -g mocha

- Chai - Used for expectations on unit and integration testing
  - npm install chai chai-http --save-dev

- Sinon - Used for mocking during unit testing
  - npm install sinon --save-dev

- Istanbul - Used for generating code coverage
  - npm install -g istanbul

- APIDoc - Used for api documentation
  - npm install -g apidoc

##### Future Dep For Sandbox
- Couch DB -
  - npm install node-couchdb --save
- Memcache
  - npm install memcache --save


## Starting the api
From the app folder run the following command: node app.js

## Running / The Api Methods
From Postman or other api caller:


## Tests

To run all unit and integration tests run the following from a command line:
mocha --recursive

To run/create a code coverage report run the following from a command line in the root folder:
istanbul cover node_modules/mocha/bin/\_mocha -- --recursive (non windows no need for the path in front of \_mocha)
istanbul cover test.js Where test.js is your file containg tests to get code coverage from.

## TODOS
Add in mssql path
Add Setting To switch from data source Types
Get app settings from modules that need them
 - app/lib/people.js

error handling on api calls
Security cookie parsing
provide paging mechanism for get all api calls.
Error Logging
Don't remove data during Tests
