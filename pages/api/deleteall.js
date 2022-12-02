import connectDb from "../../middleware/mongoose"
import Destination from "../../Models/Destination"

const handler = async (req, res) => {

  await Destination.deleteMany()
  const data = await Destination.find();
  console.log(data)  
  res.status(200).json({ name: data })
   
        
   
}


export default connectDb(handler);