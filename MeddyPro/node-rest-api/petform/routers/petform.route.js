const express = require('express');
const app = express();
const petformRoute = express.Router();
let PetformModel = require('../model/petform'); // Import the model


petformRoute.route('/').get((req, res) => {
 PetformModel.find((error, petform) => {
    if (error) {
      return next(error)
    } else {
      res.json(petform)
      console.log('petform retrieved!')
    }
  })
})


petformRoute.route('/create-petform').post((req, res, next) => {
 PetformModel.create(req.body, (err, petform) => {
    if (err) {
      return next(err)
    } else {
      res.json(petform)
      console.log('petform Added!')
    }
  })
});


petformRoute.route('/fetch-petform/:id').get((req, res) => {
 PetformgModel.findById(req.params.id, (err, petform) => {
    if (err) {
      return next(err)
    } else {
      res.json(petform)
      console.log('petform retrieved!')
    }
  })
})


petformRoute.route('/update-petform/:id').put((req, res, next) => {
  PetformModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, petform) => {
    if (err) {
      return next(err);
    } else {
      res.json(petform)
      console.log('petform updated!')
    }
  })
})

petformRoute.route('/delete-petform/:id').delete((req, res, next) => {
 PetformModel.findByIdAndRemove(req.params.id, (error, petform) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg:petform
      })
      console.log('petform deleted!')
    }
  })
})

module.exports = petformRoute;