const express = require('express');
const app = express();
const meddypharmaRoute = express.Router();
let MeddypharmaModel = require('../model/Meddypharma');


meddypharmaRoute.route('/').get((req, res) => {
  MeddypharmaModel.find((error, meddypharma) => {
    if (error) {
      return next(error)
    } else {
      res.json(meddypharma)
      console.log('Meddypharma retrieved!')
    }
  })
})


meddypharmaRoute.route('/create-meddypharma').post((req, res, next) => {
  MeddypharmaModel.create(req.body, (err, meddypharma) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddypharma)
      console.log('Meddypharma created!')
    }
  })
});


meddypharmaRoute.route('/fetch-meddypharma/:id').get((req, res) => {
MeddypharmaModel.findById(req.params.id, (err, meddypharma) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddypharma)
      console.log('Meddypharma retrieved!')
    }
  })
})


meddypharmaRoute.route('/update-meddypharma/:id').put((req, res, next) => {
  MeddypharmaModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, meddypharma) => {
    if (err) {
      return next(err);
    } else {
      res.json(meddypharma)
      console.log('Meddypharma updated!')
    }
  })
})

meddypharmaRoute.route('/delete-meddypharma/:id').delete((req, res, next) => {
  MeddypharmaModel.findByIdAndRemove(req.params.id, (error, meddypharma) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: meddypharma
      })
      console.log('Meddypharma deleted!')
    }
  })
})

module.exports = meddypharmaRoute;
