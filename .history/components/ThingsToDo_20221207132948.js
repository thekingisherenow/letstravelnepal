import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className='w-full bg-white '>
        {/* Image source */}

        <div className=' relative  '>
            <div className='w-full h-[400px] my-10'>

        <Image src="https://iili.io/HCZUeRa.jpg"  className='w-20 h-20 object-cover'  fill 
        // width={20} height={20}
        />
        </div>
        </div>

    </div>
  )
}

export default ThingsToDo
