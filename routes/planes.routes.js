const express = require('express');
const router = express.Router();
const PlaneController = require("../controllers/planes.controller");
router.post("/", PlaneController.newPlane);
router.get("/getPlanes", PlaneController.getPlane);
router.get("/:id", PlaneController.getPlaneById);
router.patch("/updatePlane", PlaneController.updatePlane);
router.delete("/deletePlane/:id", PlaneController.deletePlane);
module.exports=router