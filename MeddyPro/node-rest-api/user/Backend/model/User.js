const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
 name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  address:
  {
    type:String
  },
  contact:
  {
    type:Number
  },
  
 
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', User)