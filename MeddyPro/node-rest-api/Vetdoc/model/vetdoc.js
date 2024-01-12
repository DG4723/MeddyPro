const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vetdoc = new Schema({
  year: {
    type: String
  },
  name: {
    type: String
  },
  dob: {
    type: String
  },
  address: {
    type: String
  },
  regno: {
    type: String
  },
  qualification: {
    type: String
  },
  fees:
  {
    type:Number
  },
  


}, {
  collection: 'vetdocs'
})

module.exports = mongoose.model('Vetdoc', Vetdoc)
