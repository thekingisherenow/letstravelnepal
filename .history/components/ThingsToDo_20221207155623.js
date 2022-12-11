import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
    return (
        <section>
            <div className='h-96 w-full  bg-white relative '>
                {/* Image source */}
                {/* <div className='h-96   brightness-75 w-full '>
                    <Image src="https://iili.io/HCZUeRa.jpg" className='w-full h-20 ' fill />
                </div> */}
                <div  style = {{backgroundImage: `url("https://iili.io/HCZUeRa.jpg")`}}
                 className='bg-scroll w-full
                  
                  '>
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                        Things To Do
                    </h1>

                    <div className="flex justify-center  mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>

                    {/* Containers */}
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/3 md:w-1/2 p-4  w-full">
                                <a className="block relative h-96 md:h-52 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover border-2 border-white object-center w-full h-full block" src="https://iili.io/HCD1P0Q.jpg" />
                                </a>

                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4  w-full">
                                <a className="block relative h-96 md:h-52 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover border-2 border-white object-center w-full h-full block" src="https://iili.io/HCD1LdB.jpg" />
                                </a>

                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <a className="block relative h-96 md:h-52 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover border-2 border-white object-center w-full h-full block" src="https://iili.io/HCD1igV.jpg" />
                                </a>

                            </div>



                        </div>
                        <button className=" flex justify-center mx-auto m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded-full">More Activities</button>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default ThingsToDo
