const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let docreg = new Schema({
   name: {
    type: String
   },
   age: {
    type: Number
    },
    gender: {
    type: String
    },
    mobileno: {
    type: String
    },
    city: {
    type: String
    },
     state: {
    type: String
    },
    user: {
    type: String
  },
      specialist: {
    type: String
  },
    stime: {
    type: String
  },
    etime: {
    type: String
  },
    user_id: {
    type: Number
  },
 
},
{
      collection: 'docreg'
  }
)

module.exports = mongoose.model('docreg', docreg)
