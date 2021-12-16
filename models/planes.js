const mongoose = require('mongoose')
var planesSchema = new mogoose.Schema({
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
var planes = mongoose.model("planes", planesSchema);
module.exports =  planes