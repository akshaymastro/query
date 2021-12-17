const mongoose = require('mongoose')
const airportSchema = new mongoose.Schema({
  empname: {
    type: String,
  },
  emptype: {
    type: String,
  },
  airportId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Airports"
  }
});
const AirlineEmpModel = mongoose.model('airlineEmp', airportSchema)

module.exports = AirlineEmpModel