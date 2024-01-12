const express = require('express');
const app = express();
const vetmedRoute = express.Router();
let VetmedModel = require('../model/vetmed');


vetmedRoute.route('/').get((req, res) => {
  VetmedModel.find((error, vetmed) => {
    if (error) {
      return next(error)
    } else {
      res.json(vetmed)
      console.log('Meds retrieved!')
    }
  })
})


vetmedRoute.route('/create-vetmed').post((req, res, next) => {
  VetmedModel.create(req.body, (err, vetmed) => {
    if (err) {
      return next(err)
    } else {
      res.json(vetmed)
      console.log('Med created!')
    }
  })
});


vetmedRoute.route('/fetch-vetmed/:id').get((req, res) => {
  VetmedModel.findById(req.params.id, (err, vetmed) => {
    if (err) {
      return next(err)
    } else {
      res.json(vetmed)
      console.log('Med retrieved!')
    }
  })
})


vetmedRoute.route('/update-vetmed/:id').put((req, res, next) => {
  VetmedModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, vetmed) => {
    if (err) {
      return next(err);
    } else {
      res.json(vetmed)
      console.log('Med updated!')
    }
  })
})

vetmedRoute.route('/delete-vetmed/:id').delete((req, res, next) => {
  VetmedModel.findByIdAndRemove(req.params.id, (error, vetmed) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: vetmed
      })
      console.log('Med deleted!')
    }
  })
})

module.exports = vetmedRoute;
