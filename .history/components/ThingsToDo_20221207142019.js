import Image from 'next/image'
import React from 'react'

function ThingsToDo() {
    return (
        <div className='mt-20 bg-white relative '>
            {/* Image source */}
            <div className='h-[400px]  brightness-75 w-full '>
                <Image src="https://iili.io/HCZUeRa.jpg" className='w-20 h-20 object-cover object-top' fill />
            </div>
            <div className='container mx-auto absolute top-4 '>
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                    Things To Do
                </h1>

                <div className="flex justify-center  mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>

                {/* Containers */}
                <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
     
     
   
    </div>
  </div>

            </div>



        </div>
    )
}

export default ThingsToDo
