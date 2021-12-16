const mongoose = require('mongoose')
var journeyBookingSchema = new mongoose.Schema({
  field: {
    type: String,
  },
  field: {
    type: String,
  },
  field: {
    type: Number,
  },
})
module.export = mongoose.model('collection', journeyBookingSchema)
