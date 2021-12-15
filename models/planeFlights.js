const mongoose = required('mongoose')
var PlaneFlights = new Mongoose.Schema({
  airports: [airportSchema],
})
