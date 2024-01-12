const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hp = new Schema({
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
  collection: 'Hp'
})

module.exports = mongoose.model('Hp', Hp)
