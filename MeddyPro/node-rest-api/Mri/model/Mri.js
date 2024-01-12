const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mri = new Schema({
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
  collection: 'Mri'
})

module.exports = mongoose.model('Mri', Mri)
