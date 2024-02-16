import React from 'react'
import './mystyle.css'
import Banner from './Banner'

export default function HeroSection() {
  return (
    <>
     {/* Hero Section */}
  <section className="mt-20 mb-[86px] relative mx-6 sm:mx-auto sm:max-w-[616px] sm:w-full sm:mt-[176px] sm:mb-[100px] lg:max-w-[684px] lg:mb-[124px] standardLaptop:max-w-[908px] standardLaptop:mt-[200px] standardLaptop:mb-[165px] finalBK:max-w-[1326px] finalBK:mb-[190px]" >
  <div className="hero-div">
    <div className="container hero-cont">
      <div className="container header-cont">
        <h2>Design System for Sale</h2>
      </div>
      <div className='container desc-cont'>
        <p>Add consistency to the scaling up of User Experience with an organized 
assembly of guidelines, components and documentation.</p>
      </div>
    </div>
  </div>
  </section>
  <Banner/>
    </>
  )
}
