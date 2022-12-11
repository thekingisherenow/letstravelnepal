import Image from 'next/image'
import React from 'react'
import styles from "../styles/Home.module.css"

function ThingsToDo() {

    console.log("styles",styles)
    return (
        <section className='w-full'>
            <div className=' h-[1500px] sticky lg:h-95 md:h-[700px] lg:h-[500px]  w-full  bg-white mb-10 '>
                
                <div  
                className={styles.backgroundimage}>
                    <div className='absolute top-0 w-full'>

                 
                    <h1 className="text-3xl font-semibold text-center p-4   text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                        Things To Do
                    </h1>
                        {/* BORDER BELOW TITLE */}
                    <div className="flex justify-center  mt-2">
                        <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-green-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
                    </div>

                    {/* Containers */}
                    <div className="container  px-1 py-10 min-[1200px]:ml-28 ">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/3 md:w-1/2 p-4 cursor-pointer  w-full">
                                <a className="block relative h-96 md:h-52 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover border-2 border-white object-center w-full h-full block" src="https://iili.io/HCD1P0Q.jpg" />
                                </a>

                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 cursor-pointer  w-full">
                                <a className="block relative h-96 md:h-52 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover border-2 border-white object-center w-full h-full block" src="https://iili.io/HCD1LdB.jpg" />
                                </a>

                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 cursor-pointer w-full">
                                <a className="block relative h-96 md:h-52 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover border-2 border-white object-center w-full h-full block" src="https://iili.io/HCD1igV.jpg" />
                                </a>

                            </div>



                        </div>
                    </div>

                    <div className='w-full flex justify-center mx-auto'>
                        <button className=" m-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded-full">More Activities</button>
                    </div>

                </div>

                </div>
            </div>
        </section>
    )
}

export default ThingsToDo
