const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MeddyDoc = new Schema({
  name: {
    type: String
  },
  designation: {
    type: String
  },
  hname: {
    type: String
  },
  city: {
    type: String
  },
  contact: {
    type: Number
  },
  fee: {
    type: Number
  },
  imgurl: {
    type : String
  },
  degree: {
    type: String
  },
  experience: {
    type: String
  },
  date: {
    type: Date
  },
  time: {
    type: String
  },

}, {
  collection: 'MeddyDoc'
})

module.exports = mongoose.model('MeddyDoc', MeddyDoc)
