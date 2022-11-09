import { useRouter } from 'next/router'
import React from 'react'
import mongoose from 'mongoose';
import Destination from '../../../../Models/Destination';
import connectDb from '../../../../middleware/mongoose';
import Error from '../../../../components/Error';

function Slug({destination}) {
    const router = useRouter()
    const { slug0,slug1,slug2 } = router.query

    console.log(destination)

   if (!destination){
    return ( <Error />)
           
   }
   else {
  
  return (
    <div>Slug. {slug0} {slug1} {slug2} 
    
    <img  className='w-full item-cover h-1/2'
    src= {destination.trekImage} />
    <div>
      <h2 className="text-2xl font-bold text-gray-900 ">Overview</h2>
      <h1 className="text-4xl font-semibold">{destination.trekName}</h1>
      <p>{destination.trekDescription}</p>
    
     <p>Price : {destination.price}</p>
     <p>tripDuration:{destination.tripDuration}</p>
     <p>  trip difficulty :{destination.tripDifficulty} </p>
    </div>
    </div>
  )
}
}

export default Slug

export async function getServerSideProps(context) {
  if (!(mongoose.connection.readyState === 1)) {
    await mongoose.connect(process.env.MONGODB_URI);
}
console.log("database connected.")

// console.log(context.query.slug0)
let destination = await Destination.findOne({slug0:context.query.slug0,
  slug1:context.query.slug1,slug2:context.query.slug2
})

  return {
    props: {destination : JSON.parse(JSON.stringify(destination))}, // will be passed to the page component as props
  }
}
