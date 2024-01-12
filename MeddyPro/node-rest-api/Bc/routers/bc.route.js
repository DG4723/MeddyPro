const express = require('express');
const app = express();
const bcRoute = express.Router();
let BcModel = require('../model/Bc');


bcRoute.route('/').get((req, res) => {
  BcModel.find((error, bc) => {
    if (error) {
      return next(error)
    } else {
      res.json(bc)
      console.log('Bc retrieved!')
    }
  })
})


bcRoute.route('/create-bc').post((req, res, next) => {
  BcModel.create(req.body, (err, bc) => {
    if (err) {
      return next(err)
    } else {
      res.json(bc)
      console.log('Bc created!')
    }
  })
});


bcRoute.route('/fetch-bc/:id').get((req, res) => {
BcModel.findById(req.params.id, (err, bc) => {
    if (err) {
      return next(err)
    } else {
      res.json(bc)
      console.log('Bc retrieved!')
    }
  })
})


bcRoute.route('/update-bc/:id').put((req, res, next) => {
  BcModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, bc) => {
    if (err) {
      return next(err);
    } else {
      res.json(bc)
      console.log('Bc updated!')
    }
  })
})

bcRoute.route('/delete-bc/:id').delete((req, res, next) => {
  BcModel.findByIdAndRemove(req.params.id, (error, bc) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: bc
      })
      console.log('Bc deleted!')
    }
  })
})

module.exports = bcRoute;
