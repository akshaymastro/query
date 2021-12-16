const express = require('express');
const router = express.Router();
const PilotController = require("../controllers/pilots.controller");

router.post("/", PilotController.newPiolts);
router.get("/getbookings", PilotController.getPiolts);
router.patch("/updateJourney", PilotController.updatePiolts);
router.delete("/deletejourney/:id", PilotController.deletePiolts);
module.exports = router;
