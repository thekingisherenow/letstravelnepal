import Image from 'next/image'

import React, { Fragment, useRef, useState } from 'react'
import { Bars3Icon, ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import VerticalDropdown from './VerticalDropdown'

function Navbar() {

  const ulRef = useRef()

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


{"label" : "Adventure" , "dropdowns" : [ {"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "},{"title": "adventure ho yo "}]},
{"label" : "Travel Info" , "dropdowns" : [ {"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "},{"title": "travel ho yo "}]}

]

  return (
    <>
      <header className='sticky top-0 z-50 '>

        {/* //TOP NAV */}

        {/* //LOGO */}
        <div className=' mx-auto flex bg-white z-50 sticky top-0 shadow-xl py-2 px-1 flex-grow lg:py-3 flex-shrink-0 lg:shadow-sm'>

          <div className='flex h-16 w-32 relative mt-2 object-contain cursor-pointer flex-grow sm:flex-grow-0'>
            <Image className=''
              src="https://iili.io/pfthtn.jpg" fill
              alt="" />
          </div>

          {/* SEARCH BARR  */}


          <div className='flex ml-20 justify-between items-center lg:border-2 py-2   rounded-full shadow-xl'>
            <input type='text' className='flex-grow text-sm text-gray-600 placeholder:truncate placeholder:text-gray-400  pl-2 bg-transparent outline-none ml-3 '
              placeholder='Start exploring Nepal..' />
            <MagnifyingGlassIcon className=' w-10 h-10 hidden lg:inline-flex   bg-green-400 p-2 rounded-full  text-2xl mx-2 ' />

          </div>
          {/* RIGHT PART  */}

          <div className='flex justify-end items-center'>
            Contact us on : +977-9863318496
          </div>
        </div>

        {/* //BOTTOM NAV */}
        <div className='bg-black text-white text-center sticky top-20 z-40  shadow-xl'>
        {navMenu? <XMarkIcon  onClick={()=>toggleMenu()} 
          className='flex text-right ml-auto cursor-pointer p-1 justify-end w-12 h-12 text-xl lg:hidden'/> : <Bars3Icon onClick={()=>toggleMenu()} 
          className='flex text-right ml-auto cursor-pointer p-1 justify-end w-12 h-12 text-xl lg:hidden'/>}

          {/* //Drop down suru 
             //yaha samasya cha.. k bhanda kheri - lg ma hidden hunu bhayena ni ta.
          */}  
          
         
         <div >
        

        <ul ref={ulRef}
        className='hidden lg:flex flex-col items-center ml-2 space-y-2 p-4 lg:p-2 lg:flex-row w-full  lg:items-center lg:justify-center lg:mx-auto lg:space-x-1 text-md font-medium'>
                <li className='lg:w-1/2 ml-1 text-left lg:text-center'>Home</li>

             
          {links.map((link)=> {
            return (<li className='w-full lg:w-3/4 text-left lg:text-center' key={link.label}>
              
              <VerticalDropdown as={Fragment}  key={link.label} label = {link.label} dropdowns={link.dropdowns}  /> 
            </li>
              
              )
              
            })}
            <li className='w-full lg:w-1/2 text-left lg:text-center'>About Us</li>

            <li className='w-full lg:w-1/2 text-left lg:text-center'>Contact </li>
            </ul>
            </div> 






          <div></div>
        </div>
      </header>





    </>

  )
}

export default Navbar