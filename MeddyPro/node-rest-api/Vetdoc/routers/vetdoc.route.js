const express = require('express');
const app = express();
const vetdocRoute = express.Router();
let VetdocModel = require('../model/Vetdoc');


vetdocRoute.route('/').get((req, res) => {
  VetdocModel.find((error, vetdoc) => {
    if (error) {
      return next(error)
    } else {
      res.json(vetdoc)
      console.log('Doctors retrieved!')
    }
  })
})


vetdocRoute.route('/create-vetdoc').post((req, res, next) => {
  VetdocModel.create(req.body, (err, vetdoc) => {
    if (err) {
      return next(err)
    } else {
      res.json(vetdoc)
      console.log('Doctor created!')
    }
  })
});


vetdocRoute.route('/fetch-vetdoc/:id').get((req, res) => {
  VetdocModel.findById(req.params.id, (err, vetdoc) => {
    if (err) {
      return next(err)
    } else {
      res.json(vetdoc)
      console.log('Doctors retrieved!')
    }
  })
})

vetdocRoute.route('/update-vetdoc/:id').put((req, res, next) => {
  VetdocModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, vetdoc) => {
    if (err) {
      return next(err);
    } else {
      res.json(vetdoc)
      console.log('Doctor updated!')
    }
  })
})

vetdocRoute.route('/delete-vetdoc/:id').delete((req, res, next) => {
  VetdocModel.findByIdAndRemove(req.params.id, (error, vetdoc) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: vetdoc
      })
      console.log('Doctor deleted!')
    }
  })
})

module.exports = vetdocRoute;
