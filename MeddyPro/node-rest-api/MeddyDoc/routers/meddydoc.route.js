const express = require('express');
const app = express();
const meddydocRoute = express.Router();
let MeddyDocModel = require('../model/MeddyDoc');


meddydocRoute.route('/').get((req, res) => {
  MeddyDocModel.find((error, meddydoc) => {
    if (error) {
      return next(error)
    } else {
      res.json(meddydoc)
      console.log('Doctors retrieved!')
    }
  })
})


meddydocRoute.route('/create-meddydoc').post((req, res, next) => {
  MeddyDocModel.create(req.body, (err, meddydoc) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddydoc)
      console.log('Doctor created!')
    }
  })
});


meddydocRoute.route('/fetch-meddydoc/:id').get((req, res) => {
  MeddyDocModel.findById(req.params.id, (err, meddydoc) => {
    if (err) {
      return next(err)
    } else {
      res.json(meddydoc)
      console.log('Doctor retrieved!')
    }
  })
})


meddydocRoute.route('/update-meddydoc/:id').put((req, res, next) => {
  MeddyDocModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, meddydoc) => {
    if (err) {
      return next(err);
    } else {
      res.json(meddydoc)
      console.log('Doctor updated!')
    }
  })
})

meddydocRoute.route('/delete-meddydoc/:id').delete((req, res, next) => {
  MeddyDocModel.findByIdAndRemove(req.params.id, (error, meddydoc) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: meddydoc
      })
      console.log('Doctor deleted!')
    }
  })
})

module.exports = meddydocRoute;
