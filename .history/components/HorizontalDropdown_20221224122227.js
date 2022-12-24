import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {  ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import {  useRouter } from 'next/router'

function HorizontalDropdown({dropdown , toggleMenu,togglePlusButton,mobileCheck,mobileScreen}) {
  const [open, setOpen] = useState(false)
  // console.log("tripNameLink",dropdown.tripNameLink)

  let trek
  let trek1 
  let trek2 
  let trek3 
  const router = useRouter()

  const LinkTwo = (data) => {
    // console.log("link-two bhitra",data)
    trek = data.split("/")
    trek1 =trek[0]
    trek2=trek[1]
    router.push({
      pathname : '/destination/[slug0]/[slug1]',
      query : {slug0 : trek1 ,slug1 : trek2 }
    })
    toggleMenu();

    console.log("trek",trek)
  }
  const LinkThree = (data) =>{
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
        className=" h-8 lg:w-[500px]  border-b-1 cursor-pointer inline-block text-left" >
          
              <div 
               className="inline-flex w-full rounded-md  px-4 py-2 text-sm font-medium cursor-pointer text-white hover:bg-opacity-80 focus:outline-none 
               focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <span className='text-left'
                 onClick={()=>LinkTwo(dropdown.tripNameLink)}>
                  {dropdown.tripName}</span>
         <ChevronRightIcon 
              className="ml-2 hidden absolute lg:inline-block right-1 -mr-1 h-5 w-5 text-green-200   hover:text-green-100"
              aria-hidden="true"
            />
            
            <PlusIcon 
             className='lg:hidden absolute right-6 font-bold -top-2 border-l-2 border-gray-600 w-10 h-12  p-2  '/>
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
                {/* // conditional rendering to be added here as well.......tara 
             
                2. static ko lagi open state already created.. create secondOne state for dynamic data. click wala ma.
                3. conditional render.
                4. try to 
                
                */}
                {(mobileCheck===false && mobileScreen===true)?
              <Menu.Items 
              className="absolute min-w-[150px] z-50 w-1/2 lg:w-[320px] right-2 -top-4 text-left lg:-top-5  lg:-right-80 my-2  origin-top-right 
               overflow-y-scroll lg:overflow-hidden  rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className='px-4 '>
                  {dropdown.tripSubNames.map((item,index)=>{

                    return ( 
                      <Fragment key={item}>
                      {secondOpen && <div 
                      onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
                      className="px-1 py-1  ">
                        
                       <Menu.Item >
                       {({ active }) => (
                        
                         <div onClick={()=>LinkThree(dropdown.tripSubNameLinks[index])}
                           className={`${active ? 'bg-green-500 text-white' : 'text-white'
                             } group flex  items-start border-b-2 border-gray-500 text-white rounded-md px-2 py-2 text-sm`}
                         >
                            {item}
                         </div> )}
                     </Menu.Item>
                    </div>
                     }
                     </Fragment>
                    )
                  })}
                </div>
              </Menu.Items>
                :
                
                
              <Menu.Items static
              className="absolute min-w-[150px] z-50 w-1/2 lg:w-[320px] right-2 -top-4 text-left lg:-top-5  lg:-right-80 my-2  origin-top-right 
               overflow-y-scroll lg:overflow-hidden  rounded-md bg-black text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className='px-4 '>
              

                  {dropdown.tripSubNames.map((item,index)=>{
                 
                    return ( 
                      <Fragment key={item}>
                      {open && <div 
                      onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}
                      className="px-1 py-1  ">
                        
                       <Menu.Item >
                       {({ active }) => (
                        
                         <div onClick={()=>LinkThree(dropdown.tripSubNameLinks[index])}
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

              
                
                </div>
              </Menu.Items>}
            </Transition>
          </Menu>
          
          </>
    
  )
}

export default HorizontalDropdown