import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className='mt-20 bg-white '>
        {/* Image source */}


        <div className='h-[400px] relative w-full  	 '>
        <div className=' brightness-50 '>
        <Image src="https://iili.io/HCZUeRa.jpg"  className='w-20 h-20 object-cover object-top'  fill />
        </div>
        <h1 className=' text-5xl text-white  absolute text-center brightness-200  font-bold ' >Things To Do</h1>
        </div>

    </div>
  )
}

export default ThingsToDo
