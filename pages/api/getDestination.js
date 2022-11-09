import connectDb from "../../middleware/mongoose"
import Destination from "../../Models/Destination"

const handler = async (req, res) => {

  const data = await Destination.find()
  console.log(data)  
  res.status(200).json({ data: data })
  
}


export default connectDb(handler);