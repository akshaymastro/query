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
    type: String,
  },
  planeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "planes",
  },
  airport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airports",
  },
});
var journeyBooking = mongoose.model('journeyBookings', JourneyBookingSchema)
module.exports =journeyBooking
