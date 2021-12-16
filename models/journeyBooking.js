const mongoose = require('mongoose')
var JourneyBookingSchema = new mongoose.Schema({
  fligtTo: {
    type: String,
  },
  fightFrom: {
    type: String,
  },
  passengerDetail: {
    type: Object,
  },
  bookingdatetime: {
    type: Date,
  },
  planeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PlaneFlights",
  },
  airport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airports",
  },
});
var journeyBooking=mongoose.model('journeyBookings', JourneyBookingSchema)
module.export =journeyBooking
