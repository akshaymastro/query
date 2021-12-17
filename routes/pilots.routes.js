const express = require('express');
const router = express.Router();
const PilotController = require("../controllers/pilots.controller");

router.post("/", PilotController.newPiolts);
router.get("/getpilots", PilotController.getPiolts);
router.patch("/updatePilots", PilotController.updatePiolts);
router.delete("/deletePilots/:id", PilotController.deletePiolts);
module.exports = router;
