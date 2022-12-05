import Image from 'next/image'

import React, { Fragment, useRef, useState } from 'react'
import { Bars3Icon, ChevronDownIcon, EnvelopeIcon, MagnifyingGlassIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid'
import VerticalDropdown from './VerticalDropdown'
import {menuItems} from './MenuData'
import Link from 'next/link'

function Navbar() {

  const ulRef = useRef()
  // console.log("menu items",menuItems)
  // console.log("menu items- tripType",menuItems[0].tripType)
  // console.log("menuItems.dropdowns",menuItems[0].dropdowns)

  const toggleMenu = () => {
    if (ulRef.current.classList.contains('hidden')) {
      ulRef.current.classList.remove('hidden')
      setNavMenu(true)
    } 
    else {
      ulRef.current.classList.add('hidden')
      setNavMenu(false)

    }
  }

  const [navMenu, setNavMenu] = useState(false)


  return (
    <>
      <header className='sticky w-full top-0 z-50 '>

    
        <div className=' w-full flex flex-row bg-white z-50 lg:justify-start justify-center shadow-xl py-2 px-1 h-20 flex-grow lg:py-3 lg:shadow-sm '>   


        {/* //LOGO */}
          <Link href="/"><div className='flex h-14 w-32 relative mt-1  object-contain cursor-pointer md:ml-20   flex-shrink-0  '>
            <Image className='  '
              src="https://iili.io/pfthtn.jpg" fill
              alt="" />
          </div></Link>
          {/* SEARCH BARR  */}


          <div className=' sm:ml-10 md:ml-20 hidden  min-[400px]:inline-block  justify-between items-center lg:border-2  shrink rounded-full shadow-xl'>
            <input type='text' className='flex-grow text-sm text-gray-600 placeholder:truncate  mt-4 placeholder:text-gray-400 shrink pl-2 bg-transparent outline-none ml-3 '
              placeholder='Start exploring Nepal..' />
            <MagnifyingGlassIcon className=' w-8 h-8 hidden min-[500px]:inline-flex   bg-green-400 p-2 rounded-full  text-2xl mx-2 ' />
          </div>

         

          <div className='lg:flex  lg:justify-end items-center hidden  ml-auto'>
            <div className='flex-col p-1 mx-1'>

           <PhoneIcon className='h-9 w-9 flex mx-auto justify-center text-green-700' /> <h1 className='text-sm font-semibold text-black' >+977-9863318496</h1>
            </div>
            <div className='flex-col p-1 mx-1'>

           <EnvelopeIcon className='h-9 w-9 flex mx-auto justify-center text-green-700 '/> <h1 className='text-sm font-semibold text-black' >prajanbhattarai63@gmail.com</h1>
            </div>

          </div>
        


        {/* tala ko menu kholne button */}
        <div className=' bg-white text-black text-end ml-auto flex justify-end items-center  '>
        {navMenu? <XMarkIcon  onClick={()=>toggleMenu()} 
          className='flex text-right shrink-0 font-extrabold cursor-pointer p-1 mx-auto justify-end w-12 h-12 text-xl lg:hidden'/> : <Bars3Icon onClick={()=>toggleMenu()} 
          className='flex text-right shrink-0 font-extrabold cursor-pointer p-1 mx-auto justify-end w-12 h-12 text-xl lg:hidden'/>}
        
          <div></div>
        </div>
        </div>
        
        {/* menu list */}
        <ul ref={ulRef}
        className='hidden bg-black text-white lg:flex flex-col lg:flex-row items-center ml-2 space-y-2 py-4 px-0 lg:py-1  w-full   lg:items-center
         lg:justify-center lg:mx-auto  text-md font-medium'>

                <Link href= "/"><li className='lg:w-36  text-left lg:text-center w-full   '>Home</li></Link>

             
          {
          menuItems.map((link,i)=> {
            return (<li className='w-full lg:w-80 mx-2  text-left lg:text-center  ' key={link.tripType}>
              
              <VerticalDropdown as={Fragment}  key={link.tripType} tripType = {link.tripType} toggleMenu={toggleMenu}   dropdowns= {link.dropdowns}  /> 
            </li>
              
              )
              
            })}
            <Link href= "/aboutus"><li className='w-full lg:w-36 text-left lg:text-center   '>About Us</li></Link>

            <Link href= "/contact"><li className='w-full lg:w-36 text-left lg:text-center  '>Contact </li></Link>
            </ul>
      </header>





    </>

  )
}

export default Navbar