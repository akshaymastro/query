const Plane = require('../models/planes')

const newPlane = async (req, res) => {
  try {
    console.log(req.body);
    const newPlane = new Plane(req.body);
    const response = await newPlane.save();

    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const getPlane = async (req, res) => {
  try {
    console.log(req.body);
    const planes = await Plane.find({});

    res.status(200).json(planes);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const getPlaneById = async (req, res) => {
  try {
    const plane = await Plane.findById({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const updatePlane = async (req, res) => {
  try {
    const updatePlane = await Plane.updateOne(
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