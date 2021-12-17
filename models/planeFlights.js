
const mongoose = require('mongoose')
var PlaneFlightsSchema = new mongoose.Schema({
  startingAirpot: {
    type: String,
  },
  destinationAirpot: {
    type: String,
  },
  planeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "planes",
  },
  departureTime: {
    type: String,
  },
  arrivalTime: {
    type: String,
  },
  pilot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pilots",
  },
  airportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airports",
  },
});
var planeflights= mongoose.model('planeFlights', PlaneFlightsSchema)
module.exports =  planeflights
