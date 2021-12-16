const pilots = require('../models/pilots')

const newPiolts = async (req, res) => {
  try {
    console.log(req.body);
    const newPiolts = new pilots(req.body);
    const response = await newPiolts.save();

    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

const getPiolts = async (req, res) => {
  try {
    console.log(req.body);
    const Piolts = await pilots.find({});

    res.status(200).json(Piolts);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const getPioltsById = async (req, res) => {
  try {
    const Piolts = await pilots.findById({ _id: req.params.id });

    res.status(200).json(Piolts);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const updatePiolts = async (req, res) => {
  try {
    const updateAirport = await pilots.updateOne(
      { _id: req.body._id },
      { ...req.body }
    );

    res.status(200).json({ message: "Airport Update Successfully" });
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const deletePiolts = async (req, res) => {
  try {
    console.log(req.body);
    const updateAirline = await pilots.findOneAndDelete({ _id: req.params.id });
    console.log(updateAirline);
    res.status(200).json("pilot Deleted SuccessFully");
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
module.exports = {
  newPiolts,
  getPiolts,
  getPioltsById,
  updatePiolts,
  deletePiolts,
};