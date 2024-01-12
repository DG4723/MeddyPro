const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MeddyPatient = new Schema({
  name: {
    type: String
  },
  age: {
    type: String
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
  complaint: {
    type: String
  },
  mname: {
    type: String
  },
  strength: {
    type: String
  },
  date: {
    type: Date
  },
  time: {
    type: String
  },


}, {
  collection: 'MeddyPatient'
})

module.exports = mongoose.model('MeddyPatient', MeddyPatient)
