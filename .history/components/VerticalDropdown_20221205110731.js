import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/solid'
import HorizontalDropdown from './HorizontalDropdown'
import { useMediaQuery } from 'react-responsive'

function VerticalDropdown({ tripType, dropdowns , toggleMenu ,mobileCheck }) {
  const [open, setOpen] = useState(false)
// second open refers to the state of the non-static menu items.
  const [secondOpen, setSecondOpen] = useState(false)
  
  const togglePlusButton = () => {
      setSecondOpen(!secondOpen)

  }
  const mobileScreen = useMediaQuery({
    query: '(max-width: 1024px)'
  })
  console.log("mobileScreen",mobileScreen)
  // console.log("tripType in vertical dropdown imported from navbar",tripType)
  // console.log("dropdowns in vertical dropdown imported from navbar",dropdowns)
  return (
    <>
      <Menu as="div" onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
      className="relative inline-block w-full  ">
        <div>
          <Menu.Button onClick={()=>setSecondOpen(!secondOpen)}
           className="flex w-full  justify-start lg:justify-center text-center
           rounded-md bg-black bg-opacity-20 px-0 lg:py-2 py-1 text-md  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {tripType}

            <ChevronDownIcon 
              className="ml-1 hidden lg:inline-block -mr-1 mt-2 h-3 w-3 text-green-200   hover:text-green-100"
              aria-hidden="true"
            />
            <PlusIcon className='lg:hidden absolute right-10 top-0 border-l-2  w-10 h-12 p-2  '/>
          </Menu.Button>
        </div>
        <Transition show={true}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >

            {/* // eeuta tarika k cha bhane..CONDITIONAL RENDERING Menu.items  
            What i want ??

            laptop ma click garnu paross.. 760px bhanda thorai huda.. maybe another logic needs to be added.another variable -
             to know if the media query is greater or  smaller than lg. and that logic + mobile check garera- static or non static nature is determined. 
            
            
            */} 
          {(mobileCheck===false && mobileScreen===true)? 
          <Menu.Items 
          className="lg:absolute w-full lg:-right-24 lg:w-[250px]  lg:top-8 mt-2  origin-top-right  rounded-md bg-black shadow-lg
           ring-1 ring-black ring-opacity-5 focus:outline-none">
        
           {secondOpen && <div as={Fragment}>
             {dropdowns.map((dropdown, i) => {
               console.log("non-static wala menu item bhitra")

               return (
                 <Menu.Item key={i} >
                   {({ active }) => (
                     <button 
                       className={`${active ? 'bg-green-500 text-white' : 'text-white'
                         } group flex w-full   items-center border-b-2 border-gray-500   rounded-md px-2 py-2 text-sm`}
                     >
                       {(dropdown.tripSubNames && dropdown.tripSubNames.length )?
                       <HorizontalDropdown dropdown = {dropdown} toggleMenu={toggleMenu} togglePlusButton={togglePlusButton} />  : <span className='px-4 text-left'>{dropdown.tripName} </span>} 

                     </button>
                   )}
                 </Menu.Item>
               )

             })}

           </div> }

         </Menu.Items>
          :
          
          <Menu.Items static
          className="lg:absolute w-full lg:-right-24 lg:w-[250px]  lg:top-8 mt-2  origin-top-right  rounded-md bg-black shadow-lg
           ring-1 ring-black ring-opacity-5 focus:outline-none">
           {open &&
           <div as={Fragment}>

             {dropdowns.map((dropdown, i) => {
               console.log("static wala menu item bhitra")
               return (
                 <Menu.Item key={i} >
                   {({ active}) => (
                     <button
                       className={`${active ? 'bg-green-500 text-white' : 'text-white'
                         } group flex w-full   items-center border-b-2 border-gray-500   rounded-md px-2 py-2 text-sm`}
                     >
                       {(dropdown.tripSubNames && dropdown.tripSubNames.length )?
                       <HorizontalDropdown dropdown = {dropdown} toggleMenu={toggleMenu} />  : <span className='px-4 text-left'>{dropdown.tripName} </span>} 

                     </button>
                   )}
                 </Menu.Item>
               )

             })}

           </div> }

         </Menu.Items>
          }
          
        </Transition>
      </Menu>
    </>
  )
}

export default VerticalDropdown