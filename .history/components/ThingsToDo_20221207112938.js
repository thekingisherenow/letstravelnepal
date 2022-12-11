import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className=''>
        {/* Image source */}

        <div className='w-full h-20'>
        <Image src="https://iili.io/HCZUeRa.jpg"     layout='fill'
    objectFit='contain'  />
        </div>
    </div>
  )
}

export default ThingsToDo
