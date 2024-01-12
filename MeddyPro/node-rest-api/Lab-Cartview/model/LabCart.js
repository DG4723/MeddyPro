const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LabCart = new Schema({
  imgurl: {
    type: String
  },
  name: {
    type: String
  },
  qty: {
    type: String
  },
  price: {
    type: String
  },
},
{
  collection: 'LabCart'
})

module.exports = mongoose.model('LabCart', LabCart)
