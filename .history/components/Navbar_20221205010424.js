import Image from 'next/image'

import React, { Fragment, useEffect, useRef, useState } from 'react'
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

  const [mobileCheck, setMobileCheck] = useState(false)
  

  useEffect(() => {
    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      console.log(check)
      setMobileCheck(check)
      return check;
    };
    

  
  }, [])
  

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

          <Link href= "/"><li className='lg:w-28 lg:py-2  text-left lg:text-center w-full items-center mt-1  lg:mx-0 mx-4 my-2 border-b-2   border-gray-300 lg:border-none'>Home</li></Link>

             
          {
          menuItems.map((link,i)=> {
            return (<li className='w-full lg:w-36 lg:mx-2 mx-4 text-left lg:text-center lg:border-none border-b-2   border-gray-300 items-center' key={link.tripType}>
              
              <VerticalDropdown as={Fragment} mobileCheck={mobileCheck} key={link.tripType} tripType = {link.tripType} toggleMenu={toggleMenu}   dropdowns= {link.dropdowns}  /> 
            </li>
              
              )
              
            })}
            <Link href= "/aboutus"><li className='w-full lg:py-2 lg:w-28 text-left lg:text-center items-center border-b-2   border-gray-300 lg:border-none  lg:mx-0 mx-4  my-2'>About Us</li></Link>

            <Link href= "/contact"><li className='w-full lg:py-2 lg:w-28 text-left lg:text-center items-center border-b-2   border-gray-300 lg:border-none lg:mx-0 mx-4 my-2'>Contact </li></Link>
            </ul>
      </header>





    </>

  )
}

export default Navbar