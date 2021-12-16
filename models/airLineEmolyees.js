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
const AirlineEmpModel = mongoose.model('airlineEmp', airportSchema)

module.exports = AirlineEmpModel