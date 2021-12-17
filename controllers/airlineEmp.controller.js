const AirlineEmpModel = require('../models/airLineEmolyees')

const NewEmp = async (req, res) => {
  try {
    console.log(req.body);
    const newEmp = new AirlineEmpModel(req.body);
    const response = await newEmp.save();

    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const getEmps = async (req, res) => {
  try {
    console.log(req.body);
    const airlineemp = await AirlineEmpModel.find({});

    res.status(200).json(airlineemp);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const getEmp = async (req, res) => {
  try {
    const airlineemp = await AirlineEmpModel.findById({ _id: req.params.id });

    res.status(200).json(airlineemp);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const updateEmp = async (req, res) => {
  try {
    console.log(req.body,"body")
    console.log(req.params,"params")
    console.log(req.query,"query")
    const updateEmployee  = await AirlineEmpModel.updateOne(
      { _id: req.body._id },
      { ...req.body }
    );
    console.log(req.body)

    res.status(200).json({ message: "Employee Update Successfully" });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const deleteEmp = async (req, res) => {
  try {
    console.log(req.body);
    const updateAirline = await AirlineEmpModel.findOneAndDelete({
      _id: req.params.id,
    });
    console.log(updateAirline);
    res.status(200).json("Employee Deleted SuccessFully");
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
module.exports = {
  NewEmp,
  getEmps,
  getEmp,
  updateEmp,
  deleteEmp,
};