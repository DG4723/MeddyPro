const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let petform = new Schema({
   name: {
    type: String
  },
   contact: {
    type: Number
  },
    address: {
    type: String
  },
    pet: {
    type: String
  },
     date: {
    type: Date
  },
     
      time: {
    type: String
  },
      status: {
    type: String
  },
    doc_id: {
    type: Number
  },
 
},
{
      collection: 'petform'
  }
)

module.exports = mongoose.model('Petform', petform)
