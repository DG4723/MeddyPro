const express = require("express");

var router = express.Router();

const mongoose = require("mongoose");

const Security = mongoose.model("Security");

router.get("/", (req, res) => {

  res.render("security/addOrEdit", {

    viewTitle: "Insert Security Details"

  });

});

router.post("/", (req, res) => {

  if (req.body._id == "") {

    insertRecord(req, res);

  } else {

    updateRecord(req, res);

  }

});



function insertRecord(req, res) {

  var security = new Security();

  security.Date = req.body.Date;

  security.Open = req.body.Open;

  security.High= req.body.High;

  security.Low= req.body.Low;

  security.Close = req.body.Close;

  security.save((err, doc) => {

    if (!err) {

      res.redirect("security/list");

    } else {

      console.log("Error during insert: " + err);

    }

  });

}



function updateRecord(req, res) {

  Security.findOneAndUpdate(

    { _id: req.body._id },

    req.body,

    { new: true },

    (err, doc) => {

      if (!err) {

        res.redirect("security/list");

      } else {

        console.log("Error during update: " + err);

      }

    }

  );

}



router.get("/list", (req, res) => {

  Security.find((err, docs) => {

    if (!err) {

      res.render("security/list", {

        list: docs

      });

    } else {

      console.log("Error in retrieval: " + err);

    }

  });

});



router.get("/:id", (req, res) => {

  Security.findById(req.params.id, (err, doc) => {

    if (!err) {

      res.render("security/addOrEdit", {

        viewTitle: "Update Details",

        security : doc

      });

      console.log(doc);

    }

  });

});



router.get("/delete/:id", (req, res) => {

  Security.findByIdAndRemove(req.params.id, (err, doc) => {

    if (!err) {

      res.redirect("/security/list");

    } else {

      console.log("Error in deletion: " + err);

    }

  });

});

module.exports = router;
