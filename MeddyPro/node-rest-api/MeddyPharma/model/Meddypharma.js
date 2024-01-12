const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Meddypharma = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  district: {
    type: String
  },
  contact: {
    type: Number
  },
  email: {
    type: String
  },


}, {
  collection: 'Meddypharma'
})

module.exports = mongoose.model('Meddypharma', Meddypharma)
