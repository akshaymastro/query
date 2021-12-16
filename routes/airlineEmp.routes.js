const express = require('express');
const router = express.Router();
const airlineEmpController = require("../controllers/airlineEmp.controller")

router.post("/", airlineEmpController.NewEmp);
router.get("/airlineEmpList", airlineEmpController.getEmps);
router.get("/:id", airlineEmpController.getEmp);
router.patch("/updateemp", airlineEmpController.updateEmp);
router.delete("/deleteemp/:id", airlineEmpController.deleteEmp);
module.exports=router
