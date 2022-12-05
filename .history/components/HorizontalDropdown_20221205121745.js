import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {  ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import {  useRouter } from 'next/router'

function HorizontalDropdown({dropdown , toggleMenu,togglePlusButton}) {
  const [open, setOpen] = useState(false)
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
        className="relative w-full h-8 lg:w-[500px]  border-b-1   inline-block text-left" >
          
              <div 
               className="inline-flex w-full rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none 
               focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
         {dropdown.tripName}
         <ChevronRightIcon 
              className="ml-2 hidden absolute lg:inline-block right-1 -mr-1 h-5 w-5 text-green-200   hover:text-green-100"
              aria-hidden="true"
            />
            
            <PlusIcon onClick={()=>togglePlusButton}
             className='lg:hidden absolute -right-0 border-l-2 mr-8 p-1 -top-2  border-gray-300 w-8 h-12  '/>
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
              className="absolute z-50 w-1/2 lg:w-[320px] right-2 -top-4 text-left lg:-top-5  lg:-right-80 my-2  origin-top-right 
               overflow-y-scroll lg:overflow-hidden  rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                        
                         <div 
                           className={`${active ? 'bg-green-500 text-white' : 'text-white'
                             } group flex  items-start border-b-2 border-gray-500 text-white rounded-md px-2 py-2 text-sm`}
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