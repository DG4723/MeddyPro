const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vetpatient = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  contact: {
    type: Number
  },
  type: {
    type: String
  },

  date:
  {
    type:Date
  },
  time:
  {
    type:String
  },



}, {
  collection: 'vetpatient'
})

module.exports = mongoose.model('vetpatient', vetpatient)
