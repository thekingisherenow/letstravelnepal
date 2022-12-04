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

  const links = [
    {"label" : "Nepal Trekking" , "dropdowns" : [
    {"title" :"Annapurna Trekking" , "items" : ["Jomsom Muktinath Trekking", "Extreme Saribung Trekking and Peak Climbing", "Annapurna Sanctuary Trekking", "Khair Lake Trekking", "Nagi Narchyang Trek", "Tatopani Ghorepani Village Trekking", "Annapurna off the beaten trail trek", "Yartung Festival Trekking", "Mustang Tiji Festival Trek", "Australian Camp Dhampus Village Tour", "Annapurna Circuit Trekking", "Annapurna Base Camp Trekking", "Mardi Himal Trek", "Mardi Himal Trek 5 Days", "Upper Mustang Trekking", "Poon Hill Trek 4 days", "Nar Phu Valley Trekking"] } ,
    {"title" :"Everest Trekking" , "items" : ["Gokyo Chola Pass Trek", "Dumji Festival Trek", "Everest Gokyo Trek", "Everest Three High Passes Trekking", "Classic Jiri Everest Base Camp Trekking", "Everest Panorama Trekking", "Everest Base Camp Trekking", "Mani Rimdu Festival Trekking", "Dudh Kunda Pikey Peak Trek", "pikey peak trek"]},
    {"title" :"Langtang Region Trek" , "items" : ["Langtang Ganjala Pass Trekking", "Langtang Gosaikunda Trekking", "Langtang Helambu Trekking", "Classic Langtang Valley Trekking", "Tamang Heritage Trail Trekking", "Tamang Heritage and Langtang Valley Trek", "Helambu Circuit Trekking"]},
    {"title" :"Manaslu Trek" , "items" : ["Lower Manaslu Trekking", "Rupina La Pass Trek", "Manaslu Tsum Valley Trekking", "Manaslu Circuit Trekking", "Tsum Valley Trekking"]},
    {"title" :"Ganesh Himal Trek" , "items" : ["Ganesh Himal Tamang Heritage Trail Trekking", "Ganesh Himal Panorama Trekking"]},
    {"title" :"Nepal Village Trek" , "items" : ["Ganesh Himal Tamang Heritage Trail Trekking", "Ghale Gaun Village Trek", "Tatopani Ghorepani Village Trekking", "3 days poon hill trek from Pokhara", "Australian Camp Dhampus Village Tour", "Chisapani Nagarkot Trek", "Balthali Village Trek", "Tamang Heritage Trail Trekking", "Poon Hill Trek 4 days", "pikey peak trek"]},

    {"title" :"Nepal Festival Tours and Treks" , "items" : ["Dumji Festival Trek", "Dawa Dangbo Tsechu Festival", "Yartung Festival Trekking", "Mustang Tiji Festival Trek", "Mani Rimdu Festival Trekking"]},

    {"title" :"Kanchenjunga Trek" , "items" : ["Kanchenjunga Base Camp Trekking", "Kanchenjunga north base camp Trek"]},
    {"title" :"Rara Trekking" , "items" : ["Rara Lake Trekking"]},
    {"title" :"Dolpo Trekking" , "items" : ["Lower Dolpo Circuit Trek", "Classic Beni Lower Dolpa Trekking", "upper dolpo trek"]},
    {"title" :"Humla Trek" , "items" : ["humla limi valley trek"]},
    {"title" :"9 Best five days trek in Nepal" , "items" : ["Everest Panorama Trekking", "Classic Langtang Valley Trekking", "Balthali Village Trek", "Annapurna Base Camp Trekking", "Mardi Himal Trek", "Tamang Heritage Trail Trekking", "Poon Hill Trek 4 days", "pikey peak trek", "Helambu Circuit Trekking"]}
    
]} ,

{"label" : "Nepal Tour" , "dropdowns" : [ {"title": 'Nepal Culture and Wildlife Adventure Tour'},{"title": 'Nepal Honeymoon Tour'},{"title": "'Buddhist Pilgrimage Tour'"},{"title": "Best of Nepal Tour "} ]},


{"label" : "Nepal Fun & Adventure" , "dropdowns" : [ {"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "}]},
{"label" : "Travel Info" , "dropdowns" : [ {"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "}]}

]

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
            <input type='text' className='flex-grow text-sm text-gray-600 placeholder:truncate  my-3 placeholder:text-gray-400 shrink pl-2 bg-transparent outline-none ml-3 '
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
        className='hidden bg-black text-white lg:flex flex-col lg:flex-row items-center ml-2 space-y-2 p-4 lg:py-1  w-full lg:space-x-4  lg:items-center
         lg:justify-center lg:mx-auto  text-md font-medium'>

                <Link href= "/"><li className='lg:w-15  text-left lg:text-center w-full lg:ml-2'>Home</li></Link>

             
          {
          menuItems.map((link,i)=> {
            return (<li className='w-full  text-left lg:text-center ' key={link.tripType}>
              
              <VerticalDropdown as={Fragment}  key={link.tripType} tripType = {link.tripType} toggleMenu={toggleMenu}   dropdowns= {link.dropdowns}  /> 
            </li>
              
              )
              
            })}
            <Link href= "/aboutus"><li className='w-full lg:w-15 text-left lg:text-center '>About Us</li></Link>

            <Link href= "/contact"><li className='w-full lg:w-15 text-left lg:text-center lg:mr-2'>Contact </li></Link>
            </ul>
      </header>





    </>

  )
}

export default Navbar