const express = require('express');
const router = express.Router();
const PlaneController = require("../controllers/planes.controller");
router.post("/", PlaneController.newPlane);
router.post("/getPlanes", PlaneController.getPlane);
router.post("/updatePlane", PlaneController.updatePlane);
router.post("/deletePlane/:id", PlaneController.deletePlane);
module.exports=router