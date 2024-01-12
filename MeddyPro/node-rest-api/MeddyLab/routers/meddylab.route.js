const express = require('express');
const app = express();
const meddylabRoute = express.Router();
let MeddyLabModel = require('../model/meddylab');


meddylabRoute.route('/').get((req, res) => {
  MeddyLabModel.find((error, meddylab) => {
    if (error) {
      return next(error)
    } else {
      res.json(meddylab)
      console.log('Datas retrieved!')
    }
  })
})


meddylabRoute.route('/create-meddylab').post((req, res, next) => {
  MeddyLabModel.create(req.body, (err, meddylab) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddylab)
      console.log('Datas created!')
    }
  })
});


meddylabRoute.route('/fetch-meddylab/:id').get((req, res) => {
  MeddyLabModel.findById(req.params.id, (err, meddylab) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddylab)
      console.log('Datas retrieved!')
    }
  })
})


meddylabRoute.route('/update-meddylab/:id').put((req, res, next) => {
  MeddyLabModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, meddylab) => {
    if (err) {
      return next(err);
    } else {
      res.json(meddylab)
      console.log('Datas updated!')
    }
  })
})

meddylabRoute.route('/delete-meddylab/:id').delete((req, res, next) => {
  MeddyLabModel.findByIdAndRemove(req.params.id, (error, meddylab) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: meddylab
      })
      console.log('Datas deleted!')
    }
  })
})

module.exports = meddylabRoute;
