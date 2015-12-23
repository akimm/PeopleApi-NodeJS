var express = require('express');
var router = express.Router();

var peopleController = require('../controllers/peopleController.js');
var carsController = require('../controllers/carsController.js');


/* **************** PEOPLE ROUTES ********************* */
router.get('/people', peopleController.getAll);
router.get('/people/:personId', peopleController.getById);
router.post('/people', peopleController.createPerson);


/* ************** CARS ROUTES ************************* */
router.get('/people/:personId/cars', carsController.helloWorld);
router.get('/people/:personId/cars', carsController.helloWorld);



module.exports = router;
