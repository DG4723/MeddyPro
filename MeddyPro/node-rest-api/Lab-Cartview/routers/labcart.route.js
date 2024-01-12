const express = require('express');
const app = express();
const labcartRoute = express.Router();
let LabCartModel = require('../model/LabCart');


labcartRoute.route('/').get((req, res) => {
  LabCartModel.find((error, labcart) => {
    if (error) {
      return next(error)
    } else {
      res.json(labcart)
      console.log('labcarts retrieved!')
    }
  })
})


labcartRoute.route('/create-labcart').post((req, res, next) => {
  LabCartModel.create(req.body, (err, labcart) => {
    if (err) {
      return next(err)
    } else {
      res.json(labcart)
      console.log('labcart created!')
    }
  })
});


labcartRoute.route('/fetch-labcart/:id').get((req, res) => {
  LabCartModel.findById(req.params.id, (err, labcart) => {
    if (err) {
      return next(err)
    } else {
      res.json(labcart)
      console.log('labcart retrieved!')
    }
  })
})


labcartRoute.route('/update-labcart/:id').put((req, res, next) => {
  LabCartModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, labcart) => {
    if (err) {
      return next(err);
    } else {
      res.json(labcart)
      console.log('labcart updated!')
    }
  })
})

labcartRoute.route('/delete-labcart/:id').delete((req, res, next) => {
  LabCartModel.findByIdAndRemove(req.params.id, (error, labcart) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: labcart
      })
      console.log('labcart deleted!')
    }
  })
})

module.exports = labcartRoute;
