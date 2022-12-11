import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
  return (
    <div className='relative'>
        {/* Image source */}

        <div className='w-full h-50 '>
        <Image src="https://iili.io/HCZUeRa.jpg" fill />
        </div>
    </div>
  )
}

export default ThingsToDo
