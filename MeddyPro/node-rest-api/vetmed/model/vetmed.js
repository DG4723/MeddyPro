const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vetmed = new Schema({
  Genericname: {
    type: String
  },
  Tradename: {
    type: String
  },
  Strengthvalue: {
    type: String
  },
  Unitofstrength: {
    type: String
  },
  Dosageform: {
    type: String
  },
  Routeofadministration: {
    type: String
  },
  Volume: {
    type: Number
  },
  Unitofvolume: {
    type: String
  },
  Packagetype: {
    type: String
  },
  Legalstatus: {
    type: String
  },
  Productcontrol: {
    type: String
  },
  Storageconditions: {
    type: String
  },
  ATCvet: {
    type: String
  },
  Targetanimals: {
    type: String
  },
  Type: {
    type: String
  },
  Manufacturername: {
    type: String
  },
  

}, {
  collection: 'vetmeds'
})

module.exports = mongoose.model('Vetmed', Vetmed)
