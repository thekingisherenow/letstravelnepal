import Head from 'next/head'
import Banner from '../components/Banner'
import BestSelling from '../components/BestSelling'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Let's travel Nepal</title>
        <meta name="description" content="Travel agency located at Kathmandu,Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

     <main className='max-w-screen-2xl mx-auto'>
      {/* <CopiedNavbar /> */}
       <Banner />
      <Testimonials />
      <BestSelling />
     </main>

     <footer>
      
     </footer>
    </div>
  )
}
