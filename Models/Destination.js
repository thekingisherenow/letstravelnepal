const mongoose = require('mongoose');


const destinationSchema = new mongoose.Schema({
    slug0: {type:String},
    slug1: {type:String},
    slug2: {type:String},
    accordian:[{
        accordiantitle: { type:String},
        accordianbody : { type:String}
    }],

    
    trekName :{type:String},
    trekImage: {type:String},
    trekDescription: {type:String},
    price:{type:Number},
    tripDuration: {type:Number},
    tripDifficulty: {type:String}
})

export default mongoose.models?.Destination ||mongoose.model('Destination', destinationSchema)
