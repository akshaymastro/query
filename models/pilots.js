
const mongoose = require('mongoose')
var pilotSchema = new mongoose.Schema({
  pilotName: {
    type: String,
  },
  pilotAddress: {
    type: String,
  },
  fitToFlytestDate: {
    type: String,
  },
  airportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airports",
  },
});
var pilots= mongoose.model('pilots', pilotSchema)
module.exports =  pilots
