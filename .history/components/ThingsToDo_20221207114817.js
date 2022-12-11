import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className='w-full  '>
        {/* Image source */}

        <div className='w-full h-80 relative '>
        <Image src="https://iili.io/HCZUeRa.jpg"  className='w-20 h-20'  fill 
        // width={20} height={20}
            />
        </div>
    </div>
  )
}

export default ThingsToDo
