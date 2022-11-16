import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {  ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid'

function HorizontalDropdown({dropdown}) {
  const [open, setOpen] = useState(false)
  return (
    <>
    

        <Menu as="div" onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
        className="relative lg:w-full h-8  inline-block text-left" >
          
              <div onClick={()=>{}}
               className="inline-flex  justify-center items-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
         {dropdown.title}
         <ChevronRightIcon 
              className="ml-2 hidden lg:inline-block -mr-1 h-5 w-5 text-green-200   hover:text-green-100"
              aria-hidden="true"
            />
            {/* <PlusIcon className='lg:hidden absolute right-4 w-10 h-10  '/> */}
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

              <Menu.Items static
              className="lg:absolute fixed z-50 w-1/2 -right-60 -top-2 lg:-right-56 lg:-top-4 my-2  origin-top-right divide-y divide-gray-100 rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <>
              

                  {dropdown.items?.map((item)=>{
                    return ( 
                      <>
                      
                      {open && <div key={item}
                      onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
                      className="px-1 py-1 ">
                     
                       <Menu.Item >
                       {({ active }) => (
                         <button
                           className={`${active ? 'bg-green-500 text-white' : 'text-white'
                             } group flex w-full items-center text-white rounded-md px-2 py-2 text-sm`}
                         >
                            {item}
                         </button>
                       )}
                     </Menu.Item>
                     
                   
                    
                     </div>
                  
                     }
                     </>
                    )

                  })}

              
                
                </>
              </Menu.Items>
            </Transition>
          </Menu>
          
          </>
    
  )
}

export default HorizontalDropdown