const mongoose = require('mongoose')
var planesSchema = new mongoose.Schema({
  planemake: {
    type: String,
  },
  planemodel: {
    type: String,
  },
  flyingrange: {
    type: Number,
  },
  lengthOfService:{
    type: String
  },
  status:{
    type: Boolean
  },
  seatingCapacity:{
    type: Number
  },
  airportId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Airports"
  }
})
var planes = mongoose.model("planes", planesSchema);
module.exports =  planes