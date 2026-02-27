import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VideoSection from '../components/Video'
import CountdownSection from '../components/CountDown'
import PrizeDistribution from '../components/PrizeDistributionSection'
import ScheduleSection from '../components/Schedule'

const Home = () => {
  return (
    <div className="bg-[#0b0b0d] text-white overflow-x-hidden">
        <Navbar/>
    <Hero/>
    <CountdownSection/>
 <VideoSection/>
 <PrizeDistribution/>
 <ScheduleSection/>
    <Footer/>

    </div>
  )
}

export default Home


