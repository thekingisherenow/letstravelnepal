import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import HorizontalDropdown from './HorizontalDropdown'
import { useMediaQuery } from 'react-responsive'

function VerticalDropdown({ tripType, dropdowns , toggleMenu ,mobileCheck , mobileScreen }) {
  const [open, setOpen] = useState(false)
// second open refers to the state of the non-static menu items.
  const [secondOpen, setSecondOpen] = useState(false)
  
  const LinkTwo = (data) => {
    console.log("data",data)
    // trek = data.split("/")
  }

  const togglePlusButton = () => {
      setSecondOpen(!secondOpen)
  }
  console.log("mobileScreen",mobileScreen)
  console.log("mobilecheck")
  console.log("mobileCheck",mobileCheck)
 
  // console.log("open ko value",open)
  // console.log("secondOpen ko value",secondOpen)

  const changeStates = () => {

    // changing these value on the basis of mobilescreen and mobilecheck----
    // yedi mobile view ma cha bhane- euuta change hune .. arko nahune banaune,.
    setOpen(!open)
    setSecondOpen(!secondOpen)
  }
  return (
    <>
      <Menu as="div" 
    
      className="relative inline-block w-full  ">
        <div>
          <Menu.Button   
          onMouseOver={()=>(mobileScreen ===false)?setOpen(true) :void 0 } onMouseLeave={()=>(mobileScreen ===false)?setOpen(false):void 0}
           onClick={()=>changeStates()}
           className="flex w-full  justify-start lg:justify-center text-center
           rounded-md bg-black bg-opacity-20 px-0 lg:py-2 py-1 text-md  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75">
            {tripType}

            <ChevronDownIcon 
              className="ml-1 hidden lg:inline-block -mr-1 mt-2 h-3 w-3 text-green-200  hover:text-green-100"
              aria-hidden="true"
            />
        
            {(secondOpen || open) ? <MinusIcon className='lg:hidden absolute right-8 font-bold -top-2 border-l-2 border-gray-600 w-10 h-12  p-2  '/>:
            <PlusIcon className='lg:hidden absolute right-8 font-bold -top-2 border-l-2 border-gray-600 w-10 h-12  p-2  '/>}
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
        
           {secondOpen && <div 
          //  onClick={()=>setSecondOpen(!secondOpen) && setOpen(!open)}
          >
             {dropdowns.map((dropdown, i) => {
              //  console.log("non-static wala menu item bhitra")

               return (
                 <Menu.Item key={i} >
                   {({ active }) => (
                     <ul 
                       className={`${active ? 'bg-green-500 text-white' : 'text-white'
                         } group flex w-full list-disc  lg:list-none list-inside items-center border-t-2 border-gray-500   rounded-md px-2 py-2 text-sm`}
                     >
                      <li className='w-full relative'>{(dropdown.tripSubNames && dropdown.tripSubNames.length )?
                       <HorizontalDropdown mobileCheck={mobileCheck} mobileScreen = {mobileScreen} dropdown = {dropdown} toggleMenu={toggleMenu}
                        togglePlusButton= {togglePlusButton} />  : <span className='px-4 text-left'>{dropdown.tripName} </span>} 
                      </li>
                     </ul>
                   )}
                 </Menu.Item>
               )

             })}

           </div> }

         </Menu.Items>
          :
          <Menu.Items static
          onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
          className="lg:absolute w-full lg:-right-24 lg:w-[250px]  lg:top-8 mt-2  origin-top-right  rounded-md bg-black shadow-lg
           ring-1 ring-black ring-opacity-5 focus:outline-none">

           {open &&
           <div>

             {dropdowns.map((dropdown, i) => {
              //  console.log("static wala menu item bhitra")
               return (
                 <Menu.Item key={i} >
                   {({ active}) => (
                     <ul
                       className={`${active ? 'bg-green-500 text-white' : 'text-white'
                         } group flex w-full cursor-pointer  items-center border-b-2 border-gray-500   rounded-md px-2 py-2 text-sm`}>
                       <li className='w-full relative'>{(dropdown.tripSubNames && dropdown.tripSubNames.length )?
                       <HorizontalDropdown 
                       mobileCheck={mobileCheck} mobileScreen = {mobileScreen} dropdown = {dropdown} togglePlusButton={togglePlusButton}   toggleMenu={toggleMenu} /> 
                        : <Link href= {`destination/${dropdown.tripNameLink}`}><span 
                         className='px-4 text-left '>{dropdown.tripName} </span></Link>} </li>


                     </ul>
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