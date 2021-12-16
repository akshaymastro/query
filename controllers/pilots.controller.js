const pilots = require('../models/pilots')

const newAirline = async (req,res) => {
  try{
    console.log(req.body)
      const newAirline = new pilots(req.body) 
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
      const airline= await pilots.find({})
    
      res.status(200).json(airports)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const getAirlineById = async (req,res) => {
  try{
      const airline = await pilots.findById({_id: req.params.id})
    
      res.status(200).json(airport)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const updateAirline = async (req,res) => {
  try{
      const updateAirport = await pilots.updateOne({_id: req.body._id},{...req.body})
    
      res.status(200).json({message:"Airport Update Successfully"})
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const deleteAirline = async (req,res) => {
  try{
    console.log(req.body)
      const updateAirline = await pilots.findOneAndDelete({_id: req.params.id})
    console.log(updateAirline)
      res.status(200).json("pilot Deleted SuccessFully")
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
module.exports={
  newAirline
}