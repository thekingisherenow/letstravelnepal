import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, CalendarIcon } from '@heroicons/react/20/solid'
import TourDetails from '../components/TourDetails'
import { FaSign } from 'react-icons/fa'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Single() {
  let [categories] = useState({
    "Overview": [],
    "Depature & Dates": [],
    "Gallery": [],
    "Maps": [],
    "Useful Info": [],
  })

  const qna = [
    { "What is your name?": "My name is PrajanBhattarai." },
    { "What is your age?": "Age is 26." },
    { "Where do you live ?": "I live in kapan" }
  ]
  qna.map((single, i) => {
    console.log("question", Object.keys(single));
    console.log("answer", single[Object.keys(single)])
  })

  return (
    <>
      {/* IMAGE  */}
      <div className='relative'>

        <img src="https://www.guideinhimalaya.com/uploads/img/Jomsom-Muktinath-Trek.jpg"
          className='w-full image-cover ' />
        <h1 className='absolute inset-x-0 bottom-8 text-center text-4xl  text-white'>Jomsom Trek</h1>
      </div>

      


          {/* //grids  */}
          <div className='grid grid-cols-1  lg:grid-cols-3 lg:mx-w-full  mx-auto'>
          
          <div className='col-span-1 p-12 -mt-8 lg:hidden'>
              <TourDetails />
            </div>
            

            

            <div className='col-span-1 lg:col-span-2 '>
              {/* TABS */}
      <div className="tabs w-full max-w-7xl px-32 mx-auto py-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text ',
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
                <Tab.Panel>
                  <h1 className='text-4xl w-full border-b-2 border-green-700 px-1 pt-10 pb-6 font-normal'>Jomson Muktinath Trek</h1>

                  <p className="indent-8 p-2 m-2 text-gray-700 text-xl">Trekking to Jomsom – Muktinath can be started from Pokhara or fly to Jomsom and trek to Muktinath then walk down to Pokhara or fly out from Jomsom; either one is possible. Muktinath is one of the most important pilgrimage sites for both Hindus and Buddhists and you encounter ascetic sadhus carring trident and more than a blanket on the way. We see people selling saligram along the way to Kali Gandaki, a black stone that, when broken opens reveals the fossilized remains of prehistoric ammonites that lived here more than 140 million years ago,  </p>

                  <p className="indent-8 p-2 m-2 text-gray-700 text-xl">It is believed that ‘Visnu in Stone’ as a legend god Visnu turned into stone by the beautiful and virtuous Vrinda he seduced her. We trek down to Tatopani through beautiful Thakali village of Marpha(2680m), the place of trekkers favorite, impressive kanis  . And there is big Samtenling Gompa at Marpha. You can take healing bathe in the pond of natural hot spring in Tatopani which is 60 degree Celsius hot. You will walk through the Kali Gandaki Valley which was centuries before the primary trade route between the Tibet and India. This trek guarantees visitors for a wonderful landscape of natural beauties, great Himalayan scenery and unique tribal culture. No words to describe the beautiful panorama from Poon Hill/3210m.

                  </p>

                  <div className="w-full px-4 pt-16">

                    <div className="mx-auto max-w-6xl rounded-2xl bg-white p-2">

                      {qna.map((single, i) => {
                        return (
                          <>
                            <Disclosure>
                              {({ open }) => (
                                <div className='flex'>
                                  <div >

                                    <Disclosure.Button className="flex w-[800px]  justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-green-500 
                                    focus-visible:ring-opacity-75">
                                      <div className='relative'>
                                      <span className='h-30 w-30 text-6xl'><FaSign/></span>
                                      <h1 className='text-white text-2xl top-4 right-4 absolute '>{i+1}</h1>
                                      </div>
                                      <div>
                                      <h2>Day: {i+1}</h2>
                                      <h1>{Object.keys(single)}</h1>
                                      </div>
                                      <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                          } h-5 w-5 text-green-500`}
                                      />
                                    </Disclosure.Button>
                                    <div>

                                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        {single[Object.keys(single)]}
                                      </Disclosure.Panel>
                                    </div>
                                  </div>

                                </div>
                              )}
                            </Disclosure>
                          </>
                        )
                      })}


                    </div>
                  </div></Tab.Panel>
               
              </Tab.Panels>
             
            
        </Tab.Group>
          </div>
            </div>
            <div className='hidden lg:inline-block lg:col-span-1 '>
              <TourDetails />
            </div>
            
      </div>








    </>
  )
}

export default Single