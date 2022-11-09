import connectDb from "../../middleware/mongoose"
import Destination from "../../Models/Destination"

const handler = async (req, res) => {

    if (req.method ==="POST"){
        
            let dest = new Destination({
                slug0: "heyy",
                slug1: "heyy",
                slug2: "hedsasdyy",
                trekName : "heyy",
                trekImage: "heyy",
                trekDescription: "heyy",
                price: 2,
                tripDuration: 5,
                tripDifficulty: "heyy"

                
            })
            dest.save();
        
        res.status(200).json({ message : "success" })
    }
    else {
        res.status(400).json({ error : "wrong method" })

    }
    
  }  
  
   
        
   



export default connectDb(handler);