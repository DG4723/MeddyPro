const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MeddyLab = new Schema({
  lname: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  contact: {
    type: Number
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  imgurl: {
    type: String
  },
  aname: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  date: {
    type: Date
  },

}, {
  collection: 'MeddyLab'
})

module.exports = mongoose.model('MeddyLab', MeddyLab)
