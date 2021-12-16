const express = require('express');
const router = express.Router();
const JourneyController = require("../controllers/journeyBook.contoller");

router.post("/", JourneyController.Newjourney);
router.get("/getbookings", JourneyController.getJourneyBooking);
router.patch("/updateJourney", JourneyController.updateJpurneyBooking);
router.delete("/deletejourney/:id", JourneyController.deleteJourneyBooking);
module.exports = router;
