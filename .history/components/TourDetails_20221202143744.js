import { ChevronDownIcon, ChevronUpIcon, ClockIcon, MapPinIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { FaBed, FaSign, FaChartArea } from 'react-icons/fa';
import { useRouter } from 'next/router'
import mongoose from 'mongoose';
import Destination from '../Models/Destination';

function TourDetails({destination}) {
    const router = useRouter()
    const { slug0,slug1,slug2 } = router.query

    const [showMore, setShowMore] = useState(false)
    return (
        <div className='p-2'>
            <div className='bg-green-700  shadow-xl pl-8 rounded-xl '>
                <h2 className='text-white  text-xl px-2 pt-2 lg:px-5 lg:pt-5  '>Trip Price :</h2>
                <h1 className='text-3xl p-2 lg:px-5 lg:pt-2 pb-3 text-white font-semibold'>US$ {destination.price}</h1>
            </div>
            <div className='bg-black flex-col shadow-xl pl-4 lg:p-6 p-2 rounded-xl mt-5'>
                <div className='ml-4 flex p-1 lg:p-4'>
                    <ClockIcon className='w-5 h-5 text-white mt-2' />
                    <div>
                        <h2 className='text-white  text-sm px-5  '>TRIP DURATION</h2>
                        <h1 className='text-white text-xl font-semibold px-5 ' >{destination.tripDuration} DAYS</h1>
                    </div>
                </div>
                <div className='ml-4 flex p-1 lg:p-4'>
                    <MapPinIcon className='w-5 h-5 text-white mt-2' />
                    <div>
                        <h2 className='text-white  text-sm px-5  '>DESTINATION</h2>
                        <h1 className='text-white text-xl font-semibold px-5 ' >NEPAL</h1>
                    </div>
                </div>
                <div className='ml-4 flex p-1 lg:p-4'>
                    <h1 className='w-5 h-5 text-white  mt-1 lg:mt-2' ><FaChartArea /></h1>
                    <div>
                        <h2 className='text-white  text-sm px-5  '>TRIP DIFFICULTY</h2>
                        <h1 className='text-white text-xl font-semibold px-5 ' >{destination.tripDifficulty} </h1>
                    </div>
                </div>
                <div className='ml-4 flex p-1 lg:p-4'>
                    <h1 className='w-5 h-5 text-white mt-2' ><FaSign /></h1>
                    <div>
                        <h2 className='text-white  text-sm px-5  '>TRIP STYLE</h2>
                        <h1 className='text-white text-xl font-semibold px-5 ' >TREKKING</h1>
                    </div>
                </div>
                <div className='ml-4 flex p-1 lg:p-4'>
                    <h1 className='w-5 h-5 text-white mt-2' ><FaBed /></h1>
                    <div>
                        <h2 className='text-white  text-sm px-5  '>ACCOMODATION</h2>
                        <h1 className='text-white text-xl font-semibold px-5 ' >TEAHOUSE AND LODGE</h1>
                    </div>
                </div>

                <button onClick={() => setShowMore(!showMore)}
                    className='bg-white p-4 my-2 ml-8  lg:mb-6 flex cursor-pointer rounded-md text-center'>

                        
                    {showMore ?<>
                    <span className='text-xl text-black text-center'>SHOW MORE</span><ChevronDownIcon className='w-5 h-5 mt-[6px] text-xl'/>
                    </> : <><span className='text-xl text-black text-center'>
                        SHOW LESS
                        </span><ChevronUpIcon className='w-5 h-5 text-green mt-[6px] text-xl'/></>
                        }

                </button>
                {showMore &&
                    <div>
                        
                        <p className='text-white p-1'>Transportation: Domestic Flight</p>
                        <p className='text-white p-1'>Meals: Breakfasts</p>
                        <p className='text-white p-1'>Max Person: 12 People</p>
                        <p className='text-white p-1'>Min Person: 2 People</p>
                        <p className='text-white p-1'>Best Season: Spring and autumn</p>
                        <p className='text-white p-1'>Max Elevation: 5545m</p>

                    </div>}

            </div>
        </div>
    )
}

export default TourDetails


    