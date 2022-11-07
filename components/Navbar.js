import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

function Navbar() {
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
        <Link href="/"><a><li className='p-2 cursor-pointer'>Home</li></a></Link>
        {/* //dropdown */}
        <Link href="/trek"><a><li className='p-2 cursor-pointer'>Nepal Trekking</li></a></Link>
        <Link href="/tour"><a><li className='p-2 cursor-pointer'>Nepal Tour</li></a></Link>
        <Link href="/adventure"><a><li className='p-2 cursor-pointer'>Adventure Activities</li></a></Link>
        <Link href="/hiking"><a><li className='p-2 cursor-pointer'>Hiking in Nepal</li></a></Link>

        <Link href="/about"><a><li className='p-2 cursor-pointer'>About</li></a></Link>
        <Link href="/contact"><a><li className='p-2 cursor-pointer'>Contacts us.</li></a></Link>

        </ul>
    </div>
    </header>

   


    
  </>

  )
}

export default Navbar