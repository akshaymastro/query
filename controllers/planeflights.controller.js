const planeflights = require("../models/planeFlights");

const newPlaneFlights = async (req, res) => {
  try {
    console.log(req.body);
    const newPlaneFlight = new planeflights(req.body);
    const response = await newPlaneFlight.save();

    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const getPlaneFlights = async (req, res) => {
  try {
    console.log(req.body);
    const airline = await planeflights.find({});

    res.status(200).json(airline);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const getPlaneFlightsById = async (req, res) => {
  try {
    const airline = await planeflights.findById({ _id: req.params.id });

    res.status(200).json(airline);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const updatePlaneFlights = async (req, res) => {
  try {
    const updateAirport = await planeflights.updateOne(
      { _id: req.body._id },
      { ...req.body }
    );

    res.status(200).json({ message: "Airport Update Successfully" });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const deletePlaneFlights = async (req, res) => {
  try {
    console.log(req.body);
    const updateAirline = await planeflights.findOneAndDelete({
      _id: req.params.id,
    });
    console.log(updateAirline);
    res.status(200).json("plane flight Deleted SuccessFully");
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
module.exports = {
  newPlaneFlights,
  getPlaneFlights,
  getPlaneFlightsById,
  updatePlaneFlights,
  deletePlaneFlights,
};
