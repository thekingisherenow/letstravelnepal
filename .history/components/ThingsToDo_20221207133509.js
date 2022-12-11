import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className='w-full bg-white '>
        {/* Image source */}

        <div className=' relative  '>
        <div className='w-full h-[400px] mt-20 brightness-50	 '>

        <Image src="https://iili.io/HCZUeRa.jpg"  className='w-20 h-20 object-cover object-top'  fill 
        // width={20} height={20}
        />
        </div>
        <h1 className='p-5 text-2xl top-5' >Things to Do</h1>
        </div>

    </div>
  )
}

export default ThingsToDo
