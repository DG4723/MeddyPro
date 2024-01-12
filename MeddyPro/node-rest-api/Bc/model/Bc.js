const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bc = new Schema({
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
  collection: 'Body_Checkup'
})

module.exports = mongoose.model('Bc', Bc)
