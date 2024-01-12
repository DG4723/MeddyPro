const express = require('express');
const app = express();
const meddypatientRoute = express.Router();
let MeddyPatientModel = require('../model/MeddyPatient');


meddypatientRoute.route('/').get((req, res) => {
  MeddyPatientModel.find((error, meddypatient) => {
    if (error) {
      return next(error)
    } else {
      res.json(meddypatient)
      console.log('Patients retrieved!')
    }
  })
})


meddypatientRoute.route('/create-meddypatient').post((req, res, next) => {
  MeddyPatientModel.create(req.body, (err, meddypatient) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddypatient)
      console.log('Patient created!')
    }
  })
});


meddypatientRoute.route('/fetch-meddypatient/:id').get((req, res) => {
  MeddyPatientModel.findById(req.params.id, (err, meddypatient) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddypatient)
      console.log('Patient retrieved!')
    }
  })
})


meddypatientRoute.route('/update-meddypatient/:id').put((req, res, next) => {
  MeddyPatientModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, meddypatient) => {
    if (err) {
      return next(err);
    } else {
      res.json(meddypatient)
      console.log('Patient updated!')
    }
  })
})

meddypatientRoute.route('/delete-meddypatient/:id').delete((req, res, next) => {
  MeddyPatientModel.findByIdAndRemove(req.params.id, (error, meddypatient) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: meddypatient
      })
      console.log('Patient deleted!')
    }
  })
})

module.exports = meddypatientRoute;
