const mongoose = require('mongoose')
const airportSchema = new mongoose.Schema({
  empnameame: {
    type: String,
  },
  emptype: {
    type: String,
  },
});
const AirlineEmpModel = mongoose.model('airlineEmp', airportSchema)

module.exports = AirlineEmpModel