import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {  ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import {  useRouter } from 'next/router'

function HorizontalDropdown({dropdown , toggleMenu}) {
  const [open, setOpen] = useState(false)
  // console.log("horizontal dropdown bhitra chiriyo. dropdown.tripName.",dropdown.tripName)
  // console.log("dropdown.tripSubName",dropdown.tripSubNames)
  // console.log("dropdown.tripSubNameLinks",dropdown)
  // console.log(dropdown.tripSubNameLinks[1])
  let trek
  let trek1 
  let trek2 
  let trek3 
  const router = useRouter()

  const LinkPage = (data) =>{
      console.log("data",data)
      trek = data.split("/")
                    // console.log(trek)
                    trek1 =trek[0]
                    trek2=trek[1]
                    trek3=trek[2]
    router.push({
      pathname : '/destination/[slug0]/[slug1]/[slug2]',
      query : {slug0 : trek1 ,slug1 : trek2 ,slug2 : trek3 }
    })
    toggleMenu();
    
  }
  return (
    <>
    

        <Menu as="div" 
        onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
        className="relative w-full h-8 lg:w-[500px]  inline-block text-left" >
          
              <div onClick={()=>{}}
               className="inline-flex w-full rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none 
               focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
         {dropdown.tripName}
         <ChevronRightIcon 
              className="ml-2 hidden lg:inline-block -mr-1 h-5 w-5 text-green-200   hover:text-green-100"
              aria-hidden="true"
            />
            
            <PlusIcon className='lg:hidden absolute -right-1 top-1 w-8 h-8  '/>
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
              className="absolute z-50 w-1/2 lg:w-[320px] right-2 -top-4  lg:-top-5 text-start lg:-right-20 my-2  origin-top-right 
              divide-y divide-gray-100 overflow-y-scroll lg:overflow-hidden  rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <>
              

                  {dropdown.tripSubNames.map((item,index)=>{
                    trek = dropdown.tripSubNameLinks[index].split("/")
                    // console.log(trek)
                    trek1 =trek[0]
                    trek2=trek[1]
                    trek3=trek[2]

                    return ( 
                      <Fragment key={item}>
 
                    
                      
                      {open && <div 
                      onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
                      className="px-1 py-1  ">
                        
                       <Menu.Item >
                       {({ active }) => (
                        
                         <div onClick={()=>LinkPage(dropdown.tripSubNameLinks[index])}
                           className={`${active ? 'bg-green-500 text-white' : 'text-white'
                             } group flex  items-start text-white rounded-md px-2 py-2 text-sm`}
                         >
                            {item}
                         </div>
                      
                       )}
                     </Menu.Item>
                    </div>
                  
                     }
                     </Fragment>
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