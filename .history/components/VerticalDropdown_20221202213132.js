import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/solid'
import HorizontalDropdown from './HorizontalDropdown'

function VerticalDropdown({ tripType, dropdowns }) {
  const [open, setOpen] = useState(false)

  // console.log("tripType in vertical dropdown imported from navbar",tripType)
  // console.log("dropdowns in vertical dropdown imported from navbar",dropdowns)
  return (
    <div>
      <Menu as="div" onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
      className="relative inline-block w-full ">
        <div>
          <Menu.Button className="flex w-full lg:justify-center  justify-start rounded-md bg-black bg-opacity-20 px-0 lg:py-2 py-1 text-lg font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {tripType}

            <ChevronDownIcon 
              className="ml-1 hidden lg:inline-block -mr-1 mt-2 h-3 w-3 text-green-200   hover:text-green-100"
              aria-hidden="true"
            />
            <PlusIcon className='lg:hidden absolute right-4 w-10 h-10  '/>
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
          <Menu.Items static
           className="lg:absolute w-full lg:-right-16  lg:top-5 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {open &&
            <div className="px-1 py-1 w-full">

              {dropdowns.map((dropdown, i) => {
                return (
                  <Menu.Item key={i} >
                    {({ active }) => (
                      <button
                        className={`${active ? 'bg-green-500 text-white' : 'text-white'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                      
                      {/* ///if(arrayName && arrayName.length)  */}
                      {/* if the array exists and the value of length is greater than 0 */}

                      {/* //// yaha yedi subNames ko value 0 cha bhane chevron ko value nahalne */}
                        {(dropdown.tripSubNames && dropdown.tripSubNames.length )?
                        <HorizontalDropdown dropdown = {dropdown}/>  : dropdown.tripName } 

                      </button>
                    )}
                  </Menu.Item>
                )

              })}

            </div> }

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default VerticalDropdown