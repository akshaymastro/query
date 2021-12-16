const express = require('express');
const router = express.Router();
const airlineEmpController = require("../controllers/airlineEmp.controller")

router.post('/', airlineController.Newjourney);
router.get('/airlineEmpList', airlineEmpController.getJourneyBooking);
router.get('/:id', airlineController.getJourneyBooking);
router.patch('/updateAirairline',airlineEmpeController.updateAirport);
router.delete('/deleteAirairline/:id', airlineEmpController.deleteAirport);
module.exports=router
