const mongoose = require('mongoose')
const airportSchema = new mongoose.Schema({
  airportsName: {
    type: String,
  },
  location: {
    type: String,
  },
  airportCost: {
    type: Number,
  },
})
const AirportModel = mongoose.model('airports', airportSchema)

module.exports = AirportModel