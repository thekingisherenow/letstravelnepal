import connectDb from "../../middleware/mongoose"
import Destination from "../../Models/Destination"

const handler = async (req, res) => {

    if (req.method ==="POST"){
        console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let dest = new Destination({
                "slug0": req.body[i].slug0,
                "slug1": req.body[i].slug1,
                "slug2": req.body[i].slug2,
                "trekName" : req.body[i].trekName,
                "trekImage": req.body[i].trekImage,
                "trekDescription": req.body[i].trekDescription,
                "price": req.body[i].price,
                "tripDuration": req.body[i].tripDuration,
                "tripDifficulty": req.body[i].tripDifficulty
            })
            dest.save();
        }
        res.status(200).json({ message: "success" })
    }
    else {
        res.status(400).json({ error : "wrong method" })

    }
 
    
  }  
  
   
        
   



export default connectDb(handler);