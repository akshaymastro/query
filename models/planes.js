const mongoose = required('mongoose')
var Planes = new Mongoose.Schema({
  airports: [airportSchema],
})
