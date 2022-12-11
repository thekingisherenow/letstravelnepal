import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className='mt-20 bg-white '>
        {/* Image source */}


        <div className=' relative   	 '>
        <div className='h-[400px] brightness-50 w-full '>
        <Image src="https://iili.io/HCZUeRa.jpg"  className='w-20 h-20 object-cover object-top'  fill />
        </div>
        <h1 className=' text-4xl text-white  absolute top-5 w-full   text-center mx-auto brightness-200  ' >Things To Do</h1>
        </div>

    </div>
  )
}

export default ThingsToDo
