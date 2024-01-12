const express = require('express');
const app = express();
const mriRoute = express.Router();
let MriModel = require('../model/Mri');


mriRoute.route('/').get((req, res) => {
  MriModel.find((error, mri) => {
    if (error) {
      return next(error)
    } else {
      res.json(mri)
      console.log('cart retrieved!')
    }
  })
})


mriRoute.route('/create-mri').post((req, res, next) => {
  MriModel.create(req.body, (err, mri) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddydoc)
      console.log('Doctor created!')
    }
  })
});


mriRoute.route('/fetch-mri/:id').get((req, res) => {
  MriModel.findById(req.params.id, (err, mri) => {
    if (err) {
      return next(err)
    } else {
      res.json(mri)
      console.log('cart retrieved!')
    }
  })
})


mriRoute.route('/update-mri/:id').put((req, res, next) => {
  MriModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, mri) => {
    if (err) {
      return next(err);
    } else {
      res.json(mri)
      console.log('cart updated!')
    }
  })
})

mriRoute.route('/delete-mri/:id').delete((req, res, next) => {
  MriModel.findByIdAndRemove(req.params.id, (error, mri) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: meddydoc
      })
      console.log('cart deleted!')
    }
  })
})

module.exports = mriRoute;
