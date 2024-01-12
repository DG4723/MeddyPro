const mongoose = require("mongoose");

var securitySchema = new mongoose.Schema({

  Date: {

    type: Date,

    required: 'This field is required'

  },

  Open: {

    type: Number,

    required: 'This field is required'

  },

  High: {

    type: Number,

    required: 'This field is required'

  },

  Low: {

    type: Number,

    required: 'This field is required'

  },

  Close: {

    type: Number,

    required: 'This field is required'

  }

});

mongoose.model("Security", securitySchema);
