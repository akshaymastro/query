
const mongoose = require('mongoose')
var PlaneFlightsSchema = new mogoose.Schema({
  field: {
    type: String,
  },
  field: {
    type: String,
  },
  field: {
    type: Number,
  },
})
var planeflights= mongoose.model('pilots', PlaneFlightsSchema)
module.exports =  planeflights
