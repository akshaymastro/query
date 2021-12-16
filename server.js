const express = require('express')
const server = express()
const mongoose = require('mongoose')
/////////

mongoose.connect('mongodb://localhost:27017/db_name', () => {
  consolele.log('mongoDb connected')
})
require('./airportmodels')

server.listen(3000, () => {
  console.log('server started at 3000')
})
