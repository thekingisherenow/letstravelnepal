import connectDb from "../../middleware/mongoose"
import Destination from "../../Models/Destination"

const handler = async (req, res) => {

    if (req.method ==="POST"){
        
            let dest = new Destination({
                slug0: "heyy",
                slug1: "heyy",
                slug2: "hedsasdyy",
                accordianobj: [{"accordiantitle": " Meet and greet in Kathmandu.", "accordianbody": " Today; we meet in Kathmandu. A short briefing about the trip. Accommodation and meals on your own. We can arrange if you ask us to help you. Airport pick up can be arranged if you want us to pick you. Overnight in Kathmandu. "}, {"accordiantitle": "Get permits, trip preparation. ", "accordianbody": " Today, we will get your upper mustang trekking permits. You could do trekking preparation or you have choice to visit ancient old temples in Kathmandu. In the evening; Wilderness Excursion's manager will introduce your guide and final brief about your trip for next day departure. overnight in Kathmandu. Accommodation and meals on your own. "}],
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