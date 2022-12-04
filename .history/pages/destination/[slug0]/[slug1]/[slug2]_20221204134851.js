import { useRouter } from 'next/router'
import mongoose from 'mongoose';
import Destination from '../../../../Models/Destination';
import Error from '../../../../components/Error';
import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, CalendarIcon } from '@heroicons/react/20/solid'
import TourDetails from '../../../../components/TourDetails';
import { FaSign } from 'react-icons/fa'
import NeedHelp from '../../../../components/NeedHelp';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Slug({destination}) {
    const router = useRouter()
    const { slug0,slug1,slug2 } = router.query

    console.log("destination ko valuye",destination)

    let [categories] = useState({
      "Overview": [],
      "Depature & Dates": [],
      "Gallery": [],
      "Maps": [],
      "Useful Info": [],
    })
    const dolist = ["Kathmandu – Pokhara – Kathmandu transfer by tourist bus.",
      "Pokhara – Jomsom by domestic flight and airport taxes.",
      "2 nights deluxe room in 2** hotel in Pokhara with breakfast on twin /double occupancy basis.",
      "An experienced registered English speaking local Jomsom Muktinath trekking guide.",
      "Necessary porters to carry all personal and group equipment as per group size",
      "Meals: trekking breakfast during the trekking.",
      "Food, accommodation, salary and insurance of your guide and porter.",
      "Lodge accommodation during the trek on twin sharing basis",
      "All necessary Jomsom – Muktinath trekking permits.",
      "Government tax, vat and office service charge etc."]
  
    const dontlist = ["Accommodation, meals and transfers in Kathmandu and Pokhara",
      "All bar bills, beverages such as coke, fanta, mineral water etc.",
      "Lunch and dinner during the trekking.",
      "Personal travel insurance rescue operation in case of emergency.",
      "Personal trekking gear, internet, phone calls laundry and toiletries",
      "Gratitude and tips for your guide and porter.",
  
    ]
  
    const accordians = destination?.accordianobj
    

   if (!destination){
    return ( <Error />)
           
   }
   else {
  
  return (
    <>
    {/* IMAGE  */}
    <div className='relative'>

      <img src={destination.trekImage}
        className='w-full image-cover  ' />
      <h1 className='absolute inset-x-0 bottom-8 text-center text-5xl font-bold  text-white'>{destination.trekName}</h1>
    </div>




    {/* //grids  */}
    <div className='grid grid-cols-1  lg:grid-cols-3 lg:max-w-7xl bg-white lg:mx-auto'>

      <div className='col-span-1 p-12 -mt-8 lg:hidden'>
        <TourDetails destination = {destination} />
      </div>




      <div className='col-span-1 lg:col-span-2 px-10 py-4  '>
        {/* TABS */}
        <div className="tabs w-full max-w-7xl p-32 mx-auto py-2 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-5 text-xl font-medium leading-5 text ',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-700 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-black text-white shadow'
                        : 'bg-white hover:bg-white/[0.12] text-black hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel className="pl-2 ">
                <h1 className='text-4xl w-full text-black border-b-2 border-green-700 pl-5 pt-10 pb-6 font-normal'>{destination.trekName}</h1>

                <p className="indent-8 p-2 m-2 text-gray-700 text-xl">{destination.trekDescription}</p>

                <p className="indent-8 p-2 m-2 text-gray-700 text-xl">It is believed that ‘Visnu in Stone’ as a legend god Visnu turned into stone by the beautiful and virtuous Vrinda he seduced her. We trek down to Tatopani through beautiful Thakali village of Marpha(2680m), the place of trekkers favorite, impressive kanis  . And there is big Samtenling Gompa at Marpha. You can take healing bathe in the pond of natural hot spring in Tatopani which is 60 degree Celsius hot. You will walk through the Kali Gandaki Valley which was centuries before the primary trade route between the Tibet and India. This trek guarantees visitors for a wonderful landscape of natural beauties, great Himalayan scenery and unique tribal culture. No words to describe the beautiful panorama from Poon Hill/3210m.

                </p>

                {/* Itinerary  */} 

                {(destination.accordianobj.length>0) && <div className="w-full  border-gray-200 border-2 max-w-4xl mx-auto mt-10 pt-4">
                  <h1 className='text-2xl p-2 mt-4 ml-5 text-black  font-semibold'>Itinerary</h1>
                  <div className="   bg-white p-2">

                    {accordians.map((single, i) => {
                      return (
                        <div key={i}>
                          <Disclosure>
                            {({ open }) => (
                              <div className='flex'>
                                <div >

                                  <Disclosure.Button className="flex  justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-green-500 
                                  focus-visible:ring-opacity-75">
                                    <div className='relative'>
                                      <span className='h-30 w-30 text-6xl'><FaSign /></span>
                                      <h1 className='text-white text-2xl top-4 right-3 text-center absolute '>{i + 1}</h1>
                                    </div>
                                    <div className='ml-5 p-2'>
                                      <h2 className='text-gray-400 text-md'>Day: {i + 1}</h2>
                                      <h1 className='text-vlack text-xl font-semibold'>{Object.values(single)[0]}</h1>
                                    </div>
                                    <ChevronDownIcon
                                      className={`${open ? 'rotate-180 transform' : ''
                                        } h-10 w-10 mt-6 p-2   text-green-500`}
                                    />
                                  </Disclosure.Button>
                                  <div>

                                    <Disclosure.Panel className=" pt-3 px-12 ml-14 text-lg text-gray-500">
                                    {Object.values(single)[1]}
                                    </Disclosure.Panel>
                                  </div>
                                </div>

                              </div>
                            )}
                          </Disclosure>
                        </div>
                      )
                    })}


                  </div>
                </div>}
                {/* LIST DO's*/}

                <div className='mt-6'>
                  <h2 className="mb-2 text-lg font-semibold   text-black">
                    Cost includes: </h2>
                  <ul className="space-y-2  list-inside text-gray-500 dark:text-gray-400">
                    {/* {console.log(dolist)} */}
                    {dolist.map((item,i) => {
                      return (
                        <div key={i}>
                     <li className="flex items-center text-lg">
                       <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {item}
                     </li>
                      </div>
                    )})}
                  </ul>

                </div>
                {/* DONT  */}

                <div className='mt-6'>
                  <h2 className="mb-2 text-xl font-semibold  text-black">
                    Cost excludes: </h2>
                  <ul className="space-y-2 text-lg list-inside text-gray-500 dark:text-gray-400">
                    {dontlist.map((item,i)=>{
                      return(
                        <div key={i}>
                       <li className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414R.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293 z" clipRule="evenodd"></path></svg>
                      {item}

                    </li>
                        </div>
                      )
                    })}
                    

                  </ul>
                </div>
                {/* // CUSTOMIZE MY TRIP  */}
                <button type="button" className="focus:outline-none text-white text-lg flex justify-center mx-auto items-center  bg-green-700 mt-5  hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Customize my trip.</button>



              </Tab.Panel>
              <Tab.Panel>
                {/* Departure and Dates, */}

                <div>
                  <h1>Dates and Prices</h1>
                  <h2>We are local tour and trekking operator based in Kathmandu so we guaranty small private group departures any dates that suits your date and time. Please kindly contact us for your customized departure date, itinerary and the price. Thank you and Namaste!</h2>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                {/* Gallery */}
                <div>
                  <h1>Photoes and Videos </h1>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                {/* Maps */}
                <div>
                  <h1>Trip Map </h1>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                {/* Useful Info. */}
                <div>
                  <h1>Useful Info </h1>
                </div>
              </Tab.Panel>

            </Tab.Panels>


          </Tab.Group>
        </div>
        <div className='lg:hidden '>
          <NeedHelp />

        </div>
      </div>
      <div className='hidden  lg:pt-8 lg:inline-block lg:max-w-xs lg:col-span-1 '>
        <TourDetails destination = {destination} />
        <NeedHelp />
      </div>

    </div>


    {/* YOU MAY ALSO LIKE */}
    <div className='bg-gray-200 p-2 '>
      <h1 className='text-4xl border-b-2 border-gray-600 font-bold text-center'>You may also Like.</h1>
      <div className='flex flex-wrap  '>


        <div className=" md:w-1/2  w-1/2 p-3 m-1 sm:m-4 cursor-pointer   shadow-xl">

          <a className="block relative rounded overflow-hidden">
            <img alt="ecommerce" className=' h-[60vh] mx-auto   md:h-[36vh] block'
              src="https://www.guideinhimalaya.com/uploads/img/view-from-tadapani-in-poon-hill-trek.jpg" /> </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">category</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Annapurna Base Camp Trek</h2>
            <p className="mt-1">Duration : 7 Days</p>
            <div className='w-full m-4  flex'>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Enquires
              </div>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Trip Details
              </div>
            </div>
          </div>
        </div>
        <div className="  md:w-1/3  w-1/2 p-3 m-1 sm:m-4 cursor-pointer   shadow-xl">

          <a className="block relative rounded overflow-hidden">
            <img alt="ecommerce" className=' h-[60vh] mx-auto   md:h-[36vh] block'
              src="https://www.guideinhimalaya.com/uploads/img/view-from-tadapani-in-poon-hill-trek.jpg" /> </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">category</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Annapurna Base Camp Trek</h2>
            <p className="mt-1">Duration : 7 Days</p>
            <div className='w-full m-4  flex'>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Enquires
              </div>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Trip Details
              </div>
            </div>
          </div>
        </div>
        <div className="  md:w-1/3  w-1/2 p-3 m-1 sm:m-4 cursor-pointer   shadow-xl">

          <a className="block relative rounded overflow-hidden">
            <img alt="ecommerce" className=' h-[100vh] w-30 object-contain  mx-auto   md:h-[36vh] block'
              src="https://www.guideinhimalaya.com/uploads/img/view-from-tadapani-in-poon-hill-trek.jpg" /> </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">category</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Annapurna Base Camp Trek</h2>
            <p className="mt-1">Duration : 7 Days</p>
            <div className='w-full m-4  flex'>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Enquires
              </div>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Trip Details
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4  md:w-1/3  w-1/2 p-3 m-1 sm:m-4 cursor-pointer   shadow-xl">

          <a className="block relative rounded overflow-hidden">
            <img alt="ecommerce" className=' h-[60vh] mx-auto   md:h-[36vh] block'
              src="https://www.guideinhimalaya.com/uploads/img/view-from-tadapani-in-poon-hill-trek.jpg" /> </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">category</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Annapurna Base Camp Trek</h2>
            <p className="mt-1">Duration : 7 Days</p>
            <div className='w-full m-4  flex'>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Enquires
              </div>
              <div className='w-1/2 border-2 text-center border-gray-600'>
                Trip Details
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>





  </>
  )
}
}

export default Slug

export async function getServerSideProps(context) {
  if (!(mongoose.connection.readyState === 1)) {
    await mongoose.connect(process.env.MONGODB_URI);
}
console.log("database connected.")

// console.log(context.query.slug0,context.query.slug1,context.query.slug2)
let destination = await Destination.findOne({slug0:context.query.slug0,
  slug1:context.query.slug1,slug2:context.query.slug2
})
// console.log("destination.get server side props bhitra",destination)

  return {
    props: {destination : JSON.parse(JSON.stringify(destination))}, // will be passed to the page component as props
  }
}
