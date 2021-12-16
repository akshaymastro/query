const AirportModel = require('../models/airportmodel')


const newAirport = async (req,res) => {
  try{
    console.log(req.body)
      const newAirport = new Airportmodel(req.body) 
      const response =await  newAirport.save()
    
      res.status(200).json(response)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}

const getAirports = async (req,res) => {
  try{
    console.log(req.body)
      const airports = await AirportModel.find({})
    
      res.status(200).json(airports)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const getAirportById = async (req,res) => {
  try{
      const airport = await AirportModel.findById({_id: req.params.id})
    
      res.status(200).json(airport)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const updateAirport = async (req,res) => {
  try{
      const updateAirport = await AirportModel.updateOne({_id: req.body._id},{...req.body})
    
      res.status(200).json({message:"Airport Update Successfully"})
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const deleteAirport = async (req,res) => {
  try{
    console.log(req.body)
      const updateAirport = await AirportModel.findOneAndDelete({_id: req.params.id})
    console.log(updateAirport)
      res.status(200).json("Airpot Deleted SuccessFully")
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
module.exports={
  newAirport,
  getAirports,
  getAirportById,
  updateAirport,
  deleteAirport,
}