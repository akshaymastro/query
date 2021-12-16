
const mongoose = require('mongoose')
var PlaneFlightsSchema = new mogoose.Schema({
  startingAirpot: {
    type: String,
  },
  destinationAirpot: {
    type: Number,
  },
  planeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "planes",
  },
  departureTime: {
    type: Date,
  },
  arrivalTime: {
    type: Date,
  },
  piolt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pilots",
  },
  airportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airports",
  },
});
var planeflights= mongoose.model('pilots', PlaneFlightsSchema)
module.exports =  planeflights
