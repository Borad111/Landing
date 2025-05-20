"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Fetures from './Features/Fetures'
import Service from './Service/Service'
import ClientReview from './ClientReview/ClientReview'
import Team from './Team/Team'
import Price from './Price/Price'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos'
function Home() {
  useEffect(()=>{
    const initAOS=async()=>{
      await import ("aos");
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    };
     initAOS();

  },[])
  return (
    <div className='overflow-hidden '>
      <Hero/>
      <About/>
      <Fetures/>
      <Service/>
      <ClientReview/>
      <Team/>
      <Price/>
    </div>
  )
}

export default Home
