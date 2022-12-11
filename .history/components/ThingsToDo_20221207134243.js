import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className='mt-20 bg-white '>
        {/* Image source */}


        <div className='w-full relative h-[400px]  brightness-50	 '>

        <Image src="https://iili.io/HCZUeRa.jpg"  className='w-20 h-20 object-cover object-top'  fill 
        />
        <h1 className=' text-5xl text-white  absolute flex items-center justify-center mx-auto     font-bold ' >Things To Do</h1>
        </div>

    </div>
  )
}

export default ThingsToDo
