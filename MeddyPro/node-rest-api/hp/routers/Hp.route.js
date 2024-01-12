const express = require('express');
const app = express();
const hpRoute = express.Router();
let HpModel = require('../model/Hp');


hpRoute.route('/').get((req, res) => {
  HpModel.find((error, hp) => {
    if (error) {
      return next(error)
    } else {
      res.json(hp)
      console.log('Hp retrieved!')
    }
  })
})


hpRoute.route('/create-hp').post((req, res, next) => {
  HpModel.create(req.body, (err, hp) => {
    if (err) {
      return next(err)
    } else {
      res.json(hp)
      console.log('Hp created!')
    }
  })
});


hpRoute.route('/fetch-hp/:id').get((req, res) => {
HpModel.findById(req.params.id, (err, hp) => {
    if (err) {
      return next(err)
    } else {
      res.json(hp)
      console.log('Hp retrieved!')
    }
  })
})


hpRoute.route('/update-hp/:id').put((req, res, next) => {
  HpModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, hp) => {
    if (err) {
      return next(err);
    } else {
      res.json(hp)
      console.log('Hp updated!')
    }
  })
})

hpRoute.route('/delete-hp/:id').delete((req, res, next) => {
  HpModel.findByIdAndRemove(req.params.id, (error, hp) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: hp
      })
      console.log('Hp deleted!')
    }
  })
})

module.exports = hpRoute;
