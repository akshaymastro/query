const express = require('express');
const router = express.Router();
const airportController = require("../controllers/airports.controller")
router.post('/', airportController.newAirport);
module.exports=router