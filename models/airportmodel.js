const mongoose = require('mongoose')
const airportSchema = new mongoose.schema({
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
