import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React from 'react'

function NeedHelp() {
  return (
    <div className='p-6 m-2 mt-4 bg-white border-2 border-gray-200 '>
        <h1 className='text-lg text-black font-bold my-1'>Need Help ?</h1>
        <h2 className='text-gray-600 my-2'>Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now</h2>
        <div className='flex space-x-3 my-1'><PhoneIcon className='w-5 h-5 ' /> <span>+977 9863318496</span></div>
        <div className='flex space-x-3 my-1'><EnvelopeIcon className='w-5 h-5 '/><span> prajanbhattarai63@gmail.com</span></div>
       
    </div>
  )
}

export default NeedHelp