const express = require('express');
const app = express();
const docregRoute = express.Router();
let DocregModel = require('../model/docreg'); // Import the model


docregRoute.route('/').get((req, res) => {
 DocregModel.find((error, docreg) => {
    if (error) {
      return next(error)
    } else {
      res.json(docreg)
      console.log('docreg retrieved!')
    }
  })
})


docregRoute.route('/create-docreg').post((req, res, next) => {
 DocregModel.create(req.body, (err, docreg) => {
    if (err) {
      return next(err)
    } else {
      res.json(docreg)
      console.log('docreg Added!')
    }
  })
});


docregRoute.route('/fetch-docreg/:id').get((req, res) => {
  DocregModel.findById(req.params.id, (err, docreg) => {
    if (err) {
      return next(err)
    } else {
      res.json(docreg)
      console.log('docreg retrieved!')
    }
  })
})


docregRoute.route('/update-docreg/:id').put((req, res, next) => {
  DocregModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, docreg) => {
    if (err) {
      return next(err);
    } else {
      res.json(docreg)
      console.log('docreg updated!')
    }
  })
})

docregRoute.route('/delete-docreg/:id').delete((req, res, next) => {
 DocregModel.findByIdAndRemove(req.params.id, (error, docreg) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg:docreg
      })
      console.log('docreg deleted!')
    }
  })
})

docregRoute.route('/total-count').get((req, res, next) => {
  DocregModel.countDocuments({}, (err, count) => {
    if (err) {
      return next(err);
    } else {
      res.json(count);
      console.log('Total count retrieved!');
    }
  });
});

docregRoute.route('/check-user-credentials').post((req, res, next) => {
  const { phoneNumber } = req.body;

  DocregModel.findOne({ phoneNumber }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      if (user) {
        // User found, credentials match
        res.json({ success: true });
        console.log('User credentials match');
      } else {
        // User not found, credentials don't match
        res.json({ success: false });
        console.log('User credentials do not match');
      }
    }
  });
});

module.exports = docregRoute;