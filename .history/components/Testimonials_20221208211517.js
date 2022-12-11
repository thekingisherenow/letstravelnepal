import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
    return (
        <section className="bg-gray-600 h-80 ">
           <Carousel autoPlay infiniteLoop showStatus={false}
    showIndicators={false} showThumbs={false} >
                <div className='w-40 h-52'>
                    <h1>Heyy</h1>
                    
                </div>
                <div className='w-40 h-52'>
                    <h1>Heyy</h1>
                    
                </div>
                <div className='w-40 h-52'>
                    <h1>Heyy</h1>
                    
                </div>
            </Carousel>
        </section>
    )
}

export default Testimonials

// We had an excellent time. We only had a short time to try some trekking and this walk was just one night away and a few hours walk each day which suited us perfectly. We had great views of the mountains for both sunrise and sunset. Accomodation was basic but clean and had own (western style) toilet. Prajan was an excellent guide - fun, relaxed and knowledgeable. The walk down through small villages and farmlets was refreshing..I recommend this agency.z