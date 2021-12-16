const mongoose = require('mongoose')
var ravenueSchema = new mogoose.Schema({
  airportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airports",
  },
  cost: {
    type: String,
  },
});
var ravenue= mongoose.model('pilots', ravenueSchema)
module.exports =  ravenue