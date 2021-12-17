const journeyBooking = require('../models/journeyBooking')

const Newjourney = async (req,res) => {
  try{
    console.log(req.body)
      const newbook = new journeyBooking(req.body) 
      const response =await  newbook.save()
    
      res.status(200).json(response)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}

const getJourneyBooking = async (req,res) => {
  try{
    console.log(req.body)
      const bookings= await journeyBooking.find({})
    
      res.status(200).json(bookings)
  }catch(e){
    console.log(e)
    res.json(e)
  }
}

const updateJpurneyBooking = async (req,res) => {
  try{
      const updatebookings = await journeyBooking.updateOne({_id: req.body._id},{...req.body})
    
      res.status(200).json({message:"Booking Update Successfully"})
  }catch(e){
    console.log(e)
    res.json(e)
  }
}
const deleteJourneyBooking = async (req,res) => {
  try{
    console.log(req.body)
      const bookings = await journeyBooking.findOneAndDelete({_id: req.params.id})
    console.log(bookings)
      res.status(200).json("bookings Deleted SuccessFully")
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