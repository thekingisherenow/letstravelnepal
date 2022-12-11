import Head from 'next/head'
import AboutNepal from '../components/AboutNepal'
import Banner from '../components/Banner'
import BestSelling from '../components/BestSelling'
import Testimonials from '../components/Testimonials'
import ThingsToDo from '../components/ThingsToDo'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div >
      <Head>
        <title>Let &apos;s travel Nepal</title>
        <meta name="description" content="Travel agency located at Kathmandu,Nepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

     <main className='max-w-screen-2xl mx-auto'>
      {/* <CopiedNavbar /> */}
       <Banner  />

      
      
      <BestSelling />
      <ThingsToDo  />
      <AboutNepal />
      <Testimonials  />

     </main>

     <footer>
      
     </footer>
    </div>
  )
}
