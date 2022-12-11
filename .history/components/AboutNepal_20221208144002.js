import React from 'react'
import YouTube from 'react-youtube';


function AboutNepal() {
    return (
        <section className='bg-neutral-300  w-full'>
            <div className='container p-20 mx-auto grid grid-cols-1 lg:grid-cols-2 '>
                <div className='lg:col-span-1 md:mx-10 '>
                    <h1 className='text-black w-full text-left mt-4 text-4xl'>Nepal , the Country of Traveler's Paradise </h1>
                    <div className="flex justify-start mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-lime-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-lime-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-lime-500 rounded-full"></span>
                    </div>


                    <p className='text-black mt-4 '>
                        Nepal has resumed trekking and mountaineering after six months travel ban due to global coronavirus pandemic. We are now providing trekking service in best trekking routes for the year 2023. Besides, Nepal is well-known for its great Himalaya and one of the adventurous destinations in the world but also the country is home of authentic villages, unique culture, tradition, beautiful flora and fauna, amazing wildlife and wildernesses tourist attraction that attracts thousands of tourist every year.
                    </p>
                    <div className='w-full flex justify-start mx-auto'>
                        <button className=" mt-4 bg-lime-500 hover:bg-lime-700  text-white font-bold py-2  px-4 rounded-full">Read more.</button>
                    </div>

                </div>

                <div className='lg:col-span-1  md:mx-10 '>
                    <div className=' w-full h-96 mx-auto'>

                        <iframe className=' w-full h-full'
                             src="https://www.youtube.com/embed/zyfK9iMhal4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>


            </div>
        </section>)
}

export default AboutNepal