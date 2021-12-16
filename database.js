const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/airportC', { useNewUrlParser: true }, () => {
    console.log('MongoDB Connection Succeeded.') 
  
});
require('./models/airportmodel')

