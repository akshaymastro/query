const Plane = require("../models/planes");

const newPlane = async (req, res) => {
  try {
    console.log(req.body);
    const newAirline = new Plane(req.body);
    const response = await newAirport.save();

    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const getPlane = async (req, res) => {
  try {
    console.log(req.body);
    const airline = await Plane.find({});

    res.status(200).json(airports);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const getPlaneById = async (req, res) => {
  try {
    const airline = await Plane.findById({ _id: req.params.id });

    res.status(200).json(airport);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const updatePlane = async (req, res) => {
  try {
    const updateAirport = await Plane.updateOne(
      { _id: req.body._id },
      { ...req.body }
    );

    res.status(200).json({ message: "Airport Update Successfully" });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const deletePlane = async (req, res) => {
  try {
    console.log(req.body);
    const updateAirline = await Plane.findOneAndDelete({ _id: req.params.id });
    console.log(updateAirline);
    res.status(200).json("plane flight Deleted SuccessFully");
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
module.exports = {
  newPlane,
  getPlane,
  getPlaneById,
  updatePlane,
  deletePlane,
};
