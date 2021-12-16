const mongoose = require('mongoose')
var JourneyBookingSchema = new mongoose.Schema({
  field: {
    type: String,
  },
  field: {
    type: String,
  },
  field: {
    type: Number,
  },
  planeId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"PlaneFlights"
  },
  airport:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Airports"
  }
})
var journeyBooking=mongoose.model('journeyBookings', JourneyBookingSchema)
module.export =journeyBooking
