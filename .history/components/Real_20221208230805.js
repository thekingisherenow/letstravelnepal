import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Real() {
    return (
        <section className="bg-white  ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold mt-5 text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl">
                    Real  Client Review
                </h1>

                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>



                <div className="flex items-start max-w-6xl mx-auto mt-16 relative">


                    <Carousel autoPlay infiniteLoop
                        // showStatus={false}
                        // showIndicators={false}
                        showThumbs={false}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            // hasPrev && (
                                <button onClick={onClickHandler}
                                    className=" bg-gray-700 absolute   lg:top-5 lg:left-10 z-10  cursor-pointer  border rounded-full 
                               lg:block hover:bg-gray-300
                                      ">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg> 
                                </button>
                            // )
                        }

                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button onClick={onClickHandler}
                                    className="bg-gray-700 absolute lg:top-5 z-10 lg:right-2 cursor-pointer border rounded-full 
                                    lg:block  hover:bg-gray-300
                                ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )
                        }

                    >

                        <div className=''>
                            <p className="flex items-center text-center text-gray-500 lg:mx-8 container">
                                We had an excellent time. We only had a short time to try some trekking and this walk was just one night away and a few hours walk each day which suited us perfectly. We had great views of the mountains for both sunrise and sunset. Accomodation was basic but clean and had own (western style) toilet. Prajan was an excellent guide - fun, relaxed and knowledgeable. The walk down through small villages and farmlets was refreshing..I recommend this agency.z
                            </p>

                            <div className="flex flex-col items-center justify-center mt-8">
                                <img className="object-cover rounded-full w-14 h-14" src="https:images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div className="mt-4 text-center">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Sanjog Gurung</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Kathmandu Don</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-red-500 ml-20'>
                            heyy
                        </div>

                    </Carousel>

                </div>
            </div>
        </section>
    )
}

export default Real
