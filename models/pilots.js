
const mongoose = require('mongoose')
var piloteSchema = new mogoose.Schema({
  pioltName: {
    type: String,
  },
  pioltAddress: {
    type: String,
  },
  fitToFlytestDate: {
    type: Date,
  },
  airportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airports",
  },
});
var pilots= mongoose.model('pilots', piloteSchema)
module.exports =  pilots
