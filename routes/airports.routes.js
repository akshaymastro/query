const express = require('express');
const router = express.Router();
const airportController = require("../controllers/airports.controller")
router.post('/', airportController.newAirport);
router.get('/airportList', airportController.getAirports);
router.get('/:id', airportController.getAirportById);
router.patch('/updateAirport', airportController.updateAirport);
router.delete('/deleteAirport/:id', airportController.deleteAirport);

module.exports=router
