const express = require('express');
const router = express.Router();
const PlaneFlightController = require("../controllers/planeflights.controller");
router.post("/", PlaneFlightController.newPlaneFlights);
router.get("/getFlights", PlaneFlightController.getPlaneFlights);
router.patch("/updateFlight", PlaneFlightController.updatePlaneFlights);
router.delete("/deleteFlight/:id", PlaneFlightController.deletePlaneFlights);
module.exports=router