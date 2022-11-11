import Image from 'next/image'
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

function Navbar() {

  const [trekDropDown, setTrekDropDown] = useState(false)
  const [dropDowntour, setDropDowntour] = useState(false)

  return (
  <>
    <header className='sticky top-0 z-50 '>

      {/* //TOP NAV */}

        {/* //LOGO */}
        <div className=' mx-auto flex bg-white z-50 sticky top-0 shadow-xl py-2 px-1 flex-grow md:py-3 flex-shrink-0 md:shadow-sm'>

        <div className='flex h-16 w-32 relative mt-2 object-contain cursor-pointer flex-grow sm:flex-grow-0'>
            <Image className=''
            src="https://iili.io/pfthtn.jpg" fill
            alt = ""/>
        </div>

        {/* SEARCH BARR  */}
    

        <div className='flex ml-20 justify-between items-center md:border-2 py-2   rounded-full shadow-xl'>
            <input type='text'  className='flex-grow text-sm text-gray-600 placeholder:truncate placeholder:text-gray-400  pl-2 bg-transparent outline-none ml-3 '
            placeholder='Start exploring Nepal..'/>
            <MagnifyingGlassIcon className=' w-10 h-10 hidden md:inline-flex   bg-green-400 p-2 rounded-full  text-2xl mx-2 '/>

        </div>
        {/* RIGHT PART  */}

        <div className='flex justify-end items-center'>
            Contact us on : +977-9863318496
        </div>
            </div>

        {/* //BOTTOM NAV */}
        <div className='bg-white sticky top-20 z-40  shadow-xl'>
      <ul className='flex justify-center items-center space-x-6 '>
        <Link href="/"><li className='p-2 cursor-pointer'>Home</li></Link>
        {/* //dropdown */}
        <Link href="/destinaton/trek">
          <li 
        onMouseOver={()=>setTrekDropDown(true)} 
        onMouseLeave={()=>setTrekDropDown(false)} 
        
        className='p-2 relative cursor-pointer'>Nepal Trekking</li></Link>
          {trekDropDown && <div className='absolute top-10 right-[1100px]  w-20 h-20  bg-green-400'>

          </div>}
        <Link href="/destinaton/tour"><li  onMouseOver={()=>setDropDowntour(true)} 
        onMouseLeave={()=>setDropDowntour(false)}
        className='p-2 relative cursor-pointer'>Nepal Tour</li></Link>
         {dropDowntour && <div className='absolute top-10 right-[950px]  w-20 h-20  bg-green-400'>

</div>}
        <Link href="/destinaton/adventure"><li className='p-2 cursor-pointer'>Adventure Activities</li></Link>
        <Link href="/destinaton/hike"><li className='p-2 cursor-pointer'>Hiking in Nepal</li></Link>

        <Link href="/about"><li className='p-2 cursor-pointer'>About</li></Link>
        <Link href="/contact"><li className='p-2 cursor-pointer'>Contact us.</li></Link>

        </ul>
        <div></div>
    </div>
    </header>

   


    
  </>

  )
}

export default Navbar