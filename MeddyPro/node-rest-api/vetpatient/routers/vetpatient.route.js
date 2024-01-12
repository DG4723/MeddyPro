const express = require('express');
const app = express();
const vetpatientRoute = express.Router();
let vetpatientModel = require('../model/vetpatient');


vetpatientRoute.route('/').get((req, res) => {
  vetpatientModel.find((error, vetpatient) => {
    if (error) {
      return next(error)
    } else {
      res.json(vetpatient)
      console.log('Patients retrieved!')
    }
  })
})


vetpatientRoute.route('/create-vetpatient').post((req, res, next) => {
  vetpatientModel.create(req.body, (err, vetpatient) => {
    if (err) {
      return next(err)
    } else {
      res.json(vetpatient)
      console.log('Patient created!')
    }
  })
});


vetpatientRoute.route('/fetch-vetpatient/:id').get((req, res) => {
  vetpatientModel.findById(req.params.id, (err, vetpatient) => {
    if (err) {
      return next(err)
    } else {
      res.json(vetpatient)
      console.log('Patient retrieved!')
    }
  })
})


vetpatientRoute.route('/update-vetpatient/:id').put((req, res, next) => {
  vetpatientModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, vetpatient) => {
    if (err) {
      return next(err);
    } else {
      res.json(vetpatient)
      console.log('Patient updated!')
    }
  })
})

vetpatientRoute.route('/delete-vetpatient/:id').delete((req, res, next) => {
  vetpatientModel.findByIdAndRemove(req.params.id, (error, vetpatient) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: vetpatient
      })
      console.log('Patient deleted!')
    }
  })
})

module.exports = vetpatientRoute;
