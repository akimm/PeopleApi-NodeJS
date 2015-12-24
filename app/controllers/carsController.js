var cars = require('../lib/cars.js');

exports.helloWorld = function(req, res, next)
{
  res.json('Hello World');
}

/* *********************** Get Methods  *************************/
exports.getAll = function(req, res, next) {
  cars.getAll(function(err, cars) {
    if (err) return next(err);
    res.json(cars);
  });
};
exports.getById = function(req, res) {
  cars.getById(req.params.carId , function(err, car) {
    if (err) return next(err);
    res.json(car);
  });
};

/* **************** Create Methods **************************/
exports.createCar = function(req, res, next){
    car.createCar(req.body, function(err, newCar){
      if (err){
        console.error(err);
      }
      res.json({'SUCCESS': newCar});
    });
};

/* **************** Update Methods ************************/

/* *************** Delete Methods *************************/
