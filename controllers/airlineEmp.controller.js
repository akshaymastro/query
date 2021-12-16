const AirlineModel = require('../models/airLineEmployees')

const newAirline = async (req,res) => {
  try{
    console.log(req.body)
      const newAirline = new AirlineModel(req.body) 
      const response =await  newAirport.save()
    
      res.status(200).json(response)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}

const getAirline = async (req,res) => {
  try{
    console.log(req.body)
      const airline= await AirlineModel.find({})
    
      res.status(200).json(airports)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const getAirlineById = async (req,res) => {
  try{
      const airline = await AirlineModel.findById({_id: req.params.id})
    
      res.status(200).json(airport)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const updateAirline = async (req,res) => {
  try{
      const updateAirport = await AirlineModel.updateOne({_id: req.body._id},{...req.body})
    
      res.status(200).json({message:"Airport Update Successfully"})
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const deleteAirline = async (req,res) => {
  try{
    console.log(req.body)
      const updateAirline = await AirlineModel.findOneAndDelete({_id: req.params.id})
    console.log(updateAirline)
      res.status(200).json("Employee Deleted SuccessFully")
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
module.exports={
  newAirline
}