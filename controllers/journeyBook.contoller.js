const journeyBooking = require('../models/journeyBooking')

const Newjourney = async (req,res) => {
  try{
    console.log(req.body)
      const newbook = new journeyBooking(req.body) 
      const response =await  newAirport.save()
    
      res.status(200).json(response)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}

const getJourneyBooking = async (req,res) => {
  try{
    console.log(req.body)
      const airline= await journeyBooking.find({})
    
      res.status(200).json(airports)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}

const updateJpurneyBooking = async (req,res) => {
  try{
      const updateAirport = await journeyBooking.updateOne({_id: req.body._id},{...req.body})
    
      res.status(200).json({message:"Airport Update Successfully"})
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const deleteJourneyBooking = async (req,res) => {
  try{
    console.log(req.body)
      const updateAirline = await journeyBooking.findOneAndDelete({_id: req.params.id})
    console.log(updateAirline)
      res.status(200).json("Airpot Deleted SuccessFully")
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
module.exports = {
  Newjourney,
  getJourneyBooking,
  updateJpurneyBooking,
  deleteJourneyBooking,
};